<?php function menuEntry($text, $file) {
  $href = $file;
  if ($SCRIPT_NAME != $file && file_exists($file)) {
   echo "<a href=$href>$text</a>";
  } else {
   echo $text;
  }
  echo "<br>";
 }
?>
<br>
<?php menuEntry("Introduction", "index.php") ?>
<?php menuEntry("Demo", "demo.php") ?>
<?php menuEntry("Download", "download.php") ?>
<?php menuEntry("Documentation", "docs.php") ?>
<?php menuEntry("Mailing lists", "lists.php") ?>
<?php menuEntry("License", "license.php") ?>
<?php menuEntry("Credits", "credits.php") ?>
<?php menuEntry("Projects", "projects.php") ?>

<a href="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/snowball/">Browse CVS</a>
<br>
<a href="https://sourceforge.net/projects/snowball/">Sourceforge project page</a>
<br>
<br>
<A href="http://sourceforge.net"> <IMG src="http://sourceforge.net/sflogo.php?group_id=36391" width="88" height="31" border="0" alt="SourceForge Logo"></A>
<br>
