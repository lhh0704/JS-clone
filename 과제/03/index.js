const gameForm = document.querySelector(".game-form");
const generateInput = document.querySelector(".generate-number input");
const guessInput = document.querySelector(".guess-number input");
const resultContainer = document.querySelector(".game-form div:nth-child(3)");
const userNumber = document.querySelector(".user-number");
const machineNumber = document.querySelector(".machine-number");
const resultText = document.querySelector(".result-text");


function submitEvent(event) {
    event.preventDefault();
    if(generateInput.value < guessInput.value ){
        return alert("유효한 숫자를 입력해주세요");
    }
    const randomNumber = Math.ceil(Math.random() * generateInput.value)
    resultContainer.classList.remove('hidden')
    userNumber.innerText = `You chose ${guessInput.value},`;
    machineNumber.innerText = `machine chose: ${randomNumber}`;

    // if (parseInt(guessInput.value) === randomNumber) {
    if (+guessInput.value === randomNumber) {
        resultText.innerText = "You win";
    } else {
        resultText.innerText = "You lose";
    }
}
gameForm.addEventListener("submit", submitEvent)

