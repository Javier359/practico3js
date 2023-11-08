const numero = parseInt(prompt("Ingrese un numero porfavor"));
//funcion
function par_impar (numeroIngresado){
    if(numeroIngresado%2==0){
        return alert("El numero es Par");
    }else{
        return alert("El Numero es Impar");
    }
}
//llamado a la funcion
par_impar(numero);