Snowball Website Sources
========================

This is the source for generating the website: http://snowballstem.org/

Setup
-----

You'll need the Perl `Template Toolkit`, `neato` from `graphviz`, and
`pngcrush` - on Debian you can install these with::

 apt-get install libtemplate-perl graphviz pngcrush

You need the `pygments-snowball` repo as a subdirectory, for syntax highlighting
Snowball code on the website:

git clone https://github.com/hajimes/pygments-snowball.git

You also need the `snowball` repo in a sibling directory, for the Snowball code
included on the website:

(cd .. && git clone https://github.com/snowballstem/snowball.git)

Generating the website
----------------------

Run::

 ./generate

This will create the website in `../snowballstem.github.io`.
