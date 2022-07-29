// CallBack
function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, callback) {
    return callback(num1, num2)
};

console.log(calc(2, 2, sum));

// setTimeOut
setTimeout(function () {
    console.log('HOLA JAVASCRIPT');
}, 2000)

function greeting(name) {
    console.log(`Hola ${name}`);
};

setTimeout(greeting, 2000, 'Fernando');