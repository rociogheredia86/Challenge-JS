let numbersArray = [];
let newNumber= true;

while(newNumber){
    newNumber=prompt('Ingresa un numero');
    if (newNumber===null){
        console.log(numbersArray);
    }else if(newNumber.trim() ===""||isNaN(newNumber)){
        alert('El numero no es valido');
    }else{
        numbersArray.push(parseFloat(newNumber));
    }
}