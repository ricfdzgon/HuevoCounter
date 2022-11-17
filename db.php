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

$sql = "SELECT Nombre FROM Usuarios";
$result = mysqli_query($con, $sql);

/*
if (mysqli_num_rows($result) > 0) {
// output data of each row
while ($row = mysqli_fetch_assoc($result)) {
echo "Nombre: " . $row["Nombre"] . "<br>";
}
} else {
echo "0 results";
}*/
if (mysqli_num_rows($result) > 0) {
  // return $result;
} else {
  // return "Error en las transmision de datos";
}
echo "Hola que asse";
mysqli_close($con);

?>