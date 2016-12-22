var tabrom = ["", "I", "II", "III", "IV", "V", "VI", "VII" ,"VIII", "IX"];
var tabrom2 = ["",  "X","XX", "XXX", "XL","L", "LX", "LXX", "LXXX","XC"];
var tabrom3 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

var num = prompt("Entrer un nombre entier positif!");
var slicedU=num.slice(-1);
var slicedD=num.slice(-2, -1);
var slicedC=num.slice(-3, -2);

if(num<10) {
 console.log(tabrom[slicedU]);
}

else if(num<100 || slicedU === 0) {
 console.log(tabrom2[slicedD] + tabrom[slicedU]);
}

else if(num<1000 || slicedU === 0 || slicedD === 0) {
 console.log(tabrom3[slicedC] + tabrom2[slicedD] + tabrom[slicedU]);
}

else {
  console.log("erreur");
}

