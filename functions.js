
// function declaration
// function greet() {
//     console.log('hello there');
// }

// // function expression
// const speak = function(){
// console.log('good day')
// };

// greet();
// greet();
// greet();

// speak();
// speak();
// speak();


// arguments & parameters

// const speak = function(name = 'luigi',  time = 'night'){
//     console.log(`good ${time} ${name}`);
//     };


//     speak();
//     speak('shawn', 'day');

// returning value

// const speak = function(name = 'luigi',  time = 'night'){
//         console.log(`good ${time} ${name}`);
//        };

// const calArea = function(radius){
//     return 3.14 * radius**2;


//  }
//  const area = calArea(5);
//  console.log(area);

// regular function
// const calArea = function(radius){
//     return 3.24 * radius**2
// }

// arrow fuunction
// const calArea =  (radius ) => {
//     return 3.14 * radius**2;
// };


// const area = calArea(5);
//   console.log('area is:', area);

// button
const button = document.getElementById("marco");
const divs = document. getElementById("polo");

// button.addEventlistener("click", addPrompt);

console.log(button);
console.log(divs)


button.addEventListener("click", addPrompt);
//  functions declaration

const numArray = [0 , 1, 5, 7, 9,  3, 8];
//  let me = "mark";

function loopArray() {
    numArray.forEach((num) => {
        console.log(num);
    });

    
}
// console.log(me)


// call a function
// loopArray()


// function expression

const greeting = (name, age, profession) => {
    console.log(   `Hi am  ${name}, i am ${age} years old, i am a ${profession}`)
}
 
greeting( 'wealth', '45', 'developer');
// greeting();

// create 2 functions called 'addnumber', "multiplynumbers"
// "addnumber" should take 2 parameters inside the functions block add both numbers and 
// log the value

// "multiplynumbers" shpould take 4 parameters inside the functions block multiply all numbers
// log the value


const addNumber = (name, age,) => {
    const result = name + age;

    
    console.log(result)

    return result
}

addNumber( 100, 40);


const multiplynumbers = (name, age,  num1, num4) => {
    const result = name * age * num1 * num4;

    
    console.log(result)
}

multiplynumbers(56, 30, 40, 100);



// bring out prompt

// function addAlert ( my_name) {

// }

// bring out prompt
function addPrompt () {
    const username = prompt("What is your name");

           divs.innerHTML =  `my name is ${username}`


           //  null, undefinedm, 0 , ...
const defaultName= !username ? "puri puri prisoner" : username;

divs.innerHTML =  `my name is ${defaultName}`;

}


// return result

const calculatePercentage = (number) => {
    const result = number / 100;

    return result
};

const user1percent = calculatePercentage(70);
const user2percent = calculatePercentage(90);
const user3percent = calculatePercentage(20);

const culmulative = user1percent +  user2percent + user3percent;
console.log(culmulative);


setTimeout(() => {
    console.log("first to log");
}, 5000);

    console.log("second to log");

setTimeout(() => {
    console.log("third to log");
}, 3000);

setTimeout(() => {
    console.log("fourth to log");
}, 1000);

    console.log("fifth to log");


