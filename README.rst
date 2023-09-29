Snowball Website Sources
========================

This is the source for generating the website: https://snowballstem.org/

Setup
-----

You'll need the Perl `IPC::Run` module, Perl `Template Toolkit`, `neato` from
`graphviz`, the `Closure Compiler`, `pngcrush` and `pygments` - on Debian you
can install these with::

 apt-get install libipc-run-perl libtemplate-perl graphviz closure-compiler pngcrush python3-pygments

You need `pygments` >= 2.2 for Snowball support.

You also need the `snowball` and `snowball-data` repos sibling directories::

 (cd .. && git clone https://github.com/snowballstem/snowball.git)
 (cd .. && git clone https://github.com/snowballstem/snowball-data.git)

Generating the website
----------------------

Run::

 ./generate

This will create the website in `../snowballstem.github.io`.
