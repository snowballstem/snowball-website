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
Enter some words to stem:
<br>
<input name="words" size=30 value="<?php echo "$words" ?>">
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
