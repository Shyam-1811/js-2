//  methods to create promise in js
// method - 1
const promiseOne  = new Promise(function (resolve,reject) {
    setTimeout((function(){
        resolve({username : "Shyam",
            emainId : "Shyam@gmail.com"
        })
    }),2000)
})
promiseOne.then(function (user) {
    console.log(user)
})
// method - 2
 new Promise(function (resolve,reject) {
    setTimeout((function(){
        resolve({username : "Ritik",
            emainId : "Ritik@gmail.com"
        })
    }),5000)
}).then(function (user) {
    console.log(user)
})