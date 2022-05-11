let baseTriangle=Number (prompt ("Ingrese la medida de la base del triángulo"))
let heigthTriangle= Number (prompt ("Ingrese la medida de la altura del triángulo"))
let radioCircle= Number (prompt ("Ingrese el radio del círculo"))

let triangleArea = Number (baseTriangle*heigthTriangle)/2;
let circleArea = Number (Math.PI*(Math.pow(radioCircle,2)));

console.log(`El área del triangulo es: ${triangleArea}`);
console.log(`El área del círculo es: ${Math.round(circleArea)}`);
