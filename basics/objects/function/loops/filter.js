// +++ filter in js
let number = [1, 2, 3, 4, 5, 6, 7]
 const newNums = number.filter( (num) => num > 4);
console.log(newNums);
// +++++++++++++++++  gives []
let number1 = [1, 2, 3, 4, 5, 6, 7]
 const newNums1 = number1.filter( (num) => {num > 4});
console.log(newNums1);
// ++++++++++   return keyword
let number2 = [1, 2, 3, 4, 5, 6, 7]
 const newNums2 = number2.filter( (num) => {return num >4 });
console.log(newNums2);
// +++++++++  not working ?
let number3 = [1, 2, 3, 4, 5, 6, 7]
 const newNums3 = number3.filter( (value, index, array) => {return value, index, array});
console.log(newNums3);
// ++++ object 
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
const myuser = user.filter( (user) => user.name && user.age >50)
console.log(myuser);

