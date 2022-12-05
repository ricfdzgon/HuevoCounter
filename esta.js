function init() {
  let ul = document.createElement("ul");

  fetch("./dbestadisticas.php", {
    method: "POST",
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (texto) {
      console.log(texto);

      var arrayDeCadenas = texto.split(",");
      var capa = document.getElementById("capa");
      for (let index = 0; index < arrayDeCadenas.length; index++) {
        console.log(arrayDeCadenas[index]);
        switch (index) {
          case 0:
            var h0 = document.createElement("h1");
            h0.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h0);
            break;
          case 1:
            var h1 = document.createElement("h1");
            h1.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h1);
            break;
          case 2:
            var h2 = document.createElement("h1");
            h2.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h2);
            break;
          case 3:
            var h3 = document.createElement("h1");
            h3.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h3);
            break;
          case 4:
            var h4 = document.createElement("h1");
            h4.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h4);
            break;
        }
      }
      document.body.appendChild(ul);
    });
  // sidebar toggle
  const btnToggle = document.querySelector(".toggle-btn");

  btnToggle.addEventListener("click", function () {
    console.log("clik");
    document.getElementById("sidebar").classList.toggle("active");
    console.log(document.getElementById("sidebar"));
  });
}

window.onload = init;
