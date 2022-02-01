// function printOperations(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//       throw new Error('Both arguments must be numbers!');
//     }
//     console.log(a + b, a / b);
//   }
//   // The function call below should print: 12 1 
//   printOperations(6, 6);
function exclaim(name, count) {
    for (var i = 0; i < count; i += 1) {
        console.log("".concat(name, "!"));
    }
}
// Exclaim 'Muriel!' six times
exclaim('Muriel', 6);
// a variable can not be assigned 2 values of a diff type
// let aged = true;
// let realAge = 0;
// if (aged) {
//   realAge = 4;
// }
// let dogAge = realAge * 7;
// console.log(`${dogAge} years`);
// let firstName = 'muriel!';
// console.log(firstName.toUpperCase());
// console.log(firstName.length);
// Any
// There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type any.
// Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.
