
//este areglo se hace, para mostrar en consola una matriz de numeros 3*3 en html.
function arreglo4() {
    alert("acontinuacion ingrese una matriz de 3x3 para verla reflejada en el html")
  var matriz = [];
  for (var i = 0; i < 3; i++) {
    matriz[i] = [];
    for (var j = 0; j < 3; j++) {
      var numero = Number(
        prompt("Ingrese el número en la posición " + (i + 1) + "," + (j + 1))
      );
      matriz[i][j] = numero;
    }
  }
  // Mostrar la matriz en la tabla
  var tabla = document.getElementById("matriz");
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
