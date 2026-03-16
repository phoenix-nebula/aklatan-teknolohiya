console.log("Lets make a 1 sided Triangle")

let userInput = prompt("What is the length of your triangle? (Numbers only)")

const makeTriangle = (x) => {
    let index = '.'
    let count = 0

    for(let i = 0;i <= x; i++ ) {
        console.log(index)
        index += index[i]
        count++
    }

    let newString

    for(let i = 0; i <= x; i++ ) {
        newString = index.length - i;
        console.log(newString)
    }

}

makeTriangle(userInput);
