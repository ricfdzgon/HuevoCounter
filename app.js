var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;

botonHuevos.addEventListener("click", function (event) {
  contadorHuevos++;
  document.getElementById("parrafo2").innerHTML =
    "Huevos comidos: " + contadorHuevos;
});
