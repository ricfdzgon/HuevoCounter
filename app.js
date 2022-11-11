var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;
var canEdit = true;

const botonQuitar = document.createElement("button");
botonQuitar.type = "button";

const cajaPassWord = document.createElement("input");
cajaPassWord.type = "password";

const comprobarPass = document.createElement("button");
botonQuitar.type = "button";

botonHuevos.addEventListener("click", function (event) {
  if (canEdit) {
    contadorHuevos++;
    document.getElementById("parrafo2").innerHTML =
      "Huevos comidos: " + contadorHuevos + "\t";
    document.getElementById("parrafo2").appendChild(botonQuitar);
    document.getElementById("parrafoBotonQuitar").appendChild(cajaPassWord);
    document.getElementById("parrafoBotonQuitar").appendChild(comprobarPass);
  }
});

botonQuitar.addEventListener("click", function (event) {
  if (canEdit) {
    if (contadorHuevos > 0) {
      contadorHuevos--;
    }
    document.getElementById("parrafo2").innerHTML =
      "Huevos comidos: " + contadorHuevos + "\t";
    if (contadorHuevos > 0) {
      document.getElementById("parrafo2").appendChild(botonQuitar);
    } else {
      document.getElementById("parrafoBotonQuitar").removeChild(cajaPassWord);
    }
  }
});
