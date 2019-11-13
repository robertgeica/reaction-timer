let timer = new Date().getTime();

// get random color for shapes
function randomColor() {
    let letters = '0123456789ABCDEF'.split('');
    let color = "#";

    for(let i=0; i<6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

// make shapes appear
let shape = document.getElementById("shape");
function makeShapes() {
    let top = Math.random() * 300;
    let left = Math.random() * 300;
    let width = (Math.random() * 200) + 100;

    let above50 = Math.floor(Math.random() * 100) + 1;
    let below50 = Math.floor(Math.random() * 50) + 1;
    
    console.log(above50);
    console.log(below50);

    (Math.random() > 0.5) ? (shape.style.borderRadius = above50 + "%") : (shape.style.borderRadius = below50 + "%");

    shape.style.backgroundColor = randomColor();
    shape.style.width = width + "px";
    shape.style.height = width + "px";
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.display = "block";

    timer = new Date().getTime();
}

// make shape reappear
function reloadShape() {
     setTimeout(makeShapes, Math.random() * 2000);
}

reloadShape();

shape.onclick = () => {
    shape.style.display = "none";

    let stopTimer = new Date().getTime();
    let timeTaken = (stopTimer - timer) / 1000; // in seconds

    document.getElementById("timeTaken").innerHTML = timeTaken + " seconds";

    reloadShape();
}
