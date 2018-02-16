function greeter(person) {
  return `Hello ${person}`;
}

let user = 'Jane Doh';

document.body.innerHTML = greeter(user);