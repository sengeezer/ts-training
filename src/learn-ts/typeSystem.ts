// Basic Types.
const isDone: boolean = true;
const height: number = 6;
const aName: string = 'test';
const list: number[] = [1, 2, 3];
// Also, with generics:
const otherList: Array<number> = [1, 2, 3];

// Enums
enum Color { Red, Green, Blue };
const c: Color = Color.Green;

// Any: Useful for those variables that we have no idea about.
let notSure: any = 4;
notSure = 'maybe a string';
notSure = false;

// Mix `any` with other types.
const anotherList: any[] = [1, true, 'free'];

// Void: The absense of a type.
function warnUser (): void {
  alert('This is my warning message');
}

// Function declaration with types.
function add (a: number, b: number): number {
  // return 'some string' //=> Error: Type 'string' is not assignable to type 'number'.
  return a + b;
}

// Optional Parameters.
function sayHello (name?: string) {
  // Name is optional.
  if (name) {
    console.log('Hello ' + name + '!');
  }

  console.log('Hello');
}

// Variables
let xa = 10; // Inferred 'number' type.
let y: number = 20; // Explicit 'number' type.

// Function calls.
add(xa, y); // Works.
// add('a', 'b'); //=> Error: Argument of type 'string' is not assignable to parameter of type 'number'.

// Type inferencing.
function takesCallback (cb: (error: Error) => any) {
  return cb(new Error('Boom!'));
}

takesCallback(function (err) {
  console.log(err.message);
})


// Interfaces.
interface MyInterface {
  value: string // Has a property which is a `string`.
  method (): number // Has a method that returns a `number`.
  (): boolean // It's a function that returns a `boolean`.
}

// Type Assertions.
interface Foo {
  x: number
  y: number
}

const foo = {} as Foo;
foo.x = 10;
foo.y = 10;
// foo.anotherValue = 'test' //=> Error: Property 'anotherValue' does not exist on type 'Foo'.

// Not possible to do.
// const bad = { x: 10 } as string

// But we can force it to happen.
const bad = { x: 10 } as any as string;
bad.toUpperCase(); // What?

// Type shorthand.
type HelloWorld = string;

function print (): HelloWorld {
  return 'hello world';
}

print().toUpperCase(); //=> 'HELLO WORLD'.

function getLabel (obj: { label: string }): string {
  return obj.label;
}

// Could also use in a type.
type LabelObj = { label: string };

// Or an interface.
// interface LabelObj { label: string }

// Extending Interfaces.
interface Animal {
  legs: number
}

interface Dog extends Animal {
  bark: string
}

// Type guards.
function typeGuard (obj: Dog): obj is Dog {
  return typeof obj.bark === 'string';
}

const dog = { legs: 4, bark: 'woof!' };

if (typeGuard(dog)) {
  alert('It\'s a dog! ' + dog.bark); // Definitely a dog.
}

// Generics.
function identity <T> (arg: T): T {
  return arg;
}

function arrify <T> (arr: T | T[]): T[] {
  if (Array.isArray(arr)) {
    return arr;
  }

  return [arr] as T[];
}

interface Map <T> {
  [key: string]: T
}

const dictionary: Map<string> = {};
dictionary[name] = name;

// Union Types.
const value: string | string[] = 'test'

console.log(value.length); // Works because it exists on both `string` and `Array`.

// Intersection Types.
function extend <A, B> (a: A, b: B): A & B {
  Object.keys(b).forEach(key => {
    (a as any)[key] = (b as any)[key];
  })

  return a as A & B;
}

function makeDogFromAnimal (animal: Animal): Dog {
  return extend(animal, { bark: 'woof woof woof' });
}

// Tuples.
const tuple: [string, number] = ['hello', 10];
// tuple = [10, 'hello'] //=> Error: Type '[number, string]' is not assignable to type '[string, number]'.

console.log(tuple[0].substr(1));
// console.log(tuple[1].substr(1)) //=> Error: Property 'substr' does not exist on type 'number'.

// `typeof`.
import * as TS from 'typescript'

declare function require (module: string): any;

function eventually () {
  const ts: typeof TS = require('typescript');
}

// `typeof` only works on values, but you can use an interface with generics.
class Foo { bar: string; }

function create <T> (Clazz: { new (): T }): T {
  return new Clazz();
}

const result = create(Foo);

// `this`.
class Calculator {
  constructor (protected value: number = 0) {

  }
  result (): number {
    return this.value;
  }
  add (operand: number) {
    this.value += operand;
    return this;
  }
  subtract(operand: number) {
    this.value -= operand;
    return this;
  }
}

const xb = new Calculator(10)
  .add(5)
  .result();