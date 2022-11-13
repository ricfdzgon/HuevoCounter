var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;
var canEdit = true;

const botonQuitar = document.createElement("button");
botonQuitar.type = "button";
botonQuitar.id = "botonQuitar";

const cajaPassWord = document.createElement("input");
cajaPassWord.type = "password";
cajaPassWord.id = "cajaPassword";

const comprobarPass = document.createElement("button");
comprobarPass.type = "button";
comprobarPass.id = "botonComprobarPass";
comprobarPass.textContent = "Acceder";

const nombres = document.createElement("select");
nombres.type = "select";
nombres.id = "nombres";

const agregar = (nombre) => {
  const option = document.createElement("option");
  option.value = nombre;
  option.text = nombre;
  nombres.appendChild(option);
};

agregar("----");
agregar("Ricardo");
agregar("Miguel");
agregar("Clara");
agregar("Maria");
agregar("Luli");

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
      document.getElementById("parrafoBotonQuitar").removeChild(comprobarPass);
    }
  }
});

comprobarPass.addEventListener("click", function (event) {
  console.log(cajaPassWord.value);
  canEdit = false;
  comprobarPassword(cajaPassWord.value);
});

cajaPassWord.addEventListener("change", function (event) {
  console.log(cajaPassWord.value);
  canEdit = false;
  comprobarPassword(cajaPassWord.value);
});

nombres.addEventListener("change", function (event) {
  console.log(nombres.value);
});

function comprobarPassword(datos) {
  if (cajaPassWord.value == "Huevos") {
    document.getElementById("comboboxNombres").appendChild(nombres);
  } else {
    alert("Contraseña erronea");
    canEdit = true;
    cajaPassWord.value = "";
  }
}
