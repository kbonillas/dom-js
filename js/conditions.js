// if condition
// var hour = 1;
var hour = prompt('What hour is it now?');
// if (hour > 18) {
//     console.log('class has started');
// }
// if (hour < 21) {
//     // continue class
//     console.log('continue class');
// }
if (hour > 18 && hour < 21) {
    console.log('class hours');
} else if (hour > 0 && hour < 7) {
    console.log('sleep time');
} else {
    console.log('non-class hours');
}


var minute = prompt('How many minutes past the hour is it now?')
// switch condition
switch (minute) {
    case 00:
        console.log('hour has just begun');
        break;
    case 30:
        console.log('it is halfway through the current hour');
        break;
    default:
        console.log('waiting for next hour');
        break;
}

var color = 'red';
switch (color) {
    case 'blue':
        console.log('blue');
        break;
    case 'yellow':
        console.log('yellow');
        break;
    default:
        console.log('color not found');
        break;
}