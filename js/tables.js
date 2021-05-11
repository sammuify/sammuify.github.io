
var a = 20 ;

function printTableUpto20(a) {
    document.getElementById("tables").innerHTML('TABLE OF %d', a);
    for (var i=1; i<= 10; i++) {
        console.log("%d X %d = %d", i, a, i*a);
    }
    // console.log();
    // console.log();
}

for (var i=1; i<=a; i++) {
    printTableUpto20(i);
}
console.log('LOL');