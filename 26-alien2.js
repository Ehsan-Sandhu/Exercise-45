// Points for shooting alien
const alien_color= ["green", "yellow", "red"];
let guessColor= prompt("Type green, yellow or red:");
for (let i=0; i<alien_color.length; i++)
if (guessColor== "green" && alien_color[i]==guessColor)
{
    console.log ("Player earned 5 points for shooting an alien");
    break;
}
else 
{   
    console.log ("Player earned 10 points");
    break;
}
