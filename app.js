// Problem 1 - summing two numbers
function sum(sumNum1, sumNum2) {
  var summed = sumNum1 + sumNum2;
  //console.log('The sum of ' + sumNum1 + ' and ' + sumNum2 + ' is ' + summed + '.');
  return summed;
};

// Problem 2 - multiplying two numbers
function multiply(multiplyNum1, multiplyNum2) {
  var multiplied = multiplyNum1 * multiplyNum2;
  //console.log('The product of ' + multiplyNum1 + ' and ' + multiplyNum2 + ' is ' + multiplied + '.');
  return multiplied;
};

// Problem 3 - returns both the sum and product of three numbers
function sumAndMultiply(num1, num2, num3) {
  var summed = sum(sum(num1, num2), num3);
  var multiplied = multiply(multiply(num1, num2), num3);
  console.log(num1 + ' and ' + num2 + ' and ' + num3 + ' sum to ' + summed);
  console.log('The numbers ' + num1 + ' and ' + num2 + ' and ' + num3 + ' have a product of ' + multiplied + '.');
  return [summed, multiplied];
};

// Problem 4 - returns the sum of numbers passed within an array.
function sumArray(arrayOfNums) {
  var currentSum = 0;
  for (var i = 0; i < arrayOfNums.length; i++){
    currentNum = arrayOfNums[i];
    currentSum += currentNum;
  }
  console.log(arrayOfNums + ' was passed in as an array of numbers, and ' + currentSum + ' is their sum.');
  return currentSum;
}

// Problem 5 - returns the product of numbers passed within an array.
function multiplyArray(arrayOfNums) {
  var currentProduct = 1;
  for (var i = 0; i < arrayOfNums.length; i++){
    currentNum = arrayOfNums[i];
    currentProduct *= currentNum;
  }
  console.log('The numbers ' + arrayOfNums + ' have a product of ' + currentProduct + '.');
  return currentProduct;
}
