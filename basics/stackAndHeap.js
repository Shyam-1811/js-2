// stacks used for primitive datatypes and makes changes in the shallow copy not in the original items
// examples
let Name = "Shyam"
let Name2 = Name
Name2 ="Verma"
console.log(Name2);
console.log(Name);

//Heap used for non primitive datatypes and makes changes in original copy also
//  Examples
let user = {
    name : "Kartik",
    age:  20
}
let user2 = user;
user2.name = "kumar";
console.log(user2.name);   /* both returns kumar as output as it made the changes in the original copy.*/
console.log(user.name);   