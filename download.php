<?php
  require "menu.inc";
  displayHeader("Download");
?>
<p>

No download available yet.

</p>
<h1>CVS</h1>
<p>

You may access the source by anonymous CVS using the command:
<blockquote>
 cvs -z3 -d:pserver:anonymous@cvs.snowball.sourceforge.net:/cvsroot/snowball co snowball
</blockquote>
<font color="red">
  (Note that the above command should be placed on a single line.)
</font>

</p>
<?php displayFooter(); ?>
