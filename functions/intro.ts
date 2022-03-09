/** 
Introduction
When we declare a function in JavaScript, we often expect it to be invoked with arguments of a certain type. JavaScript does not share our expectations: its type flexibility often allows functions to be invoked with unexpected argument types. Even when this doesn’t result in thrown errors, there can be negative consequences:

function printLengthOfText(text) {
  console.log(text.length);
}
 
printLengthOfText(3); // Prints: undefined
JavaScript developers have found error-handling solutions to avoid such undesirable effects, but these techniques can be cumbersome:

function printLengthOfText(text) {
  if (typeof text !== 'string') {
    throw new Error('Argument is not a string!');
  }
 
  console.log(text.length);
}
 
printLengthOfText(3); // Error: Argument is not a string!
In the code above, the function first checks the argument type. If it doesn’t match the expected type, an error is thrown; otherwise, it continues with its intended operation.

Before we explore how TypeScript handles this issue, let’s practice fixing some JavaScript type-related bugs. These are the kinds of problems that TypeScript helps us diagnose early on, before they become hard to spot.
*/