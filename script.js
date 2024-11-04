const ques = [
    {
        Q: `How many minutes are there in an hour?`,
        options: [`40 Minutes`, `50 Minutes`, `60 Minutes`, `30 Minutes`],
        answer: `60 Minutes`
    },
    {
        Q: `Name the first person who declared his conversion to Islam emphatically?`,
        options: [`Hazrat Abu Bakar (RA)`, `Hazrat Usman (RA)`, `Hazrat Umar (RA)`, `Hazrat Ali (RA)`],
        answer: `Hazrat Umar (RA)`
    },
    {
        Q: `Which city is the capital of Pakistan?`,
        options: [`Karachi`, `Islamabad`, `Lahore`, `Multan`],
        answer: `Islamabad`
    },
    {
        Q: `Which planet is known as the Red Planet?`,
        options: [`Earth`, `Mars`, `Jupiter`, `Saturn`],
        answer: `Mars`
    },
    {
        Q: `What is the largest ocean on Earth?`,
        options: [`Atlantic Ocean`, `Indian Ocean`, `Arctic Ocean`, `Pacific Ocean`],
        answer: `Pacific Ocean`
    }
];

const questionElement = document.querySelector('#ques');
const nextButton = document.querySelector('#nxt');
const answerBoxes = document.querySelectorAll('.box1');
const winMessage = document.querySelector('.win');
const tryAgainButton = document.querySelector('.btn');
const totalQuestions = ques.length;

let currentQuestionIndex = 0;
let score = 0;

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < totalQuestions) {
        loadQuestion();
    } else {
        showResult();
    }
});

function loadQuestion() {
    const currentQuestion = ques[currentQuestionIndex];
    questionElement.innerText = currentQuestion.Q;
    
    answerBoxes.forEach((box, index) => {
        box.querySelector('.box2').innerText = currentQuestion.options[index];
        box.style.backgroundColor = 'rgb(255, 199, 199)'; // Set background color
        box.onclick = () => handleAnswer(currentQuestion.options[index]);
    });
}

function handleAnswer(selectedAnswer) {
    const correctAnswer = ques[currentQuestionIndex].answer;

    answerBoxes.forEach(box => {
        box.onclick = null; // Disable all options
    });

    if (selectedAnswer === correctAnswer) {
        score++;
        answerBoxes.forEach(box => {
            if (box.querySelector('.box2').innerText === correctAnswer) {
                box.style.backgroundColor = 'green'; // Correct answer
            }
        });
    } else {
        answerBoxes.forEach(box => {
            if (box.querySelector('.box2').innerText === selectedAnswer) {
                box.style.backgroundColor = 'red'; // Wrong answer
            }
            if (box.querySelector('.box2').innerText === correctAnswer) {
                box.style.backgroundColor = 'green'; // Show correct answer
            }
        });
        winMessage.style.display = 'block'; // Show wrong answer message
    }

    nextButton.style.display = 'flex'; // Show next button
}

tryAgainButton.addEventListener('click', () => {
    location.reload();
});

function showResult() {
    questionElement.innerText = `Congratulations! You've Finished The Quiz!
    You scored ${score} out of ${totalQuestions}!`;
    nextButton.style.display = 'none'; // Hide next button
    winMessage.style.display = 'none'; // Hide wrong answer message
    answerBoxes.forEach(box => {
        box.style.display = 'none'; // Hide answer boxes
    });
}
  
// Initialize the first question
loadQuestion();
















