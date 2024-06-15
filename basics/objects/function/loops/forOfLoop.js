// forOf Loop
const myArray = ['flash', 'batman', 'ironman', 'thor'];
for (const Array of myArray) {
    // console.log(Array)
}
// map 
const map = new Map()
map.set("IN", "India")
map.set("USA", "America")
map.set("Fr", "francse")
map.set("IN", "India")
console.log(map);
for (const [key,value] of map) {
    // console.log(key, value)
}
//  forIn loop
const obj = {
    1: "one",
    2: "two",
    3: "three"
}
for (const value in obj) {
   console.log(`${value} is for ${obj[value]}`);  
    }
