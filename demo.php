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

<form method="POST" action="demo.php">
Words to stem: <input name="words" size=30>
</form>

</p><p>

Note: this is not yet functional.

<?php echo "$words" ?>

</p>
</td></tr></table>
</body>
</html>
