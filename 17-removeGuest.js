const nameFriends=["Athos","Porthos","Aramis"];
//const app= ["d'Artagnan"];
nameFriends.unshift("d'Artagnan"); 
nameFriends.push ("King");
//console.log ("\n"+nameFriends.length+"\n");

for (let i=0; i<nameFriends.length; i++)
{
    console.log (nameFriends[i]+", you are cordially invited to the Special Dinner on Eid Day, grace the ocassion with your presence.\n Thanks");
}

console.log("Due to unavailibity only Two Guests can be accomodated");


for (let i=nameFriends.length; i>2; i--)
{
        
        console.log (nameFriends.pop()+", Sorry due to some attanuating circumstances this invitation is withdrawn, applogies for inconvenience. \n");
        
    }
   // console.log ("\n"+nameFriends.length+"\n");
for (let m=0; m<nameFriends.length; m++)
{
    console.log(nameFriends[m]+" , You are still on Dinner List.");
}

for (let i=nameFriends.length; i>0; i--)
{
      
        console.log (nameFriends.pop()+ " removed from the list to make Empty List \n");
        
    }
 if (nameFriends.length==0)
 console.log ("List is Empty");
 else
 for (let m=0; m<nameFriends.length; m++)
{
    console.log(nameFriends[m]);
}