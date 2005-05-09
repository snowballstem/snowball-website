<?php
// Redirect to SVN
list($rev, $file, $rev2) = explode('?', $QUERY_STRING);

$redirect = 'http://snowball.tartarus.org/viewcvs.cgi/';
if ($rev2 != '' && $file != '') {
    $redirect .= $file . '?rev=' . $rev . '&view=markup';
} else if ($file != '') {
    $redirect .= $file . '?r1=' . ($rev-1) . '&r2=' . $rev;
} else {
    $redirect .= '?rev=' . $rev;
}
$redirect .= '&root=Snowball';
header('Location: ' . $redirect);
?>
