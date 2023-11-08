function tablaDeMultiplicar(numero) {
    console.log(`Tabla de multiplicar del ${numero}:`);
    for (let i = 1; i <= 10; i++) {
      const resultado = numero * i;
      console.log(`${numero} x ${i} = ${resultado}`);
    }
  }
  
  const numero = parseInt(prompt("Ingrese un número para mostrar su tabla de multiplicar:"));
  
  if (!isNaN(numero)) {
    tablaDeMultiplicar(numero);
  } else {
    console.log("Por favor, ingrese un número válido.");
  }
  