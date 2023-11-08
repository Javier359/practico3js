function calcularPerimetro(lado1, lado2) {
    return 2 * (lado1 + lado2);
  }
  
  function obtenerNumeroValido(mensaje) {
    let numero;
    do {
      numero = parseFloat(prompt(mensaje));
    } while (isNaN(numero));
    return numero;
  }
  
  const lado1 = obtenerNumeroValido("Ingrese la longitud del primer lado del rectángulo:");
  const lado2 = obtenerNumeroValido("Ingrese la longitud del segundo lado del rectángulo:");
  const perimetro = calcularPerimetro(lado1, lado2);
  
  alert(`El perímetro del rectángulo es: ${perimetro}`);
  