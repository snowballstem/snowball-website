<?php
  require "menu.inc";
  displayHeader("Developers");
?>
<TR><TD>
<p>

If you feel that you could make a useful contribution to the development of
Snowball, 
<a href="mailto:snowball-discuss@lists.sourceforge.net">contact us</a>
(via the
<a href="http://lists.sourceforge.net/lists/listinfo/snowball-discuss">snowball-discuss</a>
mailing list.)
We can then discuss adding you to the project as an active developer.

</p><p>

The remaining sections of this page are only of interest to those who are
developers of Snowball.

</p>

<h2>Setting up as a new developer</h2>
<p>

As a new developer, there are several things to set up:
<ul><li>
  <p>
  First, if you havn't already done so you should join the
<a href="http://lists.sourceforge.net/lists/listinfo/snowball-discuss">snowball-discuss</a>
  mailing list.
  </p>
</li><li>
  <p>
  Next, you should
<a href="https://sourceforge.net/account/register.php">register</a>
  as a new sourceforge user.
  </p>
</li><li>
  <p>
  Connect (once) to "cvs.sourceforge.net" via ssh.  This is necessary to set
  up your user home directory.  The following command can be used for this:
  <blockquote><code>
ssh <i>username</i>@cvs.sourceforge.net
  </code></blockquote>
  (Where <i>username</i> is your sourceforge username.
  </p>
  <p>
    Note that you will be logged straight out of cvs.sourceforge.net again,
    but your home directory will have been set up there.  Without this command,
    you will be unable to access CVS - see the next step.
  </p>
</li><li>
  Check out a working directory from CVS.
  <blockquote><code>
export CVS_RSH=ssh;<br>
mkdir snowball;<br>
cd snowball;<br>
cvs -z3 -d <i>username</i>@cvs.snowball.sourceforge.net:/cvsroot/snowball co .;
  <code></blockquote>
  <p>
  The snowball code is to be found in the "snowball" module.
  </p>
  <p>
  The website can be modified by editing the files in the "website" module: any changes which are committed to this module will show up on the live website within an hour. (The website is currently updated at 17 minutes past each hour.)
  </p>
</li><li>
  Depending how obsessive you are (and how good your internet connection is)
  you may wish to subscribe to the
<a href="http://lists.sourceforge.net/lists/listinfo/snowball-commits">snowball-commits</a>
  mailing list.  This is a readonly list, to which an automatic message is sent
  whenever the snowball CVS is modified.  This is very useful to keep track of
  what changes other developers are making.  However, at times of busy
  development it can receive a lot of mesages.
</li></ul>

If you think of any other notes which should be added, then feel free to
update this webpage.

</p>
</TD></TR>
<?php displayFooter(); ?>
