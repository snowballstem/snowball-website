<?php
  require "menu.inc";
  displayHeader("Download");
?>

<TR><TD>
<h2>Tarballs</h2>

A <A HREF="texts/snowball.tgz">Tar gzipped file containing the Snowball sources</A> is now available.

Tarballs containing various stemming algorithms written using snowball will be made available in due course.

</TD></TR>
<TR><TD>
<p>
<h2>CVS</h2>

<p>
Developers may wish to access the latest source via anonymous CVS using the commands:
<br>
<font color="red">
  (Note that each of the following commands should be placed on a single line.)
</font>
<p>
<tt>
 cvs -z3 -d:pserver:anonymous@cvs.snowball.sourceforge.net:/cvsroot/snowball login
</tt>
<br>
<font color="red">
  (Password is blank - just press return when asked for CVS password.)
</font>
<p>

<tt>
 cvs -z3 -d:pserver:anonymous@cvs.snowball.sourceforge.net:/cvsroot/snowball co snowball
</tt>

</TD></TR>
<TR><TD>
<p>
<h2>CVS Browsing</h2>

<p>
There is also a
<A HREF="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/snowball/">web interface to the CVS repository</A>
which you can use to check on the progress of snowball.

</TD></TR>
<?php displayFooter(); ?>
