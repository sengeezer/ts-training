function greeter(person: string) {
  return `Hello ${person}`;
}

let user = 'Jane Doh';

document.body.innerHTML = greeter(user);