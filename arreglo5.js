//este areglo se hace, para mostrar una matriz 3*3 en html.
function arreglo5() {
  alert("lea atentamente las indicaciones para completar la matriz");
  // se solicitan y almacenan las letras separandolas con split
  var matriz = [];
  var primeraFila = prompt(
    "ingrese las 3 letras de la primera fila, separadas por una coma, sin espacios de esta forma x,x,x"
  );
  primeraFila = primeraFila.split(",");
  if (primeraFila.length !== 3) {
    alert("Debe ingresar exactamente 3 letras");
    return;
  }
  matriz[0] = primeraFila;
  // se rellena y completa la matriz
  for (var i = 1; i < 3; i++) {
    matriz[i] = primeraFila;
  }
  // se arrastra la matriz para verla en el html
  var tabla = document.getElementById("matriz2");
  tabla.innerHTML = "";
  for (var i = 0; i < 3; i++) {
    var fila = tabla.insertRow();
    for (var j = 0; j < 3; j++) {
      var celda = fila.insertCell();
      celda.innerHTML = matriz[i][j];
    }
    tabla.appendChild(fila);
  }
}
