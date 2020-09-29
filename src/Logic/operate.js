import Big from "big.js";
const operate = (numberOne, numberTwo, operation) => {
  const num1 = Big(numberOne);
  const num2 = Big(numberTwo);
  switch (operation) {
    case "-":
      return num1.minus(num2).toString();
    case "+":
      return num1.plus(num2).toString();
    case "*":
      return num1.times(num2).toString();
    case "÷":
      if (num2.toString() === "0") {
        return "can't divide by zero";
      }
      return num1.div(num2).toString();
    case "%":
      return num1.mod(num2).toString();
    default:
      break;
  }
};
export default operate;
