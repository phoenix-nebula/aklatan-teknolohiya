let score = 0;
let number = 0;

const one = prompt(`What is 1 + 1`, "Enter a number");
const ansOne = 2;
switch (one == ansOne) {
    case true: 
        console.log(`Number 1 is correct, the answer is ${ansOne}`);
        score++;
        number++;
    break;
    case false: 
        console.log(`Number 1 is incorrect, the answer is ${ansOne}`);
        number++;
    break;
}

const two = prompt(`What is 10 - 8`, "Enter a Number");
const ansTwo = 2;
switch (two == ansTwo) {
    case true: 
        console.log(`Number 2 is correct, the answer is ${ansTwo}`);
        number++;
        score++;
    break;
    case false:
        console.log(`Number 2 is incorrect, the answer is ${ansTwo}`);
        number++;
    break;
}

const three = prompt(`What is 9 x 9`, "Enter a number");
const ansThree = 81;
switch (three == ansThree) {
    case true:
        console.log(`Number 3 is correct, the answer is ${ansThree}`);
        number++;
        score++;
    break;
    case false:
        console.log(`Number 3 is incorrect, the answer is ${ansThree}`);
        number++;
    break;
}

const four = prompt(`What is 11 / 11`, "Enter a Number");
const ansFour = 1;
switch (four == ansFour) {
    case true:
        console.log(`Number 4 is correct, the answer is ${ansFour}`);
        score++;
        number++;
    break;
    case false:
        console.log(`Number 4 is incorrect, the answer is ${ansFour}`);
        number++;
    break;
}

const five = prompt(`What is 6 x 3`, "Enter a Number");
const ansFive = 18;
switch (five == ansFive) {
    case true:
        console.log(`Number 5 is correct, the answer is ${ansFive}`);
        score++;
        number++;
    break;
    case false:
        console.log(`Number 5 is incorrect, the answer is ${ansFive}`);
        number++;
    break;
}

function calculation (x,y) {
    let calc = (x / y) * 100;
    return calc;
}

const grade = calculation(score, number);

console.log(`You've got ${score} out of ${number}, your grade is ${grade}%`);

if (grade == 100) {
    console.log("Congratulations! You have a perfect score!");
} else if (grade >= 60) {
    console.log("Congratulations! You passed!");
} else {
    console.log("You failed the test, but you can try it again!");
}
