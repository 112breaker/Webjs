//variables,primitive types
//var , let, const....string, number, boolean, null, date, undefined



var myname ="wealthy";
let age = 27;
const isfootballer = true;
const profession = "footballer"



//const statement1 = "my name is " + myname + " i am " + "years old. " + "I am a " + profession
const statement2 = `my name is ${myname} and i am ${age} years old. I am a ${profession}`

// console.log(statement1)
// console.log(statement2)

// +, -, /, *, %, ==, ===,!=, !==, &&,!!, !

//  declare two varables
// onst work= 23;
// const pl = 65;
// const cmj= pl + work;

// console.log(mj);


//console.log(pl)

// =, ==, ===
// const num1 = 5;
// const str1 = "5";
// const eq1 = num1 == str1;
// const eq2 = num1 === str1;

// console.log(eq1);
// console.log(eq2)

const num3 = 7;
const num4 = 12;
const num5 = 7;
const str2 = "12";
const str3 = "age";

// const eq3 = num3 !== num4;
// const eq4 = num3 !== num5;

// console.log(eq3);  
// console.log(eq4);       



//  console.log(myname);
//  console.log(age);
//  console.log(isfootballer);
// // console.log(profession);


// let yourname = "wealthy";
// let year = 45;
// const ishockey = false;
// const occupation = "hockey";

// const statement4 =`yourname is ${yourname} and i am ${year} years old. i am a ${occupation}  `

// conditionals
// && ||, !
//const country = "Nigerian";
//const ghana = "ghanian";
// const kenya = "kenyian";

// if (country === "Nigerian") {
//     console.log(`you are a ${country}`);
// } else if(country === "ghanian") {
//     console.log(`you are a ${country}`);
// } else if(country === "kenyian") {
//     console.log(`you are a ${country}`);
// } else  {
//     console.log("i no sabi your country");
// }
// if (num4 == str2) {
// console.log("hahahahhahaha");
// }

// else{
//     console.log("wait for me");
// }

//READ UP ON: Ternary operators,  &&, ||, !,  switch statement, for loop
const drinkingage =  19;
const isoverage = typeof  drinkingage === "number" ? true : false;
const isoverage2 = drinkingage >= 18 ? "you are an adult" : "you are underage";


console.log(isoverage)
console.log(isoverage2)

// &&, !!, !
let name1 = "frank";
let lang1 = "react";
let age1  = 23;


// if (name1 === "frank" && lang1 === "react" && age1 == "23") {
//     console.log(" we might see something in our browser")
//     }

    
if (age1 === 23 ||  name1 === "wealth") {
    console.log("what");
}

//  null, undefined, false, 0, ""
//  !

const zero = 0;
const empty = "";
const valuewall = null;

if (!zero) {
    console.log("let see");
}
if (!empty) {
    console.log("shall we see");
}
if (!valuewall) {
    console.log("can me do it");
}

