const ciudades = [];

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
console.log(ciudades);
    
