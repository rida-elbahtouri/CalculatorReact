import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;

  const operations = ['+', '-', 'x', '÷', '%'];

  if (buttonName === '+/-') {
    total *= -1;
    next *= -1;
  } else if (buttonName === 'AC') {
    total = null;
    next = null;
    operation = null;
  } else if (buttonName === '=') {
    if (total && next && operation) {
      total = operate(total, next, operation);
      next = null;
    }
  } else if (!operations.includes(buttonName)) {
    if (total === null && operation === null && next === null) {
      total = buttonName;
    } else if (next === null && operation === null) {
      total += buttonName;
    } else if (next === null) {
      next = buttonName;
    } else {
      next += buttonName;
    }
  } else if (operations.includes(buttonName)) {
    operation = buttonName;
  }
  return { total, next, operation };
};
export default calculate;
