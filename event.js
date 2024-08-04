function fun(){
   alert("Alert")
}

function fun1(){
    alert("I am not in the fun1 block")
}

function clickfun(){
     var para = document.getElementById("p1");
    para.innerHTML = "New Para";
}

function loadfun(){
    console.log("load event invoked")
}

function add(){
    var n1 = parseInt(f1.txt1.value);
    var n2 = parseInt(f1.txt2.value);
    var sum = n1 + n2;
    f1.txt3.value = sum;
    alert(sum);
    console.log(sum)
    // document.write(`Sum: - ${sum}`);

    var headElement = document.getElementById("head")
    headElement.innerHTML = `addition: - ${sum}`
}

// document is the predefined javascript Object
document.getElementById()
document.getElementsByClassName()
document.getElementsByTagName()
document.getElementsByName()
document.querySelector() 
