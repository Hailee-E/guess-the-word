const guessedLetters = document.createElement(".guessed-letters");
const button = document.querySelector(".guess");
const textInput = document.querySelector(".letter")
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remaininfGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgain = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function(word) {
    const placeholderLetters = [];
    for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};
placeholder(word);

button.addEventListener("click", function (e) {
    e.preventDefault();
    const finalGuess = textInput.ariaValueMax;
    console.log(finalGuess);
    textInput.value = "";
});