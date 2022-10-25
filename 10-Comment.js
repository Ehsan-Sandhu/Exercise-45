// Program takes the input from the user in browser to play Rock, Paper Scissor against Computer and declares the winner based on game rules. Any number other than 0,1,2 will be valid input that system will detect. 
let choice = prompt("O for Rock \n 1 for Paper \n 2 for the Scissor \n Enter Your Choice:");
if (choice==0)
console.log("You have chosen Option:"+ " "+"Rock");
else if (choice==1)
console.log("You have chosen Option:"+ " "+"Paper");
else if (choice==2)
console.log("You have chosen Option:"+ " "+"Scissor");
else {
console.log("Invalid Choice");
exit();
}
let computer=Math.floor(Math.random() * 3);
if (computer==0)
console.log("\n Computer has chosen:"+ " "+"Rock");
else if (computer==1)
console.log("\n Computer has chosen:"+ " "+"Paper");
else if (computer==2)
console.log("\n Computer has chosen:"+ " "+"Scissor");

if (choice==computer)
console.log("\n its a DRAW");
else if (choice==0 && computer==1 || choice==2 && computer==0 || choice==1 && computer==2)
console.log("Computer Wins");
else if (choice==2 && computer==1 || choice==0 && computer==2 || choice==1 && computer==0 )
console.log("Player Wins");