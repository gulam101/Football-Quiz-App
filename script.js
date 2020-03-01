const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAwnsers = true;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
{
  question: "who won the premier league in 2007?",
  choice1: "Placeholder",
  choice2: "Placeholder",
  choice3: "Placeholder",
  choice4: "Placeholder",
  answer: 1
},
{
  question: "who won the premier league in 2007?",
  choice1: "Placeholder",
  choice2: "Placeholder",
  choice3: "Placeholder",
  choice4: "Placeholder",
  answer: 1
}
];

//Constants
const Correct_Bounds = 10;
const Max_Questions = 5;

startGame = () => {
  questionCounter = 0;
  score = 0;
  //the 3 dots is taking our exitsting array and spreading
  //them out and then putting them into a new array
  availableQuesions = [...questions];
  console.log(availableQuesions);
  getNewQuestion();
};

getNewQuestion = () => {
  if(availableQuesions.length === 0 || questionCounter >= Max_Questions) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number]
  });

  avaliableQuestions.splice(questionIndex, 1);
  console.log(avaliableQuestions);
  acceptingAwnsers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];
    console.log(selectedAnswer);
    getNewQuestion();
  });
});

startGame();
