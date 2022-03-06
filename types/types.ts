/**
 * typescript has different types such as javascript - primitive types such as js - string, number, bigint, boolean, undefined, symbol, and null 
 * there is also inference types:
 * 
 * Type Inferences
JavaScript allows us to assign any value to any variable. That makes it very flexible to use, which can be good for getting started quickly in coding. In practice, variables that are assigned values of multiple types throughout a program can be very confusing or lead to bugs.

One of the first things we’ll discover with TypeScript is that when we declare a variable with an initial value, the variable can never be reassigned a value of a different data type. This is an example of type inference: everywhere in our program, TypeScript expects the data type of the variable to match the type of the value initially assigned to it at declaration.

TypeScript recognizes JavaScript’s built-in “primitive” data types:

boolean
number
null
string
undefined
If we try to reassign a variable to a value of a different type, TypeScript will surface an error.

let order = 'first';
 
order = 1;
Running the TypeScript code above will result in the following error being surfaced in the terminal: Type '1' is not assignable to type 'string'.

TypeScript’s type system is telling us that order is expected to be the primitive type string, but we’re trying to assign it a value of type number. That’s not allowed: variables can only be assigned the types expected by the type system.

We can fix this complaint by changing the new value to be the expected string type:

let order = 'first';
 
order = '1';
Let’s practice!

Type Shapes
Because TypeScript knows what types our objects are, it also knows what shapes our objects adhere to. An object’s shape describes, among other things, what properties and methods it does or doesn’t contain.

The built-in types in JavaScript each have known properties and methods that always exist. All strings, for example, are known to have a .length property and .toLowerCase() method.

"OH".length; // 2
"MY".toLowerCase(); // "my"
TypeScript’s tsc command will let you know if your code tries to access properties and methods that don’t exist:

"MY".toLowercase();
// Property 'toLowercase' does not exist on type '"MY"'.
// Did you mean 'toLowerCase'?
Through this knowledge of type shapes, TypeScript helps us quickly locate bugs in our code.

Let’s try it!

Any
There are some places where TypeScript will not try to infer what type something is—generally when a variable is declared without being assigned an initial value. In situations where it isn’t able to infer a type, TypeScript will consider a variable to be of type any.

Variables of type any can be assigned to any value and TypeScript won’t give an error if they’re reassigned to a different type later on.

let onOrOff;
 
onOrOff = 1;
onOrOff = false;
In the code above, we declared the variable onOrOff without an initial value. TypeScript considers it to be of type any, and, therefore, doesn’t produce an error when we change the variable’s assignment from a number value to a boolean value.

let first;
first = 'Anders';
first = 1337;
  

TypeScript Supports Type Annotations
Adding a type annotation ensures that a variable can only ever be assigned to that type. This can be useful when declaring a variable without an initial value. Type annotations get removed when compiled to JavaScript. The type declaration is provided by appending a variable with a colon (:) and the type (eg. number).

let first: string;
first = 'Anders';
 
// Error: Type 'number' is not assignable to type 'string'
first = 1337;
 */