function generate_table() {
    var num = Number(document.getElementById("var_num").value);
    var res_div = document.getElementById("result");
    res_div.innerHTML = "";
    
    var multiplier = 1;
    while (multiplier <= 20) {
        var result = num * multiplier;
        res_div.innerHTML += num + " X " + multiplier + " = " + result;
        res_div.innerHTML += "<br/>";
        multiplier = multiplier + 1;
    }

}