// Refresher
let userMessage = "hello";
const toxic = "toxic";

console.log(userMessage);

function blabla(){
    console.log('bla bla');
}

blabla();


const blabla2 = () => {
    console.log('blabla2');
}


const testing = (param1, param2) => {
    console.log(param1, param2);
}

testing('mata', 'mortii matii');


const mata  = {
    test: 'testing',

}

console.log(mata.test);


class User {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

   greet(){

   } 
}


const user1 = new User("Manuel", 35);

// Refresher Array Methods 
const hoobies = ['mata', 'tactu'];

hoobies.push('test');

const index = hoobies.findIndex((item) => {
    return item === 'mata';
});

hoobies.map((item) => {
    item + "!";
});


const [firstName, lastName] = ["Alex", "Oltean"];



const {mata: mata2, tactu}  = {
    mata: 'cheala',
    tactu: 'suge'
}


// Refresher Spreaad Operator

const hobiuri = ['Vanatoare', 'Gatit'];
const hobiuri2 = ['Citit', 'Filme'];
const hobiuriMerged = [...hobiuri,hobiuri2];



const extendedUser = {
    isAdmin: true,
    ...user1
}