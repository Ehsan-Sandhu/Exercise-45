const login= ["mark", "eric", "chris", "max", "admin"];
const newUser= ["tim", "ali", "mark", "admin", "edward"];
let temp;
for (let i=0; i<newUser.length; i++)
    {
    for(let m=0; m<login.length; m++)
        {
            if (login[m]==newUser[i])
               { console.log(newUser[i]+", is already in use, create a new User Name");}
            else if (login[m]!=newUser[i] && m==login.length-1)
               { console.log(newUser[i]+", is Available");}
            
        }
    }