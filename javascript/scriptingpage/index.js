// prompt loads first before the document
const passage = prompt('Enter a passage with percentage problem:');
console.log(passage);
const value1 = prompt('Enter passage value 1:');
console.log(value1);
const value2 = prompt('Enter passage value 2:');
console.log(value2);
const question = prompt('Enter a question for the passage:');
console.log(question);

const calculation = (x, y) => {
    const ans = (x / y) * 100;
    return ans;
}

const answer = prompt(question, "Enter your answer");
const finAns = Number(answer);
const ans = calculation(value1, value2);

if (ans == answer) {
    console.log("Congratulations, you've got your correct answer!");
    console.log(`Your answer is a ${typeof finAns} and it is ${finAns}`);
} else {
    console.log("Sorry! you've got the wrong answer");
    console.log(`Your answer is a ${typeof finAns} and it is ${finAns}`);
}
