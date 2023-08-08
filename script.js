// to get random number from 1 to 100
let randomNum = Math.floor(Math.random() * 100)  + 1
// select elements from html
const guesses = document.querySelector(".guesses")
const lastResult = document.querySelector(".lastResult")
const lowOrHi = document.querySelector(".lowOrHi")
const guessSubmit = document.querySelector(".guessSubmit")
const guessField = document.querySelector(".guessField")
// create function to evaluate if the player's guess is equal to the computer's guess

let guessCount = 1
let resetButton;

function checkGuess() {
    let playerGuess = Number(guessField.value)
     if( guessCount == 1  || guessCount <= 10) {
        guesses.textContent = "Previous guess is " + playerGuess + " "
    }
     guessCount++
    if (playerGuess === randomNum) {
        lastResult.textContent = "Congratulations, You guessed right"
        lastResult.style.color = "Green"
        guessField.style.borderColor = "Green"
        lowOrHi.textContent = ""
        setGameOver()
    }
    else if (playerGuess == "") {
        lastResult.textContent = "Your guess is empty"
        lastResult.style.color = "Red"
        guesses.textContent = ""
        lowOrHi.textContent = ""
    }
    else if(playerGuess > 100) {
        lastResult.textContent = "Your number is more than 100"
        lastResult.style.color = "Red"
        guesses.textContent = ""
        lowOrHi.textContent = ""
    }
    else if(guessCount > 10) {
        lastResult.textContent = "Game Over"
        setGameOver()
        lowOrHi.textContent = ""
        guesses.textContent = ""
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
        else if (playerGuess !== randomNum) {
            lastResult.textContent = "Your Guess is not Number 🤔"
            lastResult.style.color = "#004680"
            lowOrHi.textContent = " "
        }
        else {
            lowOrHi.textContent= "You guessed right."
        }
    }
    
    guessField.value = ""
     guessField.focus()
}
// add eventListener to the submit button and pass the checkGuess function

guessSubmit.addEventListener('click', checkGuess)

// create game over function once the player has guessed up to 10 times or he guessed correctly

function setGameOver() {
    guessField.disabled = true
    guessSubmit.disabled = true
    resetButton = document.createElement("button")
    resetButton.textContent = "Start new Game"
    document.body.appendChild(resetButton)
    resetButton.addEventListener("click", resetGame)
}

// create resetGame function

function resetGame() {
    const resetParas = document.querySelectorAll(".resultParas p")
    for(i= 0; i < resetParas.length; i++) {
        resetParas[i].textContent = ""
    }
    document.body.removeChild(resetButton)
    guessField.disabled = false
    guessSubmit.disabled = false
    guessField.value = ""
    guessField.focus();
    let guessCount = 1
    checkGuess
}