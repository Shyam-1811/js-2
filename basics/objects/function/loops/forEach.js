// forEach loop can be used to access array
const myArray = ['flash', 'batman', 'ironman', 'thor'];
myArray.forEach(function(element) {
     console.log(element)
});
const myArray1 = ['s', 'h', 'y', 'a', 'm'];
myArray1.forEach(function(index,value,array) { 
    console.log(` index is ${index} value is ${value} array is ${array}`)}); /* important*/
// +++++++++++++========
// onjects in array
    let coding = [
        {name : "shyam"},
        {name : "ram"},
        {name : "sita"}
    ]
    coding.forEach((item) => {
        console.log(item.name)
    });
    let coding1 = [
        {name : "shyam"},
        {name : "ram"},
        {name : "sita"}
    ]
    coding1.forEach((item) => {
        console.log(item)
    });