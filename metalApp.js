const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

operation = readline.question('Як тебе звати?', name => {
    console.log(`Hey there ${name}!, що виберете?`);

    readline.close();
});