// Caution: This script has functional errors

const toyotaCarDealer = [
    {name: "Vios", price: 738_000, type: "Sedan"},
    {name: "Corolla Altis", price: 1_213_000, type: "Sedan"},
    {name: "Camry", price: 2_380_000, type: "Sedan"},
    {name: "Crown", price: 2_384_160, type: "Sedan"},
    {name: "Raize", price: 757_000, type: "SUV"},
    {name: "Yaris Cross", price: 1_514_000, type: "SUV"},
    {name: "Corolla Cross", price: 1_514_000, type: "SUV"},
    {name: "Rav4", price: 2_183_000, type: "SUV"},
    {name: "Fortuner", price: 1_775_000, type: "SUV"}
]

let userInput = prompt("Select a car: 0 - 8")

function selectCar(x) {
    const minLimit = 0
    const maxLimit = 8

    switch(x) {
        case x > maxLimit:
            console.log("No car selected.")
        case x < minLimit:
            console.log("No car selected.")
        default:
            let y = `The Toyota ${toyotaCarDealer[x].name} is selected, it is a type of ${toyotaCarDealer[x].type}. With a price of ${toyotaCarDealer[x].price}`;
            let carType = toyotaCarDealer[x].type
            let carPrice = toyotaCarDealer[x].price
            return [carType, carPrice, y]
    }
}

let userSelect = selectCar(userInput)[0]
let userSelecty = selectCar(userInput)[2]
console.log(userSelecty)

let userSelectPrice = selectCar(userInput)[1]

let userCashInput = prompt(`How much are you going to pay for the ${userSelect}? It cost ${userSelectPrice}`)

function cashFlow(selectPrice, cashInput) {
    if (selectPrice == cashInput) {
        console.log("Congratulations, You have purchased a car")
    } else if (selectPrice < cashInput ) {
        let ans = cashInput - selectPrice
        console.log(`Congratulations! You have purchased a car with a change of ${ans}`)
        return ans
    } else {
        console.log("Sorry, This isn't enough to purchase the selected car1")
    }
}

cashFlow(userSelectPrice, userCashInput)
