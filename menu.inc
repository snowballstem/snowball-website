<?php
# Calculate the relative path from file $from to file $to
function relativePath($from, $to)
{
  # FIXME: not yet implemented: just a simple hack that works if
  # all files are in same directory.
  return basename($to);
}

# Output the text of a menu entry, with a link unless the menu entry is
# to the current page.  $text is the text to be displayed, $file is the
# absolute path from the top of the website to the file to be linked to.
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

# Display the whole menu.  Expects to be in a <table> context.
function displayMenu()
{
  echo "<td valign=top bgcolor=cyan width=128>";
  menuEntry("Introduction", "/index.php");
  menuEntry("Demo", "/demo.php");
  menuEntry("Download", "/download.php");
  menuEntry("Documentation", "/documentation.php");
  menuEntry("Mailing lists", "/lists.php");
  menuEntry("Developer Notes", "/developers.php");
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

# Display the header of a page, including the menu.
# Title is the title of the page: it will be prefixed with "Snowball - ".
# There should be no output before this is called.
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
<h1 align=center><?php echo $fulltitle ?></h1>
</td></tr>
<tr><?php displayMenu(); ?><td valign=top>
<table width=75% align=center cols=1>
<?php
}

# Display the footer of the page.
# There should be no output after this is called.
function displayFooter()
{
?>
</table>
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

function get_news()
{
    $filehandle = fopen ("http://sourceforge.net/export/projnews.php?group_id=36391&limit=5&flat=1&show_summaries=1", "r");
    if (!$filehandle) {
	return "Unable to open remote file.";
    } else {
	$filecontents = '';
	while (!feof ($filehandle)) {
	    $filecontents .= fgets ($filehandle, 1024);
	}
	fclose ($filehandle);
    }

    $filecontents = preg_replace('|<I>[^<]*</I>[^<]*<A HREF="http://sourceforge.net/projects/snowball/">Snowball</A>|', '', $filecontents);
    $filecontents = preg_replace('|<div align="center">.*?</div>|', '', $filecontents);
    $filecontents = preg_replace('|<HR.*?>|i', '', $filecontents);

    return $filecontents;
}

function display_news()
{
    echo get_news();
}

?>
