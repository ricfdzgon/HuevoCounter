<?php

$serverName = "fdb30.awardspace.net";
$userName = "4211553_huevosfritos";
$password = "Uynomeacuerdo96.";
$dbName = "4211553_huevosfritos";

$con = new mysqli($serverName, $userName, $password, $dbName);

//Recibir los datos del JS
$_post = json_decode(file_get_contents('php://input'), true);
$nombre = $_post["mi_dato_1"];
$huevos = $_post["mi_dato_2"];


$huevosguardados = 0;
$huevosTotales = 0;
// Check connection
if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

$sql = "SELECT * FROM Usuarios";
$sql3 = "SELECT HuevosComidos FROM Usuarios WHERE Nombre = '$nombre'";

$huevosComidosGuardados = mysqli_query($con, $sql3);
if (mysqli_num_rows($huevosComidosGuardados) > 0) {
  while ($row = mysqli_fetch_assoc($huevosComidosGuardados)) {
    $huevosguardados = $row["HuevosComidos"];
  }
}
$huevosTotales = $huevosguardados + $huevos;

$sql2 = "UPDATE Usuarios SET HuevosComidos = '$huevosTotales' WHERE Nombre = '$nombre'";

$insertarHuevos = mysqli_query($con, $sql2);
$result = mysqli_query($con, $sql);


if (mysqli_num_rows($result) > 0) {
  while ($row = mysqli_fetch_assoc($result)) {
    echo "Nombre: " . $row["Nombre"] . " " . "Huevos Comidos: " . $row["HuevosComidos"] . "\n";
  }
} else {
  echo "Error en las transmision de datos";
}
mysqli_close($con);
?>