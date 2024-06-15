// for loop
let amount = 10;
for (let i = 0; i <= 10; i++) {
    // console.log(`value is ${i}`)
}
// 
for (let index = 0; index < 10; index++) {
   console.log(`outer loop is ${index}`);
   for (let j = 0; j < 10; j++) {
   console.log(`inner loop is ${j} and outer loop is ${index}`)
   }
}
//  break;
for (let i = 0; i< 10; i++) {
    if (i == 5) {
        console.log(`break the iteration at 5`)
        break;
    }
   console.log(`value is ${i}`) 
}
// continue
for (let j = 0; j< 10; j++) {
    if (j == 5) {
        console.log(`skip the iteration of 5 and move on`)
        continue;
    }
   console.log(`value is ${j}`) 
}