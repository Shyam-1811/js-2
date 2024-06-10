//   Scope in javascript
// Global scope and local(block) scope
let a = 40;
const b = 20;
    if(a === 40){
        let c = 100;
        console.log(c);
        console.log(a);
    }
    // console.log(c); gives error as c is variable in local scope.
    console.log(a);   /* Global  scope */

    // Closure in js is that child entity can access the parent entity's variable but vice versa is not possible.
