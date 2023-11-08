function encontrarNumeroMayor(arreglo) {
    if (arreglo.length === 0) {
      return null; // Devuelve null si el arreglo está vacío
    }
  
    let numeroMayor = arreglo[0]; // Inicializa la variable con el primer elemento del arreglo
  
    for (let i = 1; i < arreglo.length; i++) {
      if (arreglo[i] > numeroMayor) {
        numeroMayor = arreglo[i]; // Actualiza el número mayor si encontramos uno más grande
      }
    }
  
    return numeroMayor;
  }
  
  const miArreglo = [5, 12, 8, 2, 15, 7];

  function mostrarVector (){
    document.write(`<h2>Arreglo de numeros</h2>`);
    document.write(`<ul>`);
    for(let i=0; i<miArreglo.length; i++){
        document.write(`<li>${miArreglo[i]}</li>`);
    }
    document.write(`</ul>`);
}

  mostrarVector();
  const numeroMasGrande = encontrarNumeroMayor(miArreglo);
  document.write("El número más grande en el arreglo es:", numeroMasGrande);
  