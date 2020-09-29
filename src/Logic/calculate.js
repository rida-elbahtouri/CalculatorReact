import operate from "./operate";
const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;

  const operations = ["+", "-", "x", "÷", "%"];

  if (buttonName === "+/-") {
    total *= -1;
    next *= -1;
  } else if (buttonName === "AC") {
    total = null;
    next = null;
  } else if (buttonName === "=") {
    operate(total, next, operation);
  } else if (!operations.includes(buttonName)) {
    if (total === null) {
      total += buttonName;
    } else {
      next += buttonName;
    }
  } else if (operations.includes(buttonName)) {
    operation = buttonName;
  }

  return { total, next, operation };
};
export default calculate;
