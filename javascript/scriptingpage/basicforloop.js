let startQuiz = prompt(`We will be having a quiz about the topic "Self-Determination". Enter "start" to continue`)

if (startQuiz == "start") {
    alert(`Self-Determination Theory suggests that humans have three innate psychological needs: autonomy, competence, and relatedness. Autonomy refers to the feeling of being the origin of one’s own behavior. When individuals act out of external pressure or to avoid debt-like social obligations, their sense of autonomy decreases. Interestingly, while financial rewards can motivate behavior, they often undermine intrinsic motivation if they are perceived as a form of control.`)
    console.log(`Self-Determination Theory suggests that humans have three innate psychological needs: autonomy, competence, and relatedness. Autonomy refers to the feeling of being the origin of one’s own behavior. When individuals act out of external pressure or to avoid debt-like social obligations, their sense of autonomy decreases. Interestingly, while financial rewards can motivate behavior, they often undermine intrinsic motivation if they are perceived as a form of control.`)
} else {
    throw ("You've exited the quiz")
}

alert("Options for this quiz are: true, false, not given")

// starting concept for calculating answers
const optionsArray = ["true", "false", "not given"]

const questionsArray = [
    {number: 1, question: "A person feels more autonomous when they are performing a task specifically to pay back a favor to a neighbor", options: optionsArray, correctAnswer: "false"},
    {number: 2, question: "According to the theory, humans are born with the need to feel effective and capable in their environment.", options: optionsArray, correctAnswer: "true"},
    {number: 3, question: "High-paying jobs are the most effective way to ensure long-term career satisfaction.", options: optionsArray, correctAnswer: "not given"},
    {number: 4, question: "If a person chooses an action because they truly want to do it, their autonomy is likely high.", options: optionsArray, correctAnswer: "true"},
    {number: 5, question: "A person who feels they are bad at their job will have a lower self-determination level overall.", options: optionsArray, correctAnswer: "true"},
    {number: 6, question: "Money always causes a person to lose interest in their hobbies.", options: optionsArray, correctAnswer: "false"},
    {number: 7, question: "Relatedness is defined as the ability to work alone without needing a team.", options: optionsArray, correctAnswer: "not given"},
]

let answer = '';
let correctAns = 0;
let questionNum = 0;

for (let i = 0; i < questionsArray.length; i++) {
    answer = prompt(questionsArray[i]?.question)

    switch (optionsArray.includes(answer)) {
        case true:
        break;
        case false:
            alert("Wrong Option selected")
        break;
    }

    if (answer == questionsArray[i]?.correctAnswer) {
        console.log("Correct")
        correctAns++
        questionNum++
    } else {
        console.log("Wrong")
        questionNum++
    }
}

function calcScore (x, y) {
    let ans = (x / y) * 100
    return ans
}

alert(`Congratulations! You have ${correctAns} out of ${questionNum}, with a grade of ${calcScore(correctAns, questionNum)}!`)
console.log(`Congratulations! You have ${correctAns} out of ${questionNum}, with a grade of ${calcScore(correctAns, questionNum)}!`)


/* ========================== Use later

// Concept: for loop revolves around ALL questions and switch case identifies correct or wrong answers

let x = "true"

const optionsArray = ["true", "false", "not given"]

for (let i = optionsArray.length; i <= 6; i++) {
    switch (x) {
        case "true":
            console.log("You are correct")
        break;
        case "false":
            console.log("You are wrong")
        break;
        case "not given":
            console.log("It is not given")
        break;
    }
}
================ */ // Use later

cashFlow(userSelectPrice, userCashInput)
