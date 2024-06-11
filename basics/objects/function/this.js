// This keyword in js
const user = {
    username : "Shyam",
    Networth : 10000000,
    welcomemessage : function(){
        console.log(`${this.username}, Welcome to new day`);
         console.log(this)         /* give context w.r.t shyam then w.r.t Shyam verma */   
    }
}
user.welcomemessage()
user.username = "Shyam Verma";
user.welcomemessage()
console.log(this);         /* give {} as an output */    

                //    +++++++++ //
                // This keyword in function

                function Addition(num1, num2){
                    username1 : "Shyam Verma"
                console.log(num1 + num2);
                console.log(this.username1);          /* gives undefined */
                console.log(this)   
                }
                Addition(2, 5);
                console.log(this)
                

                