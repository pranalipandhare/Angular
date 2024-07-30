// var n1 = prompt("Enter first number");
// var n2 = prompt("Enter second number");

// if(n1<n2){
//     for(var i=n1; i<=n2; i++){
//         document.write(`${i} <br>`)
//     }
// }else{
//     for(var i=n1; i>=n2; i--){
//         document.write(`${i} <br>`)
//     }   
// }

// reverse number

var num = parseInt(prompt("Enter number"));
var result = 0;
while(num!=0){
    rem = num%10;
    result = (result*10)+rem;
    num = parseInt(num/10);
}

document.write(`Reverse Number: - ${result}`)

// 