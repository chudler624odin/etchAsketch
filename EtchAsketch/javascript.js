let size = 16;
let color = "black"   

document.addEventListener("DOMContentLoaded", function(){
    createBoard(16);
    console.log("hi")  
        
})

function createBoard(size){
    let screen = document.querySelector(".screen");
    screen.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    screen.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numDivs = size * size;

    for(let i = 0; i <numDivs; i++){
        let square = document.createElement("square");
        square.addEventListener("mouseover", colorSquare)
        screen.insertAdjacentElement("beforeend", square);
    }

}

/*sizing buttons*/
let sixteen = document.querySelector(".sixteen");
sixteen.addEventListener("click", function(){
    let size = 16;
    createBoard(16);
})

let thirtytwo = document.querySelector(".thirtytwo");
thirtytwo.addEventListener("click", function(){
    let size = 32;
    createBoard(32);
})

let sixtyfour = document.querySelector(".sixtyfour");
sixtyfour.addEventListener("click", function(){
    let size = 64;
    createBoard(64);
})

function colorSquare(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else if (color == "white"){
        this.style.backgroundColor = "white";
    }
    else{
        this.style.backgroundColor = "black";
    }
}

function setColor(colorChoice){
    color = colorChoice;
}

function resetBoard(){
    let squares = document.querySelectorAll("square")
    squares.forEach((square) => square.style.backgroundColor = "white");
}

