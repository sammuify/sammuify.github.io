
var a =2 ;
var b =3;
var c =4;

function add(a,b) {
    return a + b;
}

console.log(add(a,b));
console.log(add(c,b));

function toCelsius(fahrenheit) {
    return (5/9) * (fahrenheit-32);
}

console.log(toCelsius(65));

function toCentiMeter(meter) {
    return meter*100
}

console.log(toCentiMeter(5));