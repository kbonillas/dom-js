// var user = {
//     name: 'kristin',
//     hp: 20
// };
// console.log(user);

var users = [];
// users.push(user);
console.log(users);
var userCount = 5;

// while (users.length < userCount) {
//     var user = {};
//     // diy: add validation on these prompts
//     user.name = prompt('Enter user name: ');
//     user.hp = prompt('Enter user HP: ');
//     console.log(user);
//     users.push(user);
// }

for (var i = 0; i < userCount; i++) {
    var user = {};     
    // diy: add validation on these prompts
    user.name = prompt('Enter user name: ');
    user.hp = prompt('Enter user HP: ');
    users.push(user);
}
console.log(users);

// output each user to console
for (var i of users) {
    console.log(i);
}




// var name = prompt('Enter name: ');

// var userInput = [
//     {name},
//     {hp},
//     {userConfirm}
// ];

// var userInputLen = userInput.length;


// if (name && isNaN(name)) {
//     user.name = name;
//     console.log(users);
//     console.log(users[0]);

//     var hp = prompt('Enter your hp: ');


//     if (hp && !isNaN(parseInt(hp))) {
//         user.power = parseInt(hp);
//     } else {
//         alert('Enter Valid hp');
//     }
//     console.log(user);
//     console.log(hp);
// } else {
//     alert('Enter Valid Name');
// }

// var userConfirm = prompt('Is ' + name + ' and HP point level of ' + hp + ' correct?');
// if (userConfirm) {
//     console.log('User Confirmed');
// } else {
//     console.log('User Denied');
// }


// for (var i = 0; i < userInputLen; i++) {
//     users[i] = {}; // empty object to hold properties added below
//     for (var prop in userInput[i]) {
//         users[i][prop] = userInput[i][prop]; // copy properties from arObj to ar2
//     }
// }

// console.log(userInputLen);