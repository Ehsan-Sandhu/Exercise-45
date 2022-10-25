/* Program contains both the version where when passed the if test it will print the message 
however on failure of test displays nothing*/
const alien_color= ["green", "yellow", "red"];
let guessColor= prompt("Type green, yellow or red:");
for (let i=0; i<alien_color.length; i++)
if (guessColor== "green" && alien_color[i]==guessColor)
{
    console.log ("Player earned 5 points");
}
