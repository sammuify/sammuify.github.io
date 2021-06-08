function isPrime() {
    var prime = Number(document.getElementById("var_prime").value);

    var answer = prime + "  is a Prime COOL :)";

    if (prime <= 1) {
        answer = "Prime numbers are whole numbers greater than 1, that have only two factors - 1 and the number itself. <br/>" + prime + " is not a Prime";
    } else {
        for (var i = 2; i < prime; i++) {
            if (prime % i == 0) {
                answer = prime + " is not a Prime";
                break;
            }
        }
    }
    document.getElementById("sol").innerHTML = answer;
}