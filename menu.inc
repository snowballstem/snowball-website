<?php function menuEntry($text, $file, $href) {
  if ($SCRIPT_NAME != $file) {
   echo "<a href=$href>$text</a>";
  } else {
   echo $text;
  }
  echo "<br>";
 }
?>
<br>
<?php menuEntry("Introduction", "index.php", "index.php") ?>
<br>
<?php menuEntry("Demo", "demo.php", "demo.php") ?>
<br>
Download
<br>
Documentation
<br>
Mailing lists
<br>
License
<br>
Credits
<br>
Projects
<br>
<a href="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/snowball/">Browse CVS</a>
<br>
<a href="https://sourceforge.net/projects/snowball/">Sourceforge project page</a>
<br>
<br>
<A href="http://sourceforge.net"> <IMG src="http://sourceforge.net/sflogo.php?group_id=36391" width="88" height="31" border="0" alt="SourceForge Logo"></A>
<br>
