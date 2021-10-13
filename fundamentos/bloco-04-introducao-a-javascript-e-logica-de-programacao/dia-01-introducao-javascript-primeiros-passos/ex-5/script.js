const a = 60;
const b = 60;
const c = 60;

const sum = a + b + c;

if (a < 0 || b < 0 || c < 0) {
  console.log('error');
} else if (sum === 180) {
  console.log(true);
} else {
  console.log(false);
}



