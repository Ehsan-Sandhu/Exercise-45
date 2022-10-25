const nameFriends=["Athos","Porthos","Aramis"];
const app= ["d'Artagnan"];
for (let i=0; i<nameFriends.length; i++)
{
    console.log (nameFriends[i]+", you are cordially invited to the Special Dinner on Eid Day, grace the ocassion with your presence.\n Thanks");
}
console.log("\n Table has more capacity thus there are two more guests on the list \n");
// unshift() to add an element at the start of mutative array
nameFriends.unshift("d'Artagnan") 
//push() to add an element at the end of mutative array 
nameFriends.push ("King");

//console.log ("\n"+nameFriends.length+"\n");

for (let i=0; i<nameFriends.length; i++)
{
    console.log (nameFriends[i]+", you are cordially invited to the Special Dinner on Eid Day, grace the ocassion with your presence.\n Thanks");
}