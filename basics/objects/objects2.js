// Accessing of Symbols in objects
const user = {
    name : "Shyam",
     mySymbol : Symbol('22')
}
let result = user.mySymbol.valueOf();
console.log(user.mySymbol);
console.log( typeof user.mySymbol);
// updation of values
user.name = "Shyam Verma"
console.log(user.name);
// .freeze(name of object)  -> no change in values after this.
Object.freeze(user)
user.name = "Ritik "
console.log(user.name);