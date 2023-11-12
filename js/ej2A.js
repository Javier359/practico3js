function filtrarNumerosPares(arreglo) {
    var numerosPares = arreglo.filter(function(numero) {
      // Comprobamos si el número es par
      return numero % 2 === 0;
    });
  
    // Devolvemos el nuevo arreglo con los números pares
    return numerosPares;
  }
  
  // Ejemplo de uso:
  var arregloOriginal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var resultado = filtrarNumerosPares(arregloOriginal);
  
  document.write(resultado);
  