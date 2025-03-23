const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultDiv = document.getElementById('result');

let num1, num2, correctAnswer;

function generateQuestion() {
    num1 = Math.floor(Math.random() * 10) + 1;
    num2 = Math.floor(Math.random() * 10) + 1;
    correctAnswer = num1 * num2;
    questionDiv.textContent = `${num1} x ${num2} = ?`;
    answerInput.value = '';
}

function checkAnswer() {
    const playerAnswer = parseInt(answerInput.value);
    if (playerAnswer === correctAnswer) {
        resultDiv.textContent = "Correct!";
        // Add code to "damage" Bowser or advance the fight
    } else {
        resultDiv.textContent = "Incorrect!";
        // Add code to "damage" Mario or make Bowser attack
    }
    generateQuestion();
}

submitButton.addEventListener('click', checkAnswer);

generateQuestion();
