//const ok = prompt("enter user")
//console.log(ok);

// const question = prompt("Enter your score");
   

// console.log(question)


// // /***
// // * Grading scores of a course
//   let score =   75 !< 100;
// let one = "A" ;

// console.log(score)


// =====================ARRAYS======================== //


// const arr = [ 
//   1,"hello",  null, 3, "world",
// ];

// console.log(arr);
// // console.log(arr [0]);
// // console.log(arr[4])
// console.log(arr .length)
// // console.log(arr [40])


// //  array methods push ,  pop, shift, unshift

// arr.push("wealth");


// console.log(arr);

//  arr.push(45);

// console.log(arr);

// // unshift

// arr.unshift("black");

// console.log(arr);

// arr.unshift(45);

// console.log(arr);

// console.log(arr .length)


// // shift

// arr.shift();
// console.log()
// console.log(arr)


// // pop

// arr.pop()
// console.log()
// console.log(arr)






// {
//   name: "mohammed",
//   age: 45,
//   profession: "developer",
//   country: "Nigeria", 
// }


// create array
// access arrays by index and get array length
// array methods... push , pull , shift , unshift
// loop over arrays using for each other


// loop over arrays using for each loop


let moh = {
  name: "mohammed",
  age: 45,
  profession: "developer",
  country: "Nigeria", 
}

let david = {
  name: "codebreaker",
  age: 65,
  profession: "developer",
  country: "Nigeria", 
}

let sadiq = {
  name: "jack",
  age: 00,
  profession: "developer",
  country: "Nigeria", 
}

let wealth = {
  name: "praise",
  age: 565,
  profession: "developer",
  country: "Nigeria", 
}



let students = [moh , wealth, david, sadiq];

students.forEach((students) =>  {
  console.log(`my name is ${students.name}`);
});

 
// given the following array of integers
const numArray = [0 , 1, 5, 7, 9,  3, 8];
// loop through the array and display e.g "0 is even numbers and " i is odd"
// find the odd number

// hints: modulus...e.g  const isEven = 9,2

// const isEven = number % 2 ;
// console.log(isEven);


 numArray.forEach((number) =>{ 
 const isEven = number % 2 ;
 if (isEven === 0) {
   console.log(`${number} is an even number`);
 }else {
   console.log(`${number} is an odd number`);
 }
});



