<html>
<head>
<title>Snowball - Demo</title>
</head>
<body bgcolor=white>
<table><tr><td valign=top>
</td><td>
<h1>Snowball</h1>
</td></tr>
<tr><?php include "menu.inc"; ?><td valign=top>

<form method="POST" action="demo.php">
Enter some (english) words to stem:<br>
(Other languages will be added to the demo later)<br>
<textarea name="words" rows="10" cols="50"><?php echo "$words" ?></textarea>
<br>
<input type="submit" name="Submit" value="Submit">
</form>

<?php
if ($words != '')
{
  echo "<pre>";
  $tmpname = tempnam("/tmp", "snowball_stemdemo");
  $tmpfile = fopen($tmpname, "w");
  # Have a limit of 10000 bytes, just in case.
  fwrite($tmpfile, $words, 10000);
  fclose($tmpfile);
  passthru ("./stemdemo_en $tmpname");
  unlink($tmpname);
  echo "</pre>";
}
?>
</td></tr></table>
</body>
</html>
