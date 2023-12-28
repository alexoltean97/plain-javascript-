// Functions

// function greet (userName, message = "Hello World") {
//     // console.log("Hello!");
//     return `Hi I am ${userName} si o fut pe ${message};`
// }

// console.log(greet("Alex", "mata"));

// const mata = (parametrul1, parametrul2) => {

// }

// Objects

// const user = {
//     name: 'Max',
//     age: 34,
//     greet() {
//         console.log(this.name)
//     }
// };

// class User {

//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     greet() {
//         console.log('hi');
//     }
// }

// const user1 = new User('Alex', 26);

// console.log(user1)

// const hobbies = ["Hiking", "Bjj", "UtaArad"];

// const content = [
//   ["React", "Vue", "Angular"],

//   ["Php", "Java"],
// ];

// console.log(content[0][1]); // Logs first array and vue
// console.log(content[1][1]); // Logs second array and Java

// const content2 = [
//   ["React", "Vue", "Angular"],

//   ["Php", "Java"],

//   ["Api", "Ts"],

//   ["Aws", "Go daddy"],
// ];

// const contentComplicatedAf = [
//   ["React", "Vue", "Angular", ["Another One", "Another One2"]],

//   ["Php", "Java"],

//   ["Api", "Ts"],

//   ["Aws", "Go daddy"],
// ];

// console.log(contentComplicatedAf[0][3][0])

// console.log(content2[2][1]); // Logs third array and Ts

// hobbies.push("Working");
// console.log(hobbies);
// hobbies.pop();
// console.log(hobbies);

// const index = hobbies.findIndex((item) => {
//   return item === "Hiking";
// });

// const index = hobbies.findIndex((item) => item === "Hiking");

// const editedHobbies = hobbies.map((item) => item + "!");

// const editedHobbies2 = hobbies.map((item) => ({text:item}));
// console.log(editedHobbies2)

// console.log(editedHobbies);

// console.log(index);

// Destructuring

// const [firstName, lastName] = ["Alex", "Oltean"];

// console.log(firstName);
// console.log(lastName);


// const user = {
//     name: "Max",
//     age: 34
// }

// const name = user.name;
// const age = user.age;


// const {name, age} = {
//     name: 'Alex',
//     age: 26
// }

// With allias
// const {name: userName, age} = {
//     name: 'Alex',
//     age: 26
// }

// Spread Operator 

// const hobbies = ["Sports", "Cooking"];

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, newHobbies];

// const user = {
//     name: "Max",
//     age: 34
// }

// const extendedUser = {
//     isAdmin: true,
//     ...user
// }

// const hobbies = ["Sports", "Cooking"];

// for (const hobby of hobbies){
//     console.log(hobby);
// }

// Functions to functions 

// function handleTimeout(){
//     console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//     console.log("Timed out... again");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 4000);

// function greeter(greetFn) {
//     greetFn();
// }

// greeter(() => console.log("Hi"));

// function init() {
//     function greet(){
//         console.log('hi')
//     }

//     greet()
// }

// greet();

// init