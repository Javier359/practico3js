const ciudades = [];
/*recorrido de vector */
function mostrarVector (){
    document.write(`<h2>Arreglo de ciudades</h2>`);
    document.write(`<ul>`);
    for(let i=0; i<ciudades.length; i++){
        document.write(`<li>${ciudades[i]}</li>`);
    }
    document.write(`</ul>`);
}
/*Menu */
while(true){
    const ciudad = prompt("Ingrese el nombre de una ciudad porfavor");

    if(ciudad == null){
        break;
    }else if(ciudad == ""){
        alert("Porfavor ingrese un nombre de ciudad");
    }else{
        ciudades.push(ciudad);
    }
}
/*condiciones */
document.write(`<p>El arreglo de ciudades tiene ${ciudades.length} elementos</p>`);
document.write(`<ul>`);
document.write(`<li> <p>El elemento de la primera posicion es : ${ciudades[0]}</p> </li>`);
document.write(`<li> <p>El elemento de la tercera posicion es : ${ciudades[2]}</p> </li>`);
document.write(`<li> <p>El elemento de la ultima posicion es : ${ciudades[ciudades.length-1]}</p> </li>`);
ciudades.push("Paris");
document.write(`<li> <p>El elemento de la ultima posicion agregado es : ${ciudades[ciudades.length-1]}</p> </li>`);
document.write(`<li> <p>El elemento de la segunda posicion es : ${ciudades[1]}</p> </li>`);
ciudades[1]="Barcelona"

mostrarVector();


    
