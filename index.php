<?php
  require "menu.inc";
  displayHeader("Introduction");
?>

<?php include "index_body.html" ?>

<TR><TD>
<p>
<h2>Recent News</h2>
<p>
<?php display_news(); ?>
</p>
</TR></TD>

<?php displayFooter(); ?>
