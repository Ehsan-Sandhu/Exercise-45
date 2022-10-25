let shirt="small";
function make_shirt(size="Large",text= "I Love Java Script")
{
        console.log ("Size of T-Shirt is:"+size+"\n "+text);
}
if (shirt=="large")
make_shirt();
else if (shirt=="medium")
make_shirt("medium", "World is yours");
else if(shirt== "small")
make_shirt ("small", "Small world is yours");