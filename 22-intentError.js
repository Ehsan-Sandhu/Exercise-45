const nameFriends=["Athos","Porthos","Aramis", "d'Artagnan","King"];
// Intention of accessing Array index that is out of bound
for (let i=-1; i<nameFriends.length; i++)
{
    console.log(nameFriends[i]);
}

//Rectified

for (let i=0; i<nameFriends.length; i++)
{
    console.log(nameFriends[i]);
} 