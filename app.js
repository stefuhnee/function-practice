// Problem 1 - summing two numbers
function sum(sumNum1, sumNum2) {
  var summed = sumNum1 + sumNum2;
  //console.log('The sum of ' + sumNum1 + ' and ' + sumNum2 + ' is ' + summed);
  return summed;
};

// Problem 2 - multiplying two numbers
function multiply(multiplyNum1, multiplyNum2) {
  var multiplied = multiplyNum1 * multiplyNum2;
  //console.log('The product of ' + multiplyNum1 + ' and ' + multiplyNum2 + ' is ' + multiplied);
  return multiplied;
};

// Problem 3 - returns both the sum and product of three numbers
function sumAndMultiply(num1, num2, num3) {
  var summed = sum(sum(num1, num2), num3);
  var multiplied = multiply(multiply(num1, num2), num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + summed);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplied);
  return [summed, multiplied];
}
