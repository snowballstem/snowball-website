<?php
function relativePath($from, $to)
{
  return basename($to);
}

function menuEntry($text, $file)
{
  global $PHP_SELF;
  $href = relativePath($PHP_SELF, $file);
  if ($PHP_SELF != $file && file_exists($href)) {
    echo "<a href=$href>$text</a>";
  } else {
    echo $text;
  }
  echo "<br>";
}
?>
<td valign=top bgcolor=cyan width=128>
<br>
<?php menuEntry("Introduction", "/index.php") ?>
<?php menuEntry("Demo", "/demo.php") ?>
<?php menuEntry("Download", "/download.php") ?>
<?php menuEntry("Documentation", "/docs.php") ?>
<?php menuEntry("Mailing lists", "/lists.php") ?>
<?php menuEntry("License", "/license.php") ?>
<?php menuEntry("Credits", "/credits.php") ?>
<?php menuEntry("Projects", "/projects.php") ?>

<a href="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/snowball/">Browse CVS</a>
<br>
<a href="https://sourceforge.net/projects/snowball/">Sourceforge project page</a>
<br>
<br>
<A href="http://sourceforge.net"> <IMG src="http://sourceforge.net/sflogo.php?group_id=36391" width="88" height="31" border="0" alt="SourceForge Logo"></A>
<br>
</td>
