<?php
  require "menu.inc";
  displayHeader("Developers");
?>
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
  First, if you havn't already done so you should
<a href="http://lists.sourceforge.net/lists/listinfo/snowball-discuss">join</a>
  join the snowball-discuss mailing list.
</li><li>
  Next, you should
<a href="https://sourceforge.net/account/register.php">register</a>
  as a new sourceforge user.
</li><li>
  <p>
  Connect (once) to "cvs.sourceforge.net" via ssh.  This is necessary to set
  up your user home directory.  The following command can be used for this:
  <blockquote>
ssh <i>username</i>@cvs.sourceforge.net
  </blockquote>
  (Where <i>username</i> is your sourceforge username.
  </p>
  <p>
    Note that you will be logged straight out of cvs.sourceforge.net again,
    but your home directory will have been set up there.  Without this command,
    you will be unable to access CVS - see the next step.
  </p>
</li><li>
  Check out a working directory from CVS.
  <blockquote>
export CVS_RSH=ssh;
mkdir snowball;
cd snowball;
cvs -z3 -d <i>username</i>@cvs.snowball.sourceforge.net:/cvsroot/snowball co .;
  </blockquote>
  <p>
  The snowball code is to be found in the "snowball" module.
  </p>
  <p>
  The website can be modified by editing the files in the "website" module: any changes which are committed to this module will show up on the live website within an hour. (The website is currently updated at 17 minutes past each hour.)
  </p>
</li><li>
  Depending how obsessive you are, and how good your internet connection is,
  you may wish to subscribe to the
<a href="http://lists.sourceforge.net/lists/listinfo/snowball-commits">snowball-commits</a>
  mailing list.  This is a readonly list, to which an automatic message is sent
  whenever the snowball CVS is modified.  This is very useful to keep track of
  what changes other developers are making.
</li></ul>

</p>
<?php displayFooter(); ?>
