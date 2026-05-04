const path = require('path')
const express = require("express");
const { log } = require('console');

const app = express();
 app.use(express.urlencoded());

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'views','home.html'))
});

/// START PRACTICE FROM HERE----------

// ******************* Filter Mrthod *********************

let students = [
  { name: "Amit", marks: 85 },
  { name: "Neha", marks: 90 },
  { name: "Rahul", marks: 44 },
  { name: "Priya", marks: 55 },
  { name: "Arjuuun", marks: 70 }
];

let passedStud = students.filter((element)=>{
    return element.marks > 80;
})

console.log(passedStud);


// ******************* FindLast Mrthod *********************


 passedStud = students.findLast((element)=>{
    return element.marks > 80;
})

console.log(passedStud);


// ******************* fill() Method *********************

let name = ['alice', 'Bob', 'Jacob', 'Sam', 'David']

let fillMethod = name.fill('Ronny', 1,3);

console.log(fillMethod);

// ******************* split() AND arr.from() with fill() Method *********************

let num = '8081336738',
// num is string i need to change into an Array 

 arr = Array.from(num);
console.log(arr)

//**********  OR   ********** */

arr = num.split('');
console.log(arr);

let phoneNumberArrayWithZeros = arr.fill(0,5,11);
console.log(phoneNumberArrayWithZeros);


// ******************* every() method  *********************


// for true 
arr = [2,4,6,8,10,12]

let evenNumber = arr.every((nums)=>{
    return nums%2 === 0;
})
console.log(evenNumber);

arr = [2,4,6,9,10,12]

//for false

evenNumber = arr.every((nums)=>{
    return nums%2 === 0;
})
console.log(evenNumber);


// ******************* .reduce(callback) method  *********************

let prize = [10,29,40,21,33]

let totalPrize = prize.reduce((acc, prize)=>{
    return acc+prize;
},8)
console.log(totalPrize);



const myShoppingCart = [
  {
    id: 1,
    name: "HB Pencil Set (12 pcs)",
    price: 85,
    quantity: 2,
  },
  {
    id: 2,
    name: "Notebook (200 pages)",
    price: 120,
    quantity: 3,
  },
  {
    id: 3,
    name: "Blue Ballpoint Pen",
    price: 25,
    quantity: 5,
  },
  {
    id: 4,
    name: "Geometry Box",
    price: 180,
    quantity: 1,
  },
  {
    id: 5,
    name: "Eraser",
    price: 15,
    quantity: 4,
  },
  {
    id: 6,
    name: "A4 Sheet Pack (100 sheets)",
    price: 250,
    quantity: 1,
  },
  {
    id: 7,
    name: "Highlighter Set (4 colors)",
    price: 95,
    quantity: 1,
  },
];


const totalPrice = myShoppingCart.reduce((total, item) => {
  return total + (item.price * item.quantity);
}, 0);

console.log("Total Price:", totalPrice);


//********************  Destructuring ****************** */

const userProfileData = [
  "John Smith",
  "john.smith@email.com",
  "Software Engineer",
  "San Francisco",
  
];

const [names, email, job, location, ] = userProfileData;
console.log(names)
console.log(email)
console.log(job)
console.log(location)










const PORT = 3002;
app.listen (PORT,()=>{
  console.log(`Server is listening on port http://localhost:${PORT}`)
})