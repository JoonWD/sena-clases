//este areglo se hace para mostrar en consola, el cuadrado de 5 numeros.
function arreglo3() {
    alert("ingrese 5 numeros para conocer su cuadrado en consola")
  var numeros1 = Number(prompt("ingrese el primer numero"));
  var numeros2 = Number(prompt("ingrese el segundo numero"));
  var numeros3 = Number(prompt("ingrese el tercer numero"));
  var numeros4 = Number(prompt("ingrese el cuarto numero"));
  var numeros5 = Number(prompt("ingrese el quinto numero"));
//este es un paso adicional 
  console.log(
    numeros1 * numeros1,
    numeros2 * numeros2,
    numeros3 * numeros3,
    numeros4 * numeros4,
    numeros5 * numeros5
  );
  //se muetra el cuadrado de cada numero
  alert('el cuadrado de ' + numeros1 + " es " + numeros1 * numeros1);
  alert('el cuadrado de ' + numeros2 + " es " + numeros2 * numeros2);
  alert('el cuadrado de ' + numeros3 + " es " + numeros3 * numeros3);
  alert('el cuadrado de ' + numeros4 + " es " + numeros4 * numeros4);
  alert('el cuadrado de ' + numeros5 + " es " + numeros5 * numeros5);
}
