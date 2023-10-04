export function add(numbers) {
  let sum = 0;

  for (const number of numbers) {
    // sum += number;
    // fixed our code to pass all tests
    sum += +number;
  }
  return sum;
}
