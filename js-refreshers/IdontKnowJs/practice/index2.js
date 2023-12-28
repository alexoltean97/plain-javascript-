// call Method

// const person = {
//     fullName: function () {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// const person2 = {
//     firstName: "Marry",
//     lastName: "Doe"
// }

// // This will return "John Doe"

// let mata = person.fullName.call(person2)

// console.log(mata)

// bind method 

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function() {
//         return this.firstName + " " + this.lastName;
//     }
// }

// const member = {
//     firstName: "Hege",
//     lastName: "Nilse"
// }

// let fullName = person.fullName.bind(member);


// const person = {
//     fullName: function() {
//       return this.firstName + " " + this.lastName;
//     }
//   }
  
//   const person1 = {
//     firstName: "Mary",
//     lastName: "Doe"
//   }
  
//   // This will return "Mary Doe":
//   person.fullName.apply(person1);


// function myDisplayer(some) {
//     document.getElementById("demo").innerHTML = some;
//   }
  
//   function myCalculator(num1, num2, myCallback) {
//     let sum = num1 + num2;
//     myCallback(sum);
//   }
  
//   myCalculator(5, 5, myDisplayer);


// Object Create 

// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name} . Am I human? ${this.isHuman}`);
//     }
// }

// const me = Object.create(person);

// me.name = 'Matthew'; //  "name" is a property set on "me", but not on "person"
// me.isHuman = true; // Inherited properties can be overwritten

// me.printIntroduction

// Expected output: My name is Matthew. Am I human? true


// const person = "Mike";
// const age = 28;

// function myTag(strong, personExp, ageExp) {

//     const str0 = strings[0];
//     const str1 = string[1];
//     const str2 = string[2];

//     const ageStr = ageExp > 99 ? "cenetarian" : "youngster";

//     // We can even return a string built using a template literal
//     return `${str0}${personExp}${str1}${ageStr}${str2}`
// }

// const output = myTag`That${person} is a ${age}.`;

// console.log(output);