const fizzBuzz = (number) => {
  return new Promise((resolve, reject) => {
    if (number % 3 === 0) return resolve('Fizz');
    if (number % 5 === 0) return resolve('Buzz');
    if (number % 3 === 0 && number % 5 === 0) return ('FizzBuzz');
    return reject(number);
  })
}

fizzBuzz(1)
  .then((result) => console.log(result))
  .catch((err) => console.log(err));