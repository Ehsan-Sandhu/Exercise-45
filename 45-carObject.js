function make_car(car_manufact, car_model, ...arguments)
{
let items=[];
for (let i=0; i<arguments.length; i++)
{
    items[i]=arguments[i];
  // console.log(items[i]);
}
const car={car_manufact: car_manufact, car_model: car_model, items};
return car;
}
let items_ret= " ";
item_ret=make_car.items;
for (let i=0; i<items_ret.length; i++)
{
    console.log (items_ret[i]);
}
console.log(make_car("Audi", 2022, "Pearl White", "Sports"));
//console.log (make_car.car_manufact+" "+make_car.car_model);  
