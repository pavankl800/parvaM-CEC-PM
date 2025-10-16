function sayHi(){
    console.log('hello students');
}
sayHi();
function sayHello(name){
    console.log(`hi,${name}!`);
}
sayHello("pavan");
sayHello("madesh");
function findsum(num1,num2){
    return num1+num2;
}
n1=20,n2=30;
console.log(`sum of ${n1} and ${n2}: ${findsum(n1,n2)}`);
function findsquare(num){
    return num**2;
}
num=25;
console.log(`square of ${num}: ${findsquare(num)}`);
function checkeven(number){
    if(number % 2==0){
        return true;
    } else {
        return false;
    }
}
number=23;
console.log(`is ${number} a even number? ${checkeven(number)}`);