// ++++ reduce method in js
let number = [1, 2, 3]
 const newNums = number.reduce(function(acc, cv) 
{ console.log(` accumulator is ${acc} and current value is ${cv}`) 
 return acc +cv
},0
)
console.log(newNums);
// +++
let number1 = [1, 2, 3]
 const newNums1 = number1.reduce((acc, cv) =>  acc + cv, 0
// { console.log(` accumulator is ${acc} and current value is ${cv}`) 
//  return acc +cv
// },0
)
console.log(newNums1);
// ++++++
