// function in js used for reusability of code

function fun(){
    alert("I am in fun block");
}

function fun1(){
    alert("I am in fun1 block");
}

fun1();
fun();

// factorial of given number using function with argument with return

var num = parseInt(prompt("Enter the number "))

function fact(n){

    let f = 1;
    for(let i = 1; i<-n;i++){
        f = f*i;
    }
    return f;

}
let result = fact(num)

console.log(`factorial : - ${result}`)

// print greates of 3 numbers using function without argument but return value 

function greatestOfThree(){
    let num1 = parseFloat(prompt("Enter the first number:"));
    let num2 = parseFloat(prompt("Enter the second number:"));
    let num3 = parseFloat(prompt("Enter the third number:"));

    let greatest;
    if(num1 >num2 && num2 > num3){
        greatest = num1;
    }else if(num2 > num1 && num2 > num1){
        greatest = num2;
    }else{
        greatest = num3;
    }
    return greatest;
}

console.log("The greatest number is: " + greatestOfThree());

// ES6 - Modern JavaScript - Arrow Function
// To write shorter function in shorter and very concise way using arrow function
// Short way to write a function => Arrow function
// let result = () => {
//    Statement
// }

// WP to print square of given number using arrow function
let square = (num)=> num*num;
console.log(square);
console.log(square(5));

//WAP to print addition of 2 numbers 

let add = (a, b) =>{
    return a+b;
}
console.log(add(2,3));