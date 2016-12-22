<<<<<<< HEAD
var min = prompt("min");
var max = prompt("max"); 


var numRand = Math.floor(Math.random() * ( Number(max) - Number(min) ) + Number(min) );

var nbTentative = prompt("combien d'essais ?");

var numUser = prompt("entrer un chiffre positif");
for(i = 0; i < nbTentative-1; i++){

  if(numRand > numUser){
    var numUser = prompt("c'est plus")
  }
  
  else if(numRand < numUser){
    var numUser = prompt("c'est moins");
  }
  
  else if(numRand == numUser){
    alert("c'est gagné !!");
    break;
  }
=======
var min = prompt("min");
var max = prompt("max");

var numRand = Math.floor(Math.random() * (max - min)) + min;

var nbTentative = prompt("combien d'essais ?");

var numUser = prompt("entrer un chiffre positif");
for(i = 0; i < nbTentative-1; i++){

  if(numRand > numUser){
    var numUser = prompt("c'est plus")
  }
  
  else if(numRand<numUser){
    var numUser = prompt("c'est moins");
  }
  
  else if(numRand == numUser){
    alert("c'est gagné !!");
    break;
  }
>>>>>>> origin/master
}