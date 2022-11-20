<?php

$serverName = "fdb30.awardspace.net";
$userName = "4211553_huevosfritos";
$password = "Uynomeacuerdo96.";
$dbName = "4211553_huevosfritos";

$con = new mysqli($serverName, $userName, $password, $dbName);


// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM Usuarios";

$result = mysqli_query($con, $sql);


if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    echo $row["Nombre"] . " | " . "Huevos Comidos: " . $row["HuevosComidos"] . ",";
  }
} else {
  echo "Error en las transmision de datos";
}
mysqli_close($con);
?>