<?php
  require "menu.inc";
  displayHeader("");

  function get_news() {
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
?>
<?php include "texts/start.html" ?>
<h2>Recent News</h2>
<p>
<?php
  echo get_news();
?>
</p>
<?php displayFooter(); ?>
