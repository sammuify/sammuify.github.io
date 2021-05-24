
window.addEventListener("load", () => {
    var canvas = document.getElementById('canvas');
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", finishPosition);
    canvas.addEventListener("mousemove", draw);

    canvas.height = window.innerHeight - 100;
    canvas.width = window.innerWidth - 100;
    
    var ctx = canvas.getContext("2d");
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.strokeStyle = "red";

    var painting = false;

    function startPosition(e) {
        painting = true;
        draw(e);
    }

    function finishPosition(e) {
        painting = false;
        ctx.beginPath();
    }

    function draw(e) {
        if (!painting) return;
  

        ctx.lineTo(e.pageX, e.pageY);
        ctx.stroke();

        // ctx.beginPath();
        // ctx.moveTo(e.pageX, e.pageY);
    }

});