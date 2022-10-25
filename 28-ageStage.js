let guessAge= prompt("Type any number to get the stage of a Person's life:");
if (guessAge<0 || guessAge>150)
console.log("Invalid Age group");
else if (guessAge>=0 && guessAge<2)
console.log("Baby");
else if (guessAge>=2 && guessAge<4)
console.log("Toddler");
else if (guessAge>=4 && guessAge<13)
console.log("Kid");
else if (guessAge>=13 && guessAge<20)
console.log("Teenager");
else if (guessAge>=20 && guessAge<65)
console.log("Adult");
else if (guessAge>=65 && guessAge<=150)
console.log("Elder");
