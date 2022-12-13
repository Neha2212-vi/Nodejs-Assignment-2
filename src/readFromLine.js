const readline = require("readline");
const greeting = readline.createInterface({
    input : process.stdin,
    output : process.stdout
})
greeting.question("Please enter your name: ", (name)=>{
    console.log(`Hello ${name}`);
    greeting.close();
})