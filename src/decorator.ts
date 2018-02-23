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