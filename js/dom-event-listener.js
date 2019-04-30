var btn = document.getElementsByClassName('button');
var btnUsingSelector = document.querySelector('.button');
btn[0].style.padding = '10px';
btn[0].style.fontSize = '15px';

// add event listener
btnUsingSelector.addEventListener('click', function () {
    console.log('Button was pushed from JS!');
})

btnUsingSelector.addEventListener('mouseover', function (event) {
    console.log(event);
    // console.log(typeof event.target);

    var btnText = event.target.innerHTML;
    alert('Mouse over on the ' + btnText + ' button');
})




var btnCancel = document.querySelector('.button-cancel');
btnCancel.addEventListener('click', function () {
    var response = confirm('Are you sure you want to cancel?');
    console.log(response);

    // if user confirms, do something - response is true
    // if user cancels, do something else - response is false
})

// document.addEventListener('keypress', function (event) {
//     console.log(event.key);
//     console.log(event.keyCode);
// })

// document.addEventListener('keydown', function (event) {
//     console.log(event.key);
//     console.log(event.keyCode);
// })

// document.addEventListener('keyup', function (event) {
//     console.log(event.key);
//     console.log(event.keyCode);
// })

document.addEventListener('scroll', function (cursor) {
    console.log(cursor);
    console.log(cursor.target.scrollingElement.scrollTop);
})