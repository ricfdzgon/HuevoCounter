<?php
$serverName = "fdb30.awardspace.net";
$userName = "4211553_huevosfritos";
$password = "Uynomeacuerdo96.";
$dbName = "4211553_huevosfritos";

$con = new mysqli($serverName, $userName, $password, $dbName);

if (mysqli_connect_errno()) {
    echo "Failed to connect";
}
echo "Connection succes";
?>