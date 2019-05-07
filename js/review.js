var user = {}; // empty object
var name = prompt('Enter name: ');
// console.log({name}); // curly brackets around the variable will console what the property is as well as its value
// console.log(typeof(name));
// console.log(!name); // makes it the opposite, checking for false
// console.log(!!name); // makes it the opposite opposite, checking for true
// console.log(isNaN(name));

// if (name === '' || name === ' ' || parseInt(name)) {
//     alert('Enter Valid Name');
// } else {
//     user.name = name;
// }

excludedName = ['poopface', 'idiot'];
var isExcluded = excludedName.find(function (excluded) {
    return excluded === name;
});


if (name && isNaN(name)) {
    user.name = name;
    var hp = prompt('Enter your hp: ');
    // console.log(!!hp);
    // console.log(typeof hp);
    // console.log(parseInt(hp));
    // console.log(isNaN(parseInt(hp)));

    if (hp && !isNaN(parseInt(hp))) {
        user.power = parseInt(hp);
    } else {
        alert('Enter Valid hp');
    }
    console.log(user);
    console.log(hp);
} else {
    alert('Enter Valid Name');
}

var userConfirm = prompt('Is ' + name + ' and HP point level of ' + hp + ' correct?');
if (userConfirm) {
    console.log('User Confirmed');
} else {
    console.log('User Denied');
}
// ternary
// (name === '' || name === ' ' || parseInt(name)) ?
//     alert('Enter Valid Name') :
//     user.name = name;