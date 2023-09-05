// Generate a random answer between 1 and 100
const answer = Math.floor(Math.random() * 100) + 1;
let guessesLeft = 7;

function checkGuess() {
    const guessInput = document.getElementById("input");
    const message = document.getElementById("message");
    const guessesLeftDisplay = document.getElementById("guessesLeft");

    const guess = parseInt(guessInput.value);

    if (guess < 1 || guess > 100) {
        message.innerHTML = "Please enter a valid number between 1 and 100.";
    } else {
        guessesLeft--;

        if (guess === answer) {
            message.innerHTML = `Congratulations! You guessed the correct number, which is ${answer}. You win!`;
        } else {
            if (guess < answer) {
                message.innerHTML = "Too low. Try again.";
            } else {
                message.innerHTML = "Too high. Try again.";
            }

            if (guessesLeft === 0) {
                message.innerHTML = `Sorry, you've run out of guesses. The correct answer was ${answer}. Game over.`;
            }
        }

        guessesLeftDisplay.textContent = guessesLeft;
        guessInput.value = "";
    }
}
