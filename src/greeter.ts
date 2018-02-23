class Student {
  fullName: string;
  constructor(public firstName: string, public middleInitial: string, public lastName: string) {
    this.fullName = `${firstName} ${middleInitial} ${lastName}`;
  }
}

interface Cheloviek {
  firstName: string;
  lastName: string;
}

function greeter(person: Cheloviek) {
  return `Hello ${person.firstName} ${person.lastName}`;
}

let user = new Student('Jahne', 'M', 'D\'Oh');

// document.body.innerHTML = greeter(user);
console.log(greeter(user));