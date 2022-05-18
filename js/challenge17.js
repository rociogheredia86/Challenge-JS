let yourDni= prompt("Ingrese su número de DNI")
if (isNaN(yourDni)){
    alert("ingrese solo numeros")
}
  else if(yourDni.length<6|| yourDni.length<7){
    alert("No puede tener menos de 6 o 7 numeros")
}
 else if(yourDni != 0000000 && yourDni !=000000){
console.log("Su DNI es:" + yourDni)
 }else{
     console.log("no puede ser solo ceros")
 }