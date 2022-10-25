let carName1= "AUDI";
let Fee= true;
let salary = 5000;
let tax=1000;
const items = ["car", "train", "plane"];


// String Equal Condition
if (carName1=="Audi")
{
console.log ("String are Equal");    
}
else if (carName1!="Audi")
{
console.log ("String are Not Equal");    
}

//isLower Check test

if (carName1==carName1.toLowerCase())
{
    console.log (carName1+": There is lower case");
}
else if (carName1!=carName1.toLowerCase())
{
    console.log (carName1+": There is not Lower case");
}

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

if (salary == 1000)
console.log ("Salary is equal to 1000");
else if (salary < 1000)
console.log ("Salary is less than 1000");
else if (salary > 1000)
console.log ("Salary is greater than 1000");
else if (salary <= 1000)
console.log ("Salary is lesser than or equal to 1000");
else if (salary >= 1000)
console.log ("Salary is greater than or equal to 1000");

//Tests using "and" and "or" operators
if (Fee == false && tax > 1000)
console.log ("Person is eligible to buy: "+ carName1);
else if (Fee !=false || tax < 1000)
console.log ("Person is not eligible to buy: "+ carName1);

//Test whether an item is in a array AND Test whether an item is not in a array
let itemCheck="plane";

for (let i=0; i<=items.length; i++)
{
if (itemCheck==items[i])
{
console.log ("Item is present");
break;
}
else if (i==items.length)
console.log ("Item is not present");
}
//