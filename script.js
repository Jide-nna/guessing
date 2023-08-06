// to get random number from 1 to 100
let randomNum = Math.floor(Math.random() * 100)  + 1

const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")

let guessCount = 0
count = guessCount + 1
function checkGuess() {
    let playerGuess = Number(guessField.value)
    if( count == 1) {
        guesses.textContent = "Previous guess is "
    }
    
    guesses.textContent += playerGuess + "" 
    if (playerGuess === randomNum) {
        lastResult.textContent = "Congratulations, You guessed right"
        lastResult.style.color = "Green"
        guessField.style.borderColor = "Green"
        lowOrHi.textContent = ""
        setGameOver()
    }
    else if(playerGuess > 100) {
        lastResult.textContent = "Your number is more than 100"
        lastResult.style.color = "Red"
        guesses.textContent = ""
        lowOrHi.textContent = ""
    }
    else if(count > 10) {
        lastResult.textContent = "Game Over"
        setGameOver()
    }
    else {
        lastResult.textContent = "Oops, that was wrong. Try again"
        lastResult.style.color = "Red"
        guessField.style.borderColor = "Red"
        lowOrHi.textContent = ""
        if(playerGuess > randomNum) {
            lowOrHi.textContent = "Your guess is greater than the guess number. "
        }
        else if( playerGuess < randomNum) {
            lowOrHi.textContent = "Your guess is lower than the guess number. "
        }
        else {
            lowOrHi.textContent= "You guessed right."
        }
    }
    
    //guessField.value = ""
    // guessField.focus()
}

guessSubmit.addEventListener('click', checkGuess)

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new Game"
    document.body.appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)

}

function resetButton() {
    let guessCount = 1
    const resetParas = document.querySelectorAll(".resultsParas p")
    for(i= 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ""
    }
    document.body.removeChild(resetButton)
    guessField.disabled = false
    guessSubmit.disabled = false
}