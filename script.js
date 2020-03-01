const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAwnsers = true;
let score = 0;
let questionCounter = 0;
let avaliableQuestions = [];

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
  avaliableQuestions = [...questions];
  console.log(avaliableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if(avaliableQuestions.length === 0 || questionCounter >= Max_Questions) {
    //go to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * avaliableQuestions.length);
  currentQuestion = avaliableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number]
  });

  //avaliableQuestions


};

startGame();
