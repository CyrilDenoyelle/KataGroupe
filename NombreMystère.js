var numRand = Math.floor(Math.random() * 10);
var numUser = prompt("entrer un chiffre positif");

for(i = 0; i < 5; i++){

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
}