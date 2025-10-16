var even = [2,4,6,8,10];
console.log(even);
console.log(typeof(even));

//unshift is used to add the item to the first position in array
even.unshift(20)
console.log(even);

//push is used to add the item to the last position in array
even.push(30)
console.log(even);

//remove first item
even.shift();
console.log(`after shift ${even}`);

//pop is used to reemove last item
even.pop();
console.log(`after pop ${even}`);

//find is used to find elements in array
var students = [
    {id:1,studentName:"Akshay",branch:"CSE"},
    {id:2,studentName:"Ajay",branch:"ISE"},
    {id:3,studentName:"naveen",branch:"AIML"},
    {id:4,studentName:"amit",branch:"CIVIL"},
    {id:5,studentName:"sanosh",branch:"MECH"}
]

function findAkshay(student){
    return student.studentName === "Akshay";
}

var akshay = students.find(findAkshay);
console.log(akshay);



