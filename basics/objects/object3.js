// declaring objects using constructors
const user = new Object()
user.name = "Shyam Verma"
// console.log(user.name);
// objects in object
const user1 = { 
email : "xyz@gmail.com",
fullname : {
    user1name : {
        firstname : "Shyam",
        lastname :  "Verma"
                } 
            }
                }
                // console.log(user1.fullname);
                // console.log(user1.fullname.user1name);
                // console.log(user1.fullname.user1name.firstname);
                user2 = {
                    1 : 'a', 2 : 'b', 3 : 'c' 
                }
                // merging objects in js
                const merging = { ...user, ...user1, ...user2}
                console.log(merging)
                console.log(user);


