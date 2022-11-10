var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;

const botonQuitar = document.createElement("button");
botonQuitar.type = "button";
botonQuitar.innerText = "Quitar huevos";

botonHuevos.addEventListener("click", function (event) {
  contadorHuevos++;
  document.getElementById("parrafo2").innerHTML =
    "Huevos comidos: " + contadorHuevos;
  document.body.appendChild(botonQuitar);
});

botonQuitar.addEventListener("click", function (event) {
  if (contadorHuevos > 0) {
    contadorHuevos--;
  }
  document.getElementById("parrafo2").innerHTML =
    "Huevos comidos: " + contadorHuevos;
});
