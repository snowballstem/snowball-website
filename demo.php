<html>
<head>
<title>Snowball - Demo</title>
</head>
<body bgcolor=white>
<table><tr><td valign=top>
</td><td>
<h1>Snowball</h1>
</td></tr>
<tr><td valign=top bgcolor=cyan>
<?php include "menu.inc"; ?>
</td><td valign=top>
<p>

<form method="GET" action="demo.php">
Words to stem: <input name="words" size=30 value="<?php echo "$words" ?>">
</form>

</p><p>

Note: this is not yet functional.

<?php
if ($words != '')
{
  echo "<pre>";
  $tmpfile = tmpfile();
  # Have a limit of 10000 bytes, just in case.
  fwrite($tmpfile, $words, 10000);
  passthru ("./stemdemo_en $tmpfile");
  fclose($tmpfile);
  echo "</pre>";
}
?>

</p>
</td></tr></table>
</body>
</html>
