const path = require('path')
const express = require("express");
const { log } = require('console');

const app = express();
 app.use(express.urlencoded());

app.get('/',(req, res)=>{
  res.sendFile(path.join(__dirname,'views','home.html'))
});


// function name(first_name, last_name){
//   console.log(`my name is,`+first_name);
//   last_name();
// }
// function greet( wishing, noon ){
//   console.log(`Dwivedi,`+wishing);
//   noon();
// }
// function wish (){
//   console.log(`Good afternoon!`)
// }
// const user = {
//     first_name: 'ABHISHEK',
//     last_name: 'dwivedi',
//    greet: function(){
//   console.log('good morning,', user.first_name, user.last_name);
//  }
  
// }
// user.greet();s
let fruits = ['mango', 'orange', 'grapes', 'apple']

// console.log(fruits)
let result = fruits.slice()

console.log(result);



const PORT = 3002;
app.listen (PORT,()=>{
  console.log(`Server is listening on port http://localhost:${PORT}`)
})