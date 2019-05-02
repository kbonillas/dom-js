// && and
// || or
// ! not

// 2 variables x & y that store numbers & assign some values
// check if x is greater than 18 & y is greater than 21
// then display "Horray!"
// else if x is greater than 14 & less than 18
    // then check if y is greater than 18 & less than 21, display "There is time!"
    // else display "You're late!"

// var x = 19;
// var y = 23;

// if (x > 18 && y > 21)


// 2. create `age` (of type number), `accompaniedByAdult` (of type boolean) variables
// 3. set values to these variables
// 4. check if age is between 18-21 and if true:
//     a. check if `accompaniedByAdult`, then: display "Allowed!"
//     b. else display "Denied!"
// 5. check if age is 21 or more, then display "You are free!"
// 6. if neither of the above are true, then display "Try again next year!"

var age = 17;
// var accompaniedByAdult = true;
var accompaniedByAdult = false;

if ((age >= 18) && (age < 21) && (accompaniedByAdult = 1)) {
    console.log('Allowed!');
} else {
    console.log('Denied!');
} 

if ((age < 18) && (accompaniedByAdult = 0)) {
    console.log('Try again next year!');
}


// if (age > 21) {
//     console.log('You are free!');
// } else {
//     console.log('Try again next year!');
// }