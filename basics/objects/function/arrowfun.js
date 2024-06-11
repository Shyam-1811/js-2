    //   Arrow function in js
     const add = (num1, num2) => 
        (num1 + num2 ) 
        console.log(add(1, 9));

        //  +++++++++++
// IIFE -> immediately invoked function expression
// syntax
(function chai(){
    console.log(`HELLO`);
}) ();
((name) => {
    console.log(`${name}`);
}) ("Shyam")