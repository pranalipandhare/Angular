var num = parseInt("Enter number ")
var rem;
var result = 0;

while(num!=0){
    rem = num%10;
    result = (result*10)+rem
    num = parseInt(num/10);
}
if(result==num){
    // it is true when both result and num is same then it is palindrome
    alert("Given Number is Palindrome")

}else{
    alert("Given Number is not Palindrome")
}