// dates  in javascript
let myDate = new Date()
console.log(myDate);
console.log(typeof myDate);
// some date methods                          
// tostring()                             output format    Mon Jun 03 2024 22:52:38 GMT+0530 (India Standard Time)
console.log(myDate.toString());
// tolocal()                            output format    3/6/2024, 10:51:26 pm 
console.log(myDate.toLocaleString());
// toISOString                                     output format          2024-06-03T17:24:14.178Z
console.log(myDate.toISOString());
// toJSON()                                         output format           2024-06-03T17:25:55.105Z
 console.log(myDate.toJSON());
// toDateString()                                        output format                    Mon Jun 03 2024
console.log(myDate.toDateString());
// toLocalDateString                                        output format                 3/6/2024
console.log(myDate.toLocaleDateString());
// toDateString()                                              output format              Mon Jun 03 2024
console.log(myDate.toDateString());
// toTimeString()                                               output format           23:01:07 GMT+0530 (India Standard Time)
console.log(myDate.toTimeString());
