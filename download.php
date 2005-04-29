<?php
  require "menu.inc";
  displayHeader("Download");
?>

<tr><td>
<h2>Tarballs</h2>

Several tarballs of the snowball sources are available.

<ul>
<li>
<a href="dist/libstemmer_c.tgz">The C version of the libstemmer library.</a><br/>
This contains all you need to include the snowball stemming algorithms into a
C project of your own.  If you download this, you don't need to use the snowball
compiler, or worry about the internals of the stemmers in any way.
</li>
<li>
<a href="dist/libstemmer_java.tgz">The Java version of the libstemmer library.</a><br/>
This contains all you need to include the snowball stemming algorithms into a
Java project of your own.  If you download this, you don't need to use the snowball
compiler, or worry about the internals of the stemmers in any way.
</li>
<li>
<a href="dist/snowball_code.tgz">Snowball, algorithms, and libstemmer library.</a><br/>
This contains all the source code for snowball (but not the generated source files).
This is useful mainly if you are wanting to work on the algorithms (tweaking them,
or producing new algorithms).
</li>
<li>
<a href="dist/snowball_web_and_code.tgz">Snowball, algorithms, and libstemmer library, and documentation</a><br/>
This contains all the source code for snowball (but not the generated source files), and
also the full documentation of the stemming algorithms.
</li>
<li>
<a href="dist/snowball_all.tgz">Everything related to snowball</a><br/>
This contains all the source code for snowball (but not the generated source files), and
also the full documentation of the stemming algorithms.  It also contains all
the test data files, and is therefore rather large (several megabytes).
</li>
</ul>

Tarballs containing various stemming algorithms written using snowball
are available on this website.


We do not make binary (ie, compiled) distributions of snowball available -
there are simply too many different platforms and architectures to support.  If
you wish to make such binaries available for others, and provide at least some
measure of support for ensuring that they work, feel free to contact us and we
will add a link to your work from this site.

</td></tr>
<tr><td>
<p>
<h2>Subversion</h2>

<p>
Developers may wish to access the latest source using the command:
<br>
<p>
<tt>
svn co svn://snowball.tartarus.org/snowball/trunk snowball
</tt>
</td></tr>
<tr><td>
<p>
<h2>Web interface to subversion</h2>

<p>
There is currently no web interface to the subversion repository, but one will hopefully be added in the near future.
</p>

</td></tr>
<?php displayFooter(); ?>
