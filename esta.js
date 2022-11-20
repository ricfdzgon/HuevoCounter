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
            /*
            let li0 = document.createElement("li");
            let li0Texto = document.createTextNode(arrayDeCadenas[index]);
            li0.appendChild(li1Texto);
            ul.appendChild(li0Texto);*/
            break;
          case 1:
            var h1 = document.createElement("h1");
            h1.innerHTML = arrayDeCadenas[index];
            capa.appendChild(h1);
            /*
            let li1 = document.createElement("li");
            let li1Texto = document.createTextNode(arrayDeCadenas[index]);
            li1.appendChild(li1Texto);
            ul.appendChild(li1Texto);*/
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

      //    let li1 = document.createElement("li");
      //   let li1Texto = document.createTextNode(texto);
      // li1.appendChild(li1Texto);

      //ul.appendChild(li1);

      document.body.appendChild(ul);
    });
}

window.onload = init;
