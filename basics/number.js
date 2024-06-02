const balance = 100;
console.log(balance);
// new Number()
const marks = new Number(44)
console.log(marks);
//   some functions in number
const amount  = 101;
// tofixed() -> return fixed digit after decimal
console.log(amount.toFixed(2));
// to string
console.log(amount.toString());
console.log(amount.toString().length)
// to precision()
console.log(amount.toPrecision(3))
const salaryAmount = 20005500.765343
console.log(salaryAmount.toPrecision(3))
console.log(salaryAmount.toLocaleString('en-IN'))