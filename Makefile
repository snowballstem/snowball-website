# Makefile for building snowball.

CC=gcc
RM=rm -f

SHELL=/bin/sh
MAKE=make
.SUFFIXES:
.SUFFIXES: .c .h .o .sbl
srcdir=.

languages = danish dutch english french german italian norwegian \
	    porter portuguese russian spanish swedish

snowball_SOURCES = $(srcdir)/p/space.c \
		   $(srcdir)/p/sort.c \
		   $(srcdir)/p/tokeniser.c \
		   $(srcdir)/p/analyser.c \
		   $(srcdir)/p/generator.c \
		   $(srcdir)/p/driver.c
snowball_HEADERS = $(srcdir)/p/header.h
snowball_OBJECTS = ./p/space.o \
		   ./p/sort.o \
		   ./p/tokeniser.o \
		   ./p/analyser.o \
		   ./p/generator.o \
		   ./p/driver.o

all: $(addprefix lang_, $(languages)) libs

lang_%: %/stem.c %/stemmer %/output.txt %/tarball.tgz
	@true

libs: libstemmer/libstemmer.o

libstemmer/libstemmer.o: $(addsuffix /stem.o, $(languages)) \
	                 libstemmer/wrapper.o \
			 q/api.o \
			 q/utilities.o
	$(CC) -O4 -o $@ -I q/ $^

libstemmer/wrapper.o: libstemmer/wrapper.c libstemmer/modules.c q/api.h
	$(CC) -O4 -c -o $@ -I q/ $<

libstemmer/modules.c: Makefile
	@f=libstemmer/modules.c; \
	echo "Making $$f"; \
	echo "" > $$f; \
	for lang in $(languages); do \
	  echo "#include \"../$${lang}/stem.h\"" >> $$f; \
	done; \
	echo "" >> $$f; \
	echo "struct stemmer_modules {" >> $$f; \
	echo "  const char * name;" >> $$f; \
	echo "  struct SN_env * (*create)(void);" >> $$f; \
	echo "  void (*close)(struct SN_env *);" >> $$f; \
	echo "  int (*stem)(struct SN_env *);" >> $$f; \
	echo "} modules[] = {" >> $$f; \
	for lang in $(languages); do \
	  echo "  {\"$${lang}\", $${lang}_create_env, $${lang}_close_env, $${lang}_stem}, " >> $$f; \
	done; \
	echo "  {0,0,0,0}" >> $$f; \
	echo "};" >> $$f;

clean:
	@for lang in $(languages); do \
	  echo "Cleaning $${lang}/"; \
	  $(RM) $${lang}/stem.[ch] \
	        $${lang}/tarball.tgz \
	        $${lang}/output.txt \
	        $${lang}/.timestamp-output.txt \
	        $${lang}/stemmer \
	        $${lang}/*.o; \
	done
	@echo "Cleaning p/"
	@$(RM) p/*.o
	@echo "Cleaning q/"
	@$(RM) q/*.o
	@echo "Cleaning libstemmer/"
	@$(RM) libstemmer/*.o libstemmer/modules.c

%/tarball.tgz: %/stem.sbl %/stem.c %/stem.h %/voc.txt %/output.txt %/stemmer.html
	@echo "Making $@"
	@tar zcf $@ $^

%/output.txt: %/.timestamp-output.txt
	@if test ! -f $@; then $(RM) $<; $(MAKE) $<; else :; fi
%/.timestamp-output.txt: %/voc.txt %/stemmer
	@l=`echo "$<" | sed 's!\(.*\)/voc.txt$$!\1!;s!^.*/!!'`; \
	echo "Generating $${l}/output.txt"; \
	$(RM) $@; \
	echo timestamp > $@.tmp 2>/dev/null; \
	$${l}/stemmer $< -o $${l}/output.txt.tmp; \
	if cmp -s $${l}/output.txt.tmp $${l}/output.txt 2>/dev/null; then \
	  echo "$${l}/output.txt is unchanged"; \
	  $(RM) $${l}/output.txt.tmp; \
	else \
	  mv $${l}/output.txt.tmp $${l}/output.txt; \
	fi; \
	mv $@.tmp $@;

# Rule for building a stemmer program for a given language
BUILD_STEMMER=$(CC) -O4 -o $@ -I $$l/ -I q/ $^ \
	      -Dcreate_env=$${l}_create_env \
	      -Dclose_env=$${l}_close_env \
	      -Dstem=$${l}_stem
%/stemmer: %/stem.o q/api.o q/utilities.o q/driver.c
	@l=`echo "$@" | sed 's!\(.*\)/stemmer$$!\1!;s!^.*/!!'`; \
	echo $(BUILD_STEMMER); \
	$(BUILD_STEMMER)

# Rule for building the snowball to C converter
snowball: $(snowball_OBJECTS) $(snowball_HEADERS)
	$(CC) -O4 -o $@ $(snowball_OBJECTS)

.c.o:
	$(CC) -O4 -c -o $@ $<
%/stem.o: %/stem.c %/stem.h
	$(CC) -O4 -c -o $@ -I q/ $<

# Rules for building the stem.c and stem.h for each language
# The nasty sed expressions are used to extract the bits of the filename
# into the correct from.
%/stem.c %/stem.h: %/stem.sbl snowball
	@l=`echo "$<" | sed 's!\(.*\)/stem.sbl$$!\1!;s!^.*/!!'`; \
	echo ./snowball $< -o $${l}/stem -eprefix $${l}_; \
	./snowball $< -o $${l}/stem -eprefix $${l}_


.PHONY: all lang_% clean libs
.PRECIOUS: %.o
.PRECIOUS: %/stem.c %/stem.h \
	   %/stemmer \
	   %/output.txt \
	   %/tarball.tgz \
	   %/.timestamp-output.txt
