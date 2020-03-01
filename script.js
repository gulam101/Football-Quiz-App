const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currenQuestion = {};
let acceptingAwnsers = true;
let score = 0;
let questionCounter = 0;
let avalibleQuestions = [];

let questions = [
{
  question: "who won the premier league in 2007?",
  choice1: "Placeholder",
  choice1: "Placeholder",
  choice1: "Placeholder",
  choice1: "Placeholder",
  answer: 1
},
{
question: "who won the premier league in 2007?",
choice1: "Placeholder",
choice1: "Placeholder",
choice1: "Placeholder",
choice1: "Placeholder",
answer: 1
}
];

//Constants
const Correct_Bounds = 10;
const Max_Questions = 5;

startGame = () => {
  questionsCounter = 0;
  score = 0;
  //the 3 dots is taking our exitsting array and spreading
  //them out and then putting them into a new array
  avaliableQuestions = [... questions];
  console.log(avaliableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  questionCounter++;
  const questionIndex = Math.floor(math.random() * avalibleQuestions.length);
  currenQuestion = avalibleQuestions[quesionIndex];
  question.innerText = currentQuestion.question;
};

startGame();
