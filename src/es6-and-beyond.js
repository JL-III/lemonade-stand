// const lemonade = {
//     lemonJuice: 3,
//     water: 3,
//     sugar: 1.5,
//     iceCubes: 10,

//   calculatePrice() {
//     return (
//         this.lemonJuice * 0.3 + 
//         this.water * 0.01 + 
//         this.sugar * 0.25 + 
//         this.iceCubes * 0.05 + 
//         0.75
//     )
//   },
//   calculatePriceLambda: () => {
//     return (
//         lemonJuice * 0.3 + 
//         water * 0.01 + 
//         sugar * 0.25 + 
//         iceCubes * 0.05 + 
//         0.75
//     )
//   }
// }

// console.log(lemonade.calculatePriceLambda())

// function updateLemonade(lemonade, lemonJuice, water, sugar, iceCubes) {
//     return {
//         ...lemonade,
//         lemonJuice,
//         water,
//         sugar,
//         iceCubes
//     }
// }

// function copyLemonade(lemonade) {
//     let newLemonade = {}
//     for (let key in lemonade) {
//         newLemonade = {
//             ...newLemonade,
//             [key]: lemonade[key]
//         }
//     }
//     return newLemonade
// }

// console.log(copyLemonade(updateLemonade(lemonade, 5, 2.5 , 3, 7)))

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, [1, 2, 3]]

// //creates shallow copy
// const numbersCopy = [...numbers]
// //deep copy object
// numbersCopy[10] = [...numbers[10]]

// numbersCopy[10][0] = 5

// console.log(numbers)
// console.log(numbersCopy)

// let { water, lemonJuice, sugar, iceCubes } = lemonade

// console.log(water, lemonJuice, sugar, iceCubes)

// function add(x, y) {
//     return x + y
// }


// const incremenet = x => x + 1

// console.log(add(4,6))
console.log((x => x + 1)(5))