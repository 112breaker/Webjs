// let num = 9

// for ( let i = 0; i <= num; i++) {
// console.log(i);

// }


// let total = 0

// console.log(total);

// for ( let i = 0; i <= 3; i++) {
//      total = total + 1;
// }


// 1st ------> total = 1, 1 = 1
// 2st ------> total = 2, 1 = 2
// 3st ------> total = 3, 1 = 3
// 4st ------> total = 4, 1 = 4

// console.log(total);

// 1. declare a variable and assign it a value of 5
// 2. write a for loop with the condition i < 9
// 3. inside the for loop add 5 to the initial variable declared
// 4. log the initial variable after the for loop is done

// let value = 5;

// for (let i = 0; i < 9; i++) {
//     value = value + 5;
// }

// console.log(value);



//==================OBJECTS==============//

let wed = {
    // name: "mohammed",
    // age: 45,
    profession: "developer",
    country: "Nigeria",
    grades:{
        Maths:"A",
        chemistry: "B",
        agric: "A",
        school:{
            primary: {
                first:"The naowa college",
                second:"missionary squad",
            }

        }
    }   
};


let statement2 = ` I am a  ${wed.profession}, the name of my ${wed.country},
 i got maths ${wed.grades.Maths} i got chemistry ${wed.grades.chemistry} and also agric ${wed.grades.agric}
 the name of my school IS ${wed.grades.school.first}` ;
 
console.log(wed);
// console.log(wed.name);
console.log(statement2);

// template strings
const title = 'Best reads of 2019';
const author = 'mario';
const likes = 30;


let result = `the blog called ${title} by {author} has ${likes} likes`;
console.log(result);



// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// console.log(age !=  30);
// console.log(age > 20);
// console.log(age < 25);
// console.log(age <= 25);
// console.log(age >= 25);

//  type coversation
// let score = '100';

//   


// let name = 'shawn';

// console.log( name == 'shawn');
// console.log(name == 'Shawn')
// console.log(name > 'crystal');
// console.log(name == 'Crystal');









//  SWITCH STATEMENT
// const num1 = "A";

// switch(num1) {
//     case "A":
//     console.log("very good");
//     break;
//     case "B":
//     console.log("the fruit is an orange");
//     break;
//     default:
//         console.log("all other conditions fails so the fruit must be a banana");
// }


//const ok = prompt("enter user")
//console.log(ok);

// const question = prompt("Enter your score");
   
//   let score = 74;
//   let score2 = 60 ;
//   let score3  

// console.log(question)


// /***
// * Grading scores of a course
  // * A is 75 to 100
// * B is 60 to 74
// * C is 50 to 69
// * D is 40 to 49
// * F is below 40
// * any thing else "invaild score"
// */


// grading statement

const question = prompt ("enter your score") ;

if ( question < 40 ) {
  alert("your grade is F") ;
} else if (question >= 40 && question <= 49) {
  alert("your grade is D");
}else if (question >= 50 && question <= 69) {
  alert("your grade is c");
}else if (question >= 60 && question <= 74) {
  alert("your grade is B");
}else if (question >= 75 && question <= 100) {
  alert("your grade is A");
}else{
  alert("invaild input");
}
