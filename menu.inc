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
  echo "<br>\n";
}

function displayMenu()
{
  echo "<td valign=top bgcolor=cyan width=128>";
  menuEntry("Introduction", "/index.php");
  menuEntry("Demo", "/demo.php");
  menuEntry("Download", "/download.php");
  menuEntry("Documentation", "/documentation.php");
  menuEntry("Mailing lists", "/lists.php");
  menuEntry("License", "/license.php");
  menuEntry("Credits", "/credits.php");
  menuEntry("Projects", "/projects.php");
?>
<br>

<a href="http://cvs.sourceforge.net/cgi-bin/viewcvs.cgi/snowball/">Browse CVS</a><br>
<a href="https://sourceforge.net/projects/snowball/">Sourceforge project page</a><br>
<br>

</td>
<?php
}

function displayHeader($title)
{
  $fulltitle = "Snowball";
  if ($title != "") {
    $fulltitle = "$fulltitle - $title";
  }
?>
<html>
<head>
<title><?php echo $fulltitle ?></title>
</head>
<body bgcolor=white>
<table><tr><td valign=center>
<center><A href="http://sourceforge.net"> <IMG src="http://sourceforge.net/sflogo.php?group_id=36391" width="88" height="31" border="0" alt="SourceForge Logo"></A></center>
</td><td>
<h1><?php echo $fulltitle ?></h1>
</td></tr>
<tr><?php displayMenu(); ?><td valign=top>
<b>STATUS: (27 Sept 2001) initial upload of project is currently in progress.</b>
<?php
}

function displayFooter()
{
?>
</td></tr></table>
<address>
Last modified on <?php
  global $SCRIPT_FILENAME;
  echo date('r', filemtime($SCRIPT_FILENAME));
?>.<br>
<a href="mailto:richardb@users.sourceforge.net">Contact the webmaster</a> if you have comments directly related to the webpage.
</address>
</body>
</html>
<?php
}
?>
