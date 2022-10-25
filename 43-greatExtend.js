const magician= ["David", "Blain", "Master"];

function displaynames(mag)
{   for (let i=0; i<mag.length; i++)
    console.log(mag[i]+" \n");
}

function make_great(mag)
{  
    let newMagician=[];
    for (let m=0;m<mag.length;m++)
    {
        newMagician[m]=mag[m];
        //console.log(newMagician[m]);
    }    

    for (let i=0; i<mag.length; i++)
    {
    mag[i]="Great "+mag[i];
    console.log(mag[i]+" \n");
    }
return newMagician;
}

// Receiving Array returned from the make_great() when an array "magician" is passed to make_great()

let mag_ret= " ";
mag_ret=make_great(magician);
for (let i=0; i<mag_ret.length; i++)
    { 
console.log(mag_ret[i]);
    }
//displaynames(magician);
//displaynames(mag_ret);