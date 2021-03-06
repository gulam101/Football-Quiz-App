//Using const stops anything from updating these values unless specified!
const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

//Stores the questions
let questions = [
{
  //Question 1
  question: "Who won the Premier League in 2007?",
  choice1: "Manchester United",
  choice2: "Liverpool",
  choice3: "Chelsea",
  choice4: "Arsenal",
  answer: 1
},
{
  //Question 2
  question: "What season did Chelsea sign Eden Hazard?",
  choice1: "2011/2012",
  choice2: "2012/2013",
  choice3: "2010/2011",
  choice4: "2013/2014",
  answer: 2
},
{
  //Question 3
  question: "Which position did Nani play in at Manchester United?",
  choice1: "Right Wing Only",
  choice2: "Left Wing Only",
  choice3: "LM and RM",
  choice4: "Both LW and RW",
  answer: 4
},
{
  //Question 4
  question: "What club was Coutinho playing before Liverpool",
  choice1: "Juventus",
  choice2: "Napoli",
  choice3: "Paris Saint Germain",
  choice4: "Inter Milan",
  answer: 4
},
{
  //Question 5
  question: "In the Brazilian League, what club was Neymar Jr playing for?",
  choice1: "Vasco",
  choice2: "Santos",
  choice3: "Sport",
  choice4: "Flamengo",
  answer: 2
},
{
  //Question 6
  question: "In which year did Juventus last get relegated?",
  choice1: "2005",
  choice2: "2006",
  choice3: "2007",
  choice4: "2003",
  answer: 2
},
{
  //Question 7
  question: "What was the reason for Juventus getting relegated?",
  choice1: "Players betting on matches",
  choice2: "Manager and assistant manager paying refs for favourable outcomes",
  choice3: "Performance wasn't good enough",
  choice4: "Club went into financial debt",
  answer: 2
},
{
  //Question 8
  question: "How many goals did Messi score in 2012?",
  choice1: "91",
  choice2: "103",
  choice3: "89",
  choice4: "90",
  answer: 1
},
{
  //Question 9
  question: "When did Ronaldo make his debut for United?",
  choice1: "2000",
  choice2: "2006",
  choice3: "2003",
  choice4: "2002",
  answer: 3
},
{
  //Question 10
  question: "When did Andrea Pirlo retire?",
  choice1: "2015",
  choice2: "2016",
  choice3: "2018",
  choice4: "2017",
  answer: 4
},
{
  //Question 11
  question: "When did Wenger join Arsenal?",
  choice1: "1999",
  choice2: "1996",
  choice3: "2001",
  choice4: "1997",
  answer: 2
},
{
  //Question 12
  question: "How many goals did Tevez score at West Ham United?",
  choice1: "1",
  choice2: "6",
  choice3: "7",
  choice4: "4",
  answer: 3
},
{
  //Question 13
  question: "Which match was played for Sir Alex Ferguson final match?",
  choice1: "A 5 all draw against West Bromwich Albion",
  choice2: "A win against Liverpool",
  choice3: "A loss against West Bromwhich Albion",
  choice4: "A win against West Bromwhich Albion",
  answer: 1
},
{
  //Question 14
  question: "Which position did Joey Barton play at Queens Park Rangers?",
  choice1: "ST",
  choice2: "CM",
  choice3: "CB",
  choice4: "Winger",
  answer: 2
},
{
  //Question 15
  question: "In which season did As Monaco FC win Ligue 2?",
  choice1: "2012/2013",
  choice2: "2013/2014",
  choice3: "2010/2011",
  choice4: "2011/2012",
  answer: 1
},
{
  //Question 16
  question: "What was Kaka's last club?",
  choice1: "Real Madrid",
  choice2: "Sao Paulo",
  choice3: "Orlando City",
  choice4: "Ac Milan",
  answer: 3
},
{
  //Question 17
  question: "What was Micah Richards first youth club he played for?",
  choice1: "Leeds United",
  choice2: "Oldham Athletic",
  choice3: "Manchester City",
  choice4: "Aston Villa",
  answer: 1
},
{
  //Question 18
  question: "What club was Sergio Aguero playing before he joined Manchester City?",
  choice1: "Barcelona",
  choice2: "Real Madrid",
  choice3: "Valencia CF",
  choice4: "Atletico Madrid",
  answer: 4
},
{
  //Question 19
  question: "When did Mourinho join Real Madrid",
  choice1: "2009",
  choice2: "2010",
  choice3: "2007",
  choice4: "2008",
  answer: 2
},
{
  //Question 20
  question: "When did Fernando Torres join Liverpool",
  choice1: "2009",
  choice2: "2005",
  choice3: "2008",
  choice4: "2007",
  answer: 4
}

];
//End of questions


//Don't change these values!
const CORRECT_BONUS = 10;
const Max_Questions = 20;

startGame = () => {
  questionCounter = 0;
  score = 0;
  //the 3 dots is taking our exitsting array and spreading
  //them out and then putting them into a new array
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= Max_Questions) {
    //goes to the end page
    return window.location.assign("index.html");
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
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", e => {
    if (!acceptingAnswers) return;

    acceptingAnswers = false;
    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

//Checks to see if the awnser is correct or not
const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

//outputs the result (Used for tests)
console.log(classToApply);

    getNewQuestion();
  });
});

//Starts the game
startGame();
