var botonHuevos = document.getElementById("boton_huevo");
var contadorHuevos = 0;
var canEdit = true;
//let vid = document.getElementById("video");
//vid.play();

var nombresParticipantes = [
  "-----",
  "Ricardo",
  "Miguel",
  "Clara",
  "Maria",
  "Luli",
];
nombresParticipantes.sort();

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

const aceptarNombre = document.createElement("button");
aceptarNombre.type = "button";
aceptarNombre.id = "botonaceptarNombre";
aceptarNombre.textContent = "Aceptar";

const nombres = document.createElement("select");
nombres.type = "select";
nombres.id = "nombres";

const agregar = (nombre) => {
  const option = document.createElement("option");
  option.value = nombre;
  option.text = nombre;
  nombres.appendChild(option);
};

for (let i = 0; i < nombresParticipantes.length; i++) {
  agregar(nombresParticipantes[i]);
}

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

aceptarNombre.addEventListener("click", function (event) {
  var datos = nombres.value;
  if (datos != "-----") {
    //order by en la consulta aqui podría darnos todo ordenado
    fetch("./db.php", {
      method: "POST",
      body: JSON.stringify({ mi_dato_1: datos, mi_dato_2: contadorHuevos }),
    })
      .then(function (response) {
        return response.text();
      })
      .then(function (texto) {
        console.log(texto);
      });

    alert(
      "Has guardado " +
        contadorHuevos +
        " huevos " +
        "en el usuario: " +
        nombres.value
    );
    window.setTimeout(recargarPantalla, 3000);
  } else {
    alert("Usuario no valido");
  }
});

function comprobarPassword(datos) {
  if (cajaPassWord.value == "Huevos") {
    document.getElementById("comboboxNombres").appendChild(nombres);
    document.getElementById("comboboxNombres").appendChild(aceptarNombre);
  } else {
    alert("Contraseña erronea");
    canEdit = true;
    cajaPassWord.value = "";
  }
}

function recargarPantalla() {
  location.reload();
}
/*
Esto va en el html por si quiero video en la página
    <video id="video" width="360" height="450" autoplay muted loop>
      <source src="Videos\Hexagono.mp4" type="video/mp4" />
    </video>
*/
