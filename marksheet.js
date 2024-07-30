var stu_name = prompt("Enter Name: ");
var rno = prompt("Enter Roll No: ");
var m1 = parseInt(prompt("Enter Marks of m1: "));
var m2 = parseInt(prompt("Enter marks of m2: "));
var m3 = parseInt(prompt("Enter marks of m3: "));
var total = m1 + m2 + m3;
var per = parseInt(total/3);
var grade;

if(per>=70){
    grade="distinction";
} else if(per>=60 && per<70){
    grade="first class";
} else if(per>=50 && per<60){
    grade="second class"
} else if(per>=40 && per <50){
    grade="Pass"
}else{
    grade="Fail"
}

document.write(`<table border=2 align=center width='550px' height='150px' cellpadding=5> <caption><h1>MarkSheet</h1></caption> <tr> <th>RollNo.</th> <th>Student Name</th> <th>M1</th> <th>M2</th> <th>M3</th> <th>Total</th> <th>Percentage</th> <th>Grade</th></tr> `);

document.write(`<tr> <td>${rno}</td> <td>${stu_name}</td> <td>${m1}</td> <td>${m2}</td> <td>${m3}</td> <td>${total}</td> <td>${per}</td> <td>${grade}</td> </tr> </table>`);
