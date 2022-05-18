let numberArray=[];
let addNumbers="";

while((addNumbers!= null)===true){
addNumbers=prompt("inserta un numero")
if(isNaN(addNumbers)){
    alert("solo numeros")
}
else{
    numberArray.push(addNumbers)
}
}
console.log("los numeros ingresados son;", numberArray.join("-"))
