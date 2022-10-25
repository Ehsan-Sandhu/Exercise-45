const food=["egg", "cheese","bread","olive", "dressing"];
const more_food=["egg", "cheese","bread","olive", "dressing","corn","1000-island","lettuce","Jalapenos","pickle"];
// using argument to give endless parameter to function that returns the array

function sandwich(...arguments)
{
    let items=[];
    for (let i=0; i<arguments.length; i++)
    {
        items[i]=arguments[i];
      // console.log(items[i]);
    }
    return items;
}
//1st Calling of sandwich function as per assignment requirement
let items_ret= " ";
items_ret=sandwich("egg", "butter", "salad", "sauce");         // Elements passed to function sandwich() that returns an array namely items
for (let i=0; i<items_ret.length; i++) // items_ret array to receive returned array items from sandwich() function
    { 
    console.log(items_ret[i]);
    }
   //2nd Calling of sandwich function as per assignment requirement
    items_ret=sandwich(food);         // food array passed to function sandwich() that returns an array namely items
for (let i=0; i<items_ret.length; i++) // items_ret array to receive returned array items from sandwich() function
    { 
    console.log(items_ret[i]+ " \n");
    }
//2nd Calling of sandwich function as per assignment requirement
    items_ret=sandwich(more_food);         // more_food array passed to function sandwich() that returns an array namely items
for (let i=0; i<items_ret.length; i++) // items_ret array to receive returned array items from sandwich() function
    { 
    console.log(items_ret[i]+ " \n");
    }
//sandwich(food);