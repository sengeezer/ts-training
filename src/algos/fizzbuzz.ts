for (let i = 1; i < 101; i++) {
  let resp;
  if (i % 15 === 0) {
    resp = 'fizzbuzz';
  } else if (i % 3 === 0) {
    resp = 'fizz';
  } else if (i % 5 === 0) {
    resp = 'buzz';
  } else {
    resp = i;
  }

  console.log(resp);
}