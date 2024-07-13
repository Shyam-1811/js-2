fetch("https://api.github.com/users/shyam-1811")
.then((Response) =>{
    return Response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((Error)=>
console.log("Error generated "))
