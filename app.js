var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;

const botonQuitar = document.createElement("button");
botonQuitar.type = "button";
//botonQuitar.id = "botonQuitar";
//botonQuitar.innerText = "";

botonHuevos.addEventListener("click", function (event) {
  contadorHuevos++;
  document.getElementById("parrafo2").innerHTML =
    "Huevos comidos: " + contadorHuevos + "\t";
  document.getElementById("parrafo2").appendChild(botonQuitar);
});

botonQuitar.addEventListener("click", function (event) {
  if (contadorHuevos > 0) {
    contadorHuevos--;
  }
  document.getElementById("parrafo2").innerHTML =
    "Huevos comidos: " + contadorHuevos + "\t";
  document.getElementById("parrafo2").appendChild(botonQuitar);
});
