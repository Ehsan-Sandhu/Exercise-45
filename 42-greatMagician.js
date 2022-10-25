const magician= ["David", "Blain", "Master"];
function make_great(mag)
{   for (let i=0; i<mag.length; i++)
    {
    mag[i]="Great "+mag[i];
    console.log(mag[i]+" \n");
    }
}
make_great(magician);

// verification that array list has been updated.
console.log(magician[0], magician[1], magician[2]);
