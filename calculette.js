var operateur =  prompt("entrer une opération");
var num1 = prompt("entrer un nombre");
var num2 = prompt("entrer un deuxieme nombre");

if(operateur == "+") {
var result = Number(num1) + Number(num2);
}

else if(operateur == "*") {
var result = Number(num1) * Number(num2);
}

else if(operateur == "/") {
var result = Number(num1) / Number(num2);
}

else if(operateur == "-") {
var result = Number(num1) - Number(num2);
}

else {
  var result="Erreur";
}

console.log(result);