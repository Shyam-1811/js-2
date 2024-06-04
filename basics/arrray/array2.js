// push()
const marks  = [ 66, 98, 55, 38,78]
const New =  marks.push( "Shyam", "Ram", " Kartik");
console.log(New);
console.log(marks);
console.log(marks[3]);
console.log(marks[5]);
// concat
const marks1  = [ 66, 98, 55, 38,78]
const New1 =  marks1.concat( "Shyam", "Ram", " Kartik");
console.log(New1);
 console.log(marks1);
console.log(marks1[3]);
console.log(marks1[5]);
// spread   gives all elements within a single array
const marks2  = [ 66, 98, 55, 38,78]
const New2 =  ["Shyam", "Ram", " Kartik"];
const m3 = [...marks2, ...New2]
console.log(m3);
console.log( typeof m3);
// flat
const m4 = [ 1, 2, 3, [1], 5, [[2], [8]]];
console.log(m4.flat(Infinity));
// from  separates each value and makes them array
console.log(Array.from("Shyam"));
// is() tells whether inserted value is same  or not is same returns true.
console.log(Object.is(-0, 0));
console.log(Object.is("Shyam", "Shyam"));
console.log(Object.is(null, "null"));
console.log(Object.is("[33]", 33));
// of()   makes the given elements into array
console.log(Array.of('foo', 2, 'bar', true));
console.log(Array.of(6, 7, 3, 55, 76));
console.log(Array.of("Shyam", "Shivani", "priya","Sneha"));