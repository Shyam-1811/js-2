// time in js
// Date.now  return time in millisec from the date 1 jan 1970 -              1717436261710(output)
let myTime = Date.now()
console.log(myTime);
console.log(Date.now);
console.log(typeof myTime);
console.log(typeof Date.now);
// Date.now                                     return time in millisec from the date 1 jan 1970 -           
console.log(Date.now());
// Date.now()  to sec                             output in sec but round off   -- 1717436535.705
console.log(Date.now()/1000);   
console.log(Math.floor(Date.now()/1000));        /* output in sec fixed   -- 1717436535 */

let newDate = new Date();
console.log(newDate.getTime());
console.log(newDate.getDate()+1);
console.log(newDate.getFullYear());                /* output      2024     */