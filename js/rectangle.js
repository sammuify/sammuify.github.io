function caliculate_area(){
    var length_var = Number (document.getElementById("length_var").value);
    var breadth_var = Number (document.getElementById("breadth_var").value);
    var ans = length_var * breadth_var;
    document.getElementById("Ans_Area").innerHTML = ans;
}
function caliculate_perimeter(){
    var length_var = Number (document.getElementById("length_var").value);
    var breadth_var = Number (document.getElementById("breadth_var").value);
    var ans = length_var + length_var + breadth_var + breadth_var;
    document.getElementById("Ans_Perimetre").innerHTML = ans;
}