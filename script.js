const question = document.getElementsById("question");
const choices = Array.from(document.getElementsById("choice-text"));

let currenQuestion = {};
let acceptingAwnsers = true;
let score = 0;
let questionCounter = 0;
let avalibleQuestions = [];
