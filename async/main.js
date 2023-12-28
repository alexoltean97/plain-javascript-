// Asynchronous Js
// Callback
// Promises
// Async / Await

// synchronous example

// console.log("I ")

// console.log(" eat")

// setTimeout(() =>{
//     console.log(" ice cream") // async
// }, 1000)

// console.log(" with a")

// console.log(" spoon ")

/// Callbacks

// function one(call_two) {
//     console.log("Step 1 complete. Please call step 2");
//     call_two()
// }

// function two() {
//     console.log("Step 2")
// }

// one(two);

/// Callbacks Part 2

// let order = (call_production) => {
//     console.log("order placed, please call production")
//     call_production()
// }

// let production = () => {
//     console.log("order received, starting production")
// }

// order(production)

// Callbacks Part 3

// Callback hell concept

// let stocks = {
//   Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],

//   liquid: ["Water", "Ice"],
//   holder: ["Cone", "Cup", "stick"],
//   toppings: ["Chocolate", "Peanuts"],
// };

// let order = (Fruit_name, call_production) => {
//   setTimeout(() => {
//     console.log(`${stocks.Fruits[Fruit_name]} was selected`);
//     call_production();
//   }, 2000);

//   //  call_production()
// };

// let production = () => {
//   setTimeout(() => {
//     console.log("Production has started");

//     setTimeout(() => {
//       console.log("The fruit has been chopped");

//       setTimeout(() => {
//         console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

//         setTimeout(() => {
//           console.log("the machine has been started");

//           setTimeout(() => {
//             console.log(`${stocks.holder[0]} was selected`);

//             setTimeout(() => {
//               console.log(`${stocks.toppings[0]} was added`);

//               setTimeout(() => {
//                 console.log("serve ice cream");
//               }, 2000);
//             }, 3000);
//           }, 2000);
//         }, 1000);
//       }, 1000);
//     }, 2000);
//   }, 0);
// };

// order(0, production);

// Promises
// let stocks = {
//   Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],

//   liquid: ["Water", "Ice"],
//   holder: ["Cone", "Cup", "stick"],
//   toppings: ["Chocolate", "Peanuts"],
// };

// let is_shop_open = false;

// let order = (time, work) => {
//     return new Promise( (resolve, reject) => {

//         if(is_shop_open){

//             setTimeout(() => {
//                 resolve( work())
//             }, time)

//         } else {
//             reject(console.log("our shop is closed"))
//         }
//     } )
// }

// order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// .then(()=>{
//     return order(0, ()=>console.log("Production has started"))
// })

// .then(()=>{
//     return order(2000, ()=>console.log("The fruit was chopped"))
// })

// .then(()=>{
//     return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
// })

// .then(() =>{
//     return order(1000, ()=>console.log("Start the machine"))
// })

// .then(() => {
//     return order(2000, () => {
//         console.log(`ice cream laced on ${stocks.holder[0]}`)
//     })
// })

// .then(() => {
//     return order (3000, () => {
//         console.log(`${stocks.toppings[0]} was selected`)
//     })
// })

// .then(() => {
//     return order(2000, ()=>console.log('ice cream was served'))
// })

// .catch(()=>{
//     console.log("Customer left")
// })

// .finally(()=>{
//     console.log("day ended, shop is closed")
// })

// Async await try catch

// let stocks = {
//     Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],

//     liquid: ["Water", "Ice"],
//     holder: ["Cone", "Cup", "stick"],
//     toppings: ["Chocolate", "Peanuts"],
//   };

//   let is_shop_open = false;

//   const order = async () => {
//     try {
//         await abc
//     }

//     catch(error){

//     }

//     finally{
//         console.log("Runs code anyways")
//     }
//   }

//   order().then(() => {
//     console.log("Handler")
//   })

// Async await try catch part 2

let stocks = {
  Fruits: ["Strawberry", "Grapes", "Banana", "Apple"],

  liquid: ["Water", "Ice"],
  holder: ["Cone", "Cup", "stick"],
  toppings: ["Chocolate", "Peanuts"],
};

let is_shop_open = false;

// let toppings_choice = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(console.log("Which topping do you like?"));
//     }, 3000);
//   });
// };

// const kitchen = async () => {
//   console.log(" A ");
//   console.log(" B ");
//   console.log(" C ");

//   await toppings_choice();

//   console.log(" D ");
//   console.log(" E ");
// };

// kitchen();

// console.log("Cleaning the dishes");
// console.log("Cleaning the tables");
// console.log("Taking others orders");

const time = (ms) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log("shop is closed"));
    }
  });
};

const kitchen = async () => {
  try {
    await time(2000);
    console.log(`${stocks.Fruits[0]}`);

    await time(0);
    console.log("Start the production");

    await time(2000);
    console.log("Cut the fruit");

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`);

    await time(1000);
    console.log("Start the machine");
    await time(2000);
    console.log(`ice cream placed on ${stocks.holder[0]}`);
    await time(3000);
    console.log(`${stocks.toppings[0]} was selected`);

    await time(2000);
    console.log("Serve ice cream");
  } catch (error) {
    console.log("customer left", error);
  } finally {
    console.log("Day eneded, shop is closed");
  }
};

kitchen();
