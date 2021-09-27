const sum = (a, b) => a + b;
const min = (a, b) => a - b;
const dev = (a, b) => a / b;
const mult = (a, b) => a * b;

export const calculator = (a, b, operator) => {
  let res = 0;
  switch (operator) {
    case "+":
      res = sum(a, b);
      break;
    case "-":
      res = min(a, b);
      break;
    case "*":
      res = mult(a, b);
      break;
    case "/":
      res = dev(a, b);
      break;

    default:
      break;
  }
  console.log(res);
};
