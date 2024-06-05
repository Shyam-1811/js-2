// objects in js
// singleton -> objects formed using constructors
// objects can be declared 
// 1st way of declaring objects is literals
const user = { 
               " name " :  "Shyam",
                    age : 22,
            }
                 // accessing of elements of objects
            console.log(user);
            console.log(user.name);
            console.log( user["name"])

            const user1 = { 
                "name" :  "Shyam Verma",
                    age : 22,
            }
            console.log(user1);
            console.log(user1.name);
            console.log(typeof user1.name);
            console.log(user1["name"])
            console.log(typeof user1["name"])

            const user2 = { 
                name  :  "Shyam",
                     age : 22,
             }
             console.log(user2);
             console.log(user2.name);
             console.log(typeof user2.name);
             console.log( user["name"])
             console.log(typeof user2.name);
           