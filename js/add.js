function add() {
    var a = Number(document.getElementById("var_a").value);
    var b = Number(document.getElementById("var_b").value);
    var ans = a+b;
    document.getElementById("result").innerHTML = ans;
}