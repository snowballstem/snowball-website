<?php
// Redirect to SVN
list($start, $rev, $file) = explode('?', $QUERY_STRING);

$redirect = 'http://svn.tartarus.org/';
if ($rev != '' && $file != '') {
    $redirect .= $file . '?rev=' . $rev . '&view=markup';
} else if ($rev != '') {
    $redirect .= '?rev=' . $rev;
} else {
    $redirect .= '?';
}
$redirect .= '&root=Snowball';
header('Location: ' . $redirect);
?>
