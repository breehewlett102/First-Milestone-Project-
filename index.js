let currentChr = "X";
let XPoint = [];
let OPoint = [];

class XOSquare {
    constructor(x, y, buttonId) {
        this.x = x;
        this.y = y;
        this.button = document.getElementById(buttonId);
        this.button.onclick = () => {
            this.set(buttonId)
        }
    }
    set(buttonId) {
        this.button = document.getElementById(buttonId);
        if (this.button.innerText === "") {
            this.button.innerText = currentChr;
            if (currentChr === "X"){
                XPoint.push(this);
            } else {
                OPoint.push(this);
            }
            switchChr();
            checkWin();
        }
    }
    reset() {
        this.button.innerText = "";
    }
}
class winningPossibility {
    constructor(x1, y1, x2, y2, x3, y3){
        this.x1 = x1;
        this.y1 = y1; 
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
    }
}
function checkWinningPossibility(winningPossibility, forChr) {
    let 
}
function switchChr() {
    if (currentChr === "X") {
        currentChr = "O";
        statusLabel.innerText = "O's turn";
    } else {
        currentChr = "X";
        statusLabel.innerText = "X's turn";
    }
}
function setup() {
    let squares = [];
    let squareElements = document.getElementsByClassName("square");
    for (let i = 0; i < squareElements.length; i++) {
        let square = new XOSquare(i % 3, Math.floor(i / 3), squareElements[i].id);
        squares.push(square);
    }
}
window.onload = setup;