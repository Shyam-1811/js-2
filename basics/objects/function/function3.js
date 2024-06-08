// passing objects to function
const user = {
    username  : "Shyam Verma",
    Rollno : 22
}
function passingObject(anyObject){
    console.log(` My username is ${anyObject.username} and my Rollno. is ${anyObject.Rollno}`);
}
passingObject(user);

// directly passing objects in function.
function passObj(anyObj){
    console.log(` My username is ${anyObj.user1name} and my Rollno. is ${anyObj.roll}`);
}
passObj(user1 = {
    user1name : "Ritik",
    roll : 25
})

// passsing array
const Array = [1, 2, 3, 4, 5]
function passArray(anyArray){
    console.log(`array is ${[Array]}`)
}
passArray(Array);
console.log(typeof Array);

