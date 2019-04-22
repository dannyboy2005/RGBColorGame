let p1Button = document.querySelector("#p1");
let p2Button = document.getElementById("p2");
let p1Display = document.querySelector("#p1Display");
let p2Display = document.querySelector("#p2Display");
let numInput = document.querySelector("input");
let reset = document.querySelector("#reset")
let winningScoreDisplay = document.querySelector("p span");
p1Score = 0;
p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1Button.addEventListener("click", function() {
    if(!gameOver) {
        p1Score++;
        if(p1Score === winningScore) {
            p1Display.classList.add("winner");
            alert("Game over man... GAME OVER!")
            gameOver = true;
        }
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener("click", function() {
    if(!gameOver) {
        p2Score++;
        if(p2Score === winningScore) {
            p2Display.classList.add("winner");
            alert("Game over man... GAME OVER!")
            gameOver = true;
        }
        p2Display.textContent = p2Score;
    }
});

reset.addEventListener("click", function() {
    resetGame();
});

function resetGame() {
    p1Score = 0;
    p1Display.textContent = 0;
    p2Score = 0;
    p2Display.textContent = 0;
    gameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
}

numInput.addEventListener("change", function() {
    winningScoreDisplay.textContent = numInput.value;
    winningScore = Number(numInput.value);
    resetGame();
});