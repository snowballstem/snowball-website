# Makefile for building snowball.

CC=gcc
RM=rm -f

SHELL=/bin/sh
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

all:
	@for lang in $(languages); do \
	  make $${lang}/stem.c; \
	  make $${lang}/stemmer; \
	  make $${lang}/output.txt; \
	  make $${lang}/tarball.tgz; \
	done

clean:
	@for lang in $(languages); do \
	  echo "Cleaning $${lang}/"; \
	  $(RM) $${lang}/stem.[ch] $${lang}/tarball.tgz; \
	done
	@echo "Cleaning p/"
	@$(RM) p/*.o

%/tarball.tgz: %/stem.sbl %/stem.c %/stem.h %/voc.txt %/output.txt %/stemmer.html
	@echo "Making $@"
	@tar zcf $@ $^

%/output.txt: %/voc.txt %/stemmer
	l=`echo "$<" | sed 's!\(.*\)/voc.txt$$!\1!;s!^.*/!!'`; \
	$${l}/stemmer $< -o $@

# Rule for building a stemmer program for a given language
%/stemmer: %/stem.c q/api.c q/utilities.c q/driver.c
	l=`echo "$@" | sed 's!\(.*\)/stemmer$$!\1!;s!^.*/!!'`; \
	$(CC) -O4 -o $@ -I $$l/ -I q/ $^ \
	-Dcreate_env=$${l}_create_env \
	-Dclose_env=$${l}_close_env \
	-Dstem=$${l}_stem

# Rule for building the snowball to C converter
snowball: $(snowball_OBJECTS) $(snowball_HEADERS)
	$(CC) -O4 -o $@ $(snowball_OBJECTS)

.c.o:
	$(CC) -O4 -c -o $@ $<


# Command for building stem.c and stem.h from stem.sbl
# The nasty sed expressions are used to extract the bits of the filename
# into the correct from.
MAKEC_COMMAND=./snowball $< -o `echo "$@" | sed 's/\.[ch]$$//'` \
	 -eprefix `echo "$@" | sed 's!\(.*\)/stem\.[ch]$$!\1_!;s!^.*/!!'`

# Rules for building the stem.c and stem.h for each language
%/stem.c: %/stem.sbl snowball
	@echo "Making $@"
	@$(MAKEC_COMMAND)
%/stem.h: %/stem.sbl snowball
	@echo "Making $@"
	@$(MAKEC_COMMAND)

.PRECIOUS: %/stem.c
