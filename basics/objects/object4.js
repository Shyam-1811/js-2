const user2 = { 
    name: "Shyam",
    age : 22,
 }
 console.log(user2.name);
  const { name : naam } = user2;      /* Object destructuring*/
 console.log(naam); 
//  console.log(age);  error generated 