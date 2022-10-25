const login= ["Mark", "Eric", "Chris", "Max", "admin"];
for (let i=0; i<login.length; i++)
{
    if (login[i]!="admin")
    console.log ("Hello "+login[i]+" thank you for logging again");
    else
    console.log ("Hello "+login[i]+", would you like to see a status report?");
    
}