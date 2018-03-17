const debug: boolean = false;

// Tuple
const tuple: [number, string, string] = [24, 'hello', 'fellow'];

// Void
function sayMeNehm(name: string): void {
  console.log(name);
  // no return, hence void
}

// Any
let something: any = 'status';

something = 24;
something = true;

// Enum: set of named constants / named groups of values
enum ListOfNames {
  Dave,
  Dozzay,
  Mick,
  Teatch
}

console.log(ListOfNames);
// List of names and their index (in the absence of a defined value), both first and last

// Access a particular value
console.log(ListOfNames.Dave);
// Access value at index as string
console.log(ListOfNames[0]);

// Never: When the value returned is never of a type (but something is always returned)
const error = (message: string): never => {
  throw new Error(message);
}

if (debug) {
  error('some error message');
}

// null and undefined: subtypes of and can be assigned to all other types
let myUndefined: undefined = undefined;
let myNull: null = null;

// Type assertions: Supporting type inference by denoting a type more specific than the current one
let foos: any = 'e23';
let barz = <number>24;
// or in JSX:
barz = 24 as number;
