// Different points for shooting different kind of alien
const alien_color= ["green", "yellow", "red"];
let guessColor= prompt("Type green, yellow or red:");
for (let i=0; i<alien_color.length; i++)
if (guessColor== "green" && alien_color[i]==guessColor)
{
    console.log ("Player earned 5 points for killing: "+ alien_color[i]+" alien");
    break;
}
else if (guessColor== "yellow" && alien_color[i]==guessColor)
{   
    console.log ("Player earned 10 points for killing: "+ alien_color[i]+" alien");
    break;
}
else if (guessColor== "red" && alien_color[i]==guessColor)
{   
    console.log ("Player earned 15 points for killing: "+ alien_color[i]+" alien");
    break;
}