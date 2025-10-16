var num1 = 20;
var num2 = 60;
var num3 = "20";

var sum = num1+num2;
var difference = num1 - num2;
var product = num1 * num2;
var quotient = num1 / num2;
var remainder = num1 & num2;
var power = num1 ** 2;
console.log("Sum of " + num1 + " and " + num2 + " :" + sum);
console.log(`sum of ${num1} and ${num2} :${sum}`);
console.log(`difference of ${num1} and ${num2} :${difference}`);
console.log(`product of ${num1} and ${num2} :${product}`);
console.log(`divsion of ${num1} and ${num2} :${quotient}`);
console.log(`remainder of ${num1} and ${num2} :${remainder}`);
console.log(`${num1} to the power of 2: ${power}`);

console.log(`${num1} is greater than ${num2}:${num1 > num2}`)
console.log(`${num1} is lesse than ${num2}:${num1 < num2}`)
console.log(`${num1} is equal to ${num2}:${num1 == num2}`)
console.log(`${num1} is not equal to ${num2}:${num1 != num2}`)
console.log(`${num1} is equal to ${num3}:${num1 == num3}`)
console.log(`${num1} is strightly equal to ${num3}:${num1 == num3}`)

