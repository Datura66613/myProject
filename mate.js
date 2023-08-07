// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//
// readline.question('Who are you?', (userInput1) => {
//     console.log(`Hey there 1 ${userInput1}!`);
//     });
// readline.question('Who are you22?', (userInput2) => {
//         console.log(`Hey there 2 ${userInput2}!`);
//     readline.close();
// });



//Встановив модуль (npm install prompt-sync) in the terminal
const prompt = require('prompt-sync')();
const inputAge = prompt("Please enter your age:");
if (inputAge < 18) {
    console.log("Малий втсуписі звідси, не пали контору!!!")
} else {
    console.log("Я бачу що тобі" + inputAge );
    console.log("Шо хочеш?");
    console.log("1. Трави");
    console.log("2. Маку");
    const product = prompt("Зроби свій вибір");

}
