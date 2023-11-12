function esPrimo(numero) {
    // Verifica si un número es primo
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
      if (numero % i === 0) return false;
    }
    return true;
  }
  
  function generarNumerosPrimosLimite() {
    // Solicita al usuario que ingrese un número
    var limite = parseInt(prompt("Ingrese un número límite:"));
  
    // Crea un arreglo para almacenar los números primos
    var numerosPrimos = [];
  
    // Genera y filtra los números primos menores o iguales al límite
    for (let i = 2; i <= limite; i++) {
      if (esPrimo(i)) {
        numerosPrimos.push(i);
      }
    }
  
    // Devuelve el arreglo de números primos
    return numerosPrimos;
  }
  
  // Llamamos a la función y mostramos el resultado en la consola
  var resultadoPrimos = generarNumerosPrimosLimite();
  document.write(resultadoPrimos);
  