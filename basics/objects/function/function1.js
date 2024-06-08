// function in js
// eg -> sum of two number without return
function addTwoNumber(num1, num2){
    console.log(num1 + num2)
}
 const sum = addTwoNumber(5, 3);
 console.log(sum);                    /* gives output as undefined */

 console.log(addTwoNumber);
addTwoNumber();                   /* gives NaN */ 

// eg -> sum of two number with return
function addTwoNumber(num1, num2){
   result = num1 + num2;
   return result;
}
 const sum1 = addTwoNumber(5, 3);
 console.log(sum1);        
 console.log(`result is ${result}`);        
 console.log(addTwoNumber);        

