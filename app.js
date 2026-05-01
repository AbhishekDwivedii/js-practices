const path = require('path')
const express = require("express");
const { log } = require('console');

const app = express();
 app.use(express.urlencoded());

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'views','home.html'))
});

/// START PRACTICE FROM HERE----------



let students = [
  { name: "Amit", marks: 85 },
  { name: "Neha", marks: 90 },
  { name: "Rahul", marks: 44 },
  { name: "Priya", marks: 55 },
  { name: "Arjuuun", marks: 70 }
];

let passedStud = students.find((element)=>{
    return element.marks > 80;
})

console.log(passedStud);























const PORT = 3002;
app.listen (PORT,()=>{
  console.log(`Server is listening on port http://localhost:${PORT}`)
})