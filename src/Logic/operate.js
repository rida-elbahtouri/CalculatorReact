import Big from 'big.js';

function operate(numberOne, numberTwo, operation) {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case '-':
      return num1.minus(num2).toString();
    case '+':
      return num1.plus(num2).toString();
    case 'x':
      return num1.times(num2).toString();
    case '÷':
      if (num2.toString() === '0') {
        return "can't divide by zero";
      }
      return num1.div(num2).toString();
    case '%':
      return ((num1 * num2) / 100).toString();
    default:
      return 'operation not available';
  }
}
export default operate;
