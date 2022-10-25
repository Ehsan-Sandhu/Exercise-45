const favourite_fruit= ["Apple", "Mango", "Grapes", "Banana", "Orange"];
let checkFruit=prompt("Enter your fruit name either of the followings (Carefully type with spellings and Capital letter) : \n Apple \n Mango \n Grapes \n Banana \n Orange");
//for (let i=0; i<fruit.length; i++)
for (let i=0; i<favourite_fruit.length; i++)
{
if (checkFruit== "Apple" && favourite_fruit[i]==checkFruit)
{
    console.log (favourite_fruit[i]+" is present as fruit, you really like "+favourite_fruit[i]);
}
if (checkFruit== "Mango" && favourite_fruit[i]==checkFruit)
{
    console.log (favourite_fruit[i]+" is present as fruit, you really like "+favourite_fruit[i]);
}

if (checkFruit== "Grapes" && favourite_fruit[i]==checkFruit)
{
    console.log (favourite_fruit[i]+" is present as fruit, you really like "+favourite_fruit[i]);
}
if (checkFruit== "Banana" && favourite_fruit[i]==checkFruit)
{
    console.log (favourite_fruit[i]+" is present as fruit, you really like "+favourite_fruit[i]);
}
if (checkFruit== "Orange" && favourite_fruit[i]==checkFruit)
{
    console.log (favourite_fruit[i]+" is present as fruit, you really like "+favourite_fruit[i]);
}
}
