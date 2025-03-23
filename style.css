const questionDiv = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submit');
const resultDiv = document.getElementById('result');
const bowser = document.getElementById('bowser');

let num1, num2, correctAnswer;
let bowserPosition = 50; // Initial position (right: 50px)

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
        bowserPosition += 5; // Move Bowser backward (increase right property)
        bowser.style.right = bowserPosition + 'px';
    } else {
        resultDiv.textContent = "Incorrect!";
        // Add code to "damage" Mario or make Bowser attack
    }
    generateQuestion();
}

submitButton.addEventListener('click', checkAnswer);

generateQuestion();
