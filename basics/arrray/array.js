// Array in js
let myArray = [ 0, 1, 2, 3, 4, 5, 6, 7]
let newArray = [ "shyam", "Ram", "kartik", " Shivani"]
console.log(myArray);
console.log(newArray);

console.log( typeof myArray);
console.log( typeof newArray);

// methods in array
// .push(value to index)
console.log(myArray.push(9));
console.log(myArray);
// .pop()           removes  last element
console.log(myArray.pop());
console.log(myArray);
// include()
console.log(myArray.includes(5));
console.log(myArray.includes(100));
// index of()
console.log(myArray.indexOf(6));
// .join()   converts the array into string
const Array1 = myArray.join()
console.log(Array1);
console.log( typeof myArray);
console.log(typeof Array1);
// slice()
console.log(myArray.slice(2, 5));
// splice()  removes the slice part from the items and also includes the last index elements
console.log(myArray.splice(2, 5));
console.log(myArray);


