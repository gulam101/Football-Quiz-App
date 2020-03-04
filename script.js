//Using const stops anything from updating these values unless specified!
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Stores our questions
let questions = [
{
  question: "Who Won The Premier League in 2007?",
  choice1: "Manchester United",
  choice2: "Liverpool",
  choice3: "Chelsea",
  choice4: "Arsenal",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "Which position did Nani play in at Manchester United?",
  choice1: "Right Wing Only",
  choice2: "Left Wing Only",
  choice3: "LM and RM",
  choice4: "Both LW and RW",
  answer: 4
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
{
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 1
},
];


//DONT WANT THESE VALUES TO CHANGE
const CORRECT_BONUS = 10;
const Max_Questions = 25;

startGame = () => {
  questionCounter = 0;
  score = 0;
  //the 3 dots is taking our exitsting array and spreading
  //them out and then putting them into a new array
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= Max_Questions) {
    //goes to the end page
    return window.location.assign("/end.html");
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach(choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionIndex, 1);
  console.log(availableQuestions);
  acceptingAnswers = true;
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
