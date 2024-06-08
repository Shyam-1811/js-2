// when more then one parameters given the use rest method
function manyParameters(num1){
     return num1;
}
console.log(manyParameters(20, 40, 60));   /*only the first value will appear as output*/

// then use rest method
function manyParameters(...num1){
    return num1;
}
console.log(manyParameters(20, 40, 60)); 
// 
function manyParameters(num1, num2, ...num3 ){
    return num3;                                   /* num1= 20, num2 = 40, num3 = [60, 70] */
}
console.log(manyParameters(20, 40, 60, 70)); 



