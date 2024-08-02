// Object is key value pair structure

let person = {
    name:"Rohit",
    age:23,
    city:"Pune",
    sal:45000,
    deptno:20
}

console.log(person)
console.log(`Salary:- ${person.sal}`)

//Array of Objects

var persons_info = [
    {
        name: "John",
        country: "US",
        sal: 90000,
        role: "Manager"
    },

    { 
        name: "Matrin",
        country: "Germany",
        sal:50000,
        role: "Developer"
    },

    {
        name: "Soham",
        country: "India",
        sal:60000,
        role: "Director" 
    },
    {
        name: "Pratik",
        country: "India",
        sal:77000,
        role: "Director" 
    },
    {
        name: "Shivani",
        country: "India",
        sal:88000,
        role: "Developer" 
    }
    
]
console.log(persons_info);
console.log(persons_info[2].country);
for(let i in persons_info){
    if(persons_info[i].sal >= 50000){
        console.log(`${persons_info[i].name} => ${persons_info[i].country}`)
}
}

console.log("Map function output: - ")
persons_info.map((e) => {
    console.log(`Name:- ${e.name} from ${e.country}`)
})

console.log("ForEach Output")
persons_info.forEach((e) => {
    console.log(e)
})

console.log("Filtered Data: - ")
let filteredData = persons_info.filter(function(e){
    return e.sal >= 50000;
})
console.log(filteredData)

