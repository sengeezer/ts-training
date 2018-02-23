import 'reflect-metadata';

// OLD WAY

const person = {
  name: 'Djonn',
}

// Decorator function
function addAge(age){
  return function(person) {
    return {
      age,
      name: person.name,
    }
  }
}

console.log(addAge(30)(person));

// NEW WAY

// Output parameter types
function newAge() {
  return function(targetClass) {
    const types = Reflect.getMetadata('design:paramtypes', targetClass);
    console.log(types);
    return targetClass;
  }
}

function adage(age) {
  return function(targetClass) {
    return class {
      name = new targetClass().name;
      age = age;
    }
  }
}

// Always add age to newly instantiated Person(s)

@adage(30)
class Person {
  name = 'Djonn';
}

console.log(new Person());

@newAge()
class NonPerson {
  constructor(name: string) {

  }
}

new NonPerson('Djonn');