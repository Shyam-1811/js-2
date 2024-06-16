// ++++++ map in js
//  gives false
let number = [1, 2, 3, 4, 5, 6, 7]
 const newNums = number.map( (num) => num > 4);
console.log(newNums);
// ++++
let number1 = [1, 2, 3, 4, 5, 6, 7]
 const newNums1 = number1.map( (num) => num + 10);
console.log(newNums1);
// ++++++++
let number2 = [1, 2, 3, 4, 5, 6, 7]
 const newNums2 = number2.map( (num) =>{ return num + 10});
console.log(newNums2);
// +++++ objects in map
const user = [
    {
    name : "Shyam",
    email : 'xyg@gmail.com',
    age : 88
    },
    {
        name : "Ritik",
        email : 'xyz@gmail.com',
        age : 19
        },
        {
            name : "ram",
            email : 'pqr@gmail.com',
            age : 56
            }
]
const myuser = user.map( (user) =>  user.name + " Hello World")
console.log(myuser);