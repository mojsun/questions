let boxes = [
  {
    question: "commonly used data types do not include:",
    answers: ["1.string", "2.booleans", "3.alerts", "4.numbers"],
    result: ["wrong!"],
  },
  {
    question: "The condition in an if/else statment is enclosed with --------",
    answers: [
      "1.quotes",
      "2.curly brackets",
      "3.parenthsis",
      "4.square brackets",
    ],
    result: ["correct"],
  },
  {
    question: "arrays in Java script can be used to store -------",
    answers: [
      "1.numbers and strings",
      "2.other arrays",
      "3.booleans",
      "4.all of the above",
    ],
    result: ["correct"],
  },
  {
    question:
      "string values must be enclosed within -------- when being assigned to variables ",
    answers: ["1.commas", "2.curly bracket", "3.quotes", "4.patenthesis"],
    result: ["wrong!"],
  },
  {
    question:
      "a very useful tool used during development and debuggingfor printing content to the debugger is: ",
    answers: [
      "1.Java script",
      "2.terminal/bash",
      "3.for loops",
      "4.console.log",
    ],
    result: ["wrong!"],
  },
];

let currentQuestionIndex = 0;
function showQuestion() {
  document.getElementById("question").textContent =
    boxes[currentQuestionIndex].question;
  document.getElementById("optionOne").textContent =
    boxes[currentQuestionIndex].answers[0];
  document.getElementById("optionTwo").textContent =
    boxes[currentQuestionIndex].answers[1];
  document.getElementById("optionThree").textContent =
    boxes[currentQuestionIndex].answers[2];
  document.getElementById("optionFour").textContent =
    boxes[currentQuestionIndex].answers[3];
}

function checkAnswer() {
  currentQuestionIndex++;
  showQuestion();
  //setTime();
  /*document.getElementById("result").textContent =
    boxes[currentQuestionIndex].result[0];
  checkAnswer();*/
}
/*var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");
var secondleft = 75;
function setTime() {
  var timerInterval = setinterval(function () {
    secondleft--;
    if (secondleft === 0) {
      clearInterval(timerInterval);
    }
    1000;
  });*/

let button = document.querySelector("#firstButton");

button.addEventListener("click", function () {
  document.getElementById("first").setAttribute("class", "hide");
  document.getElementById("second").setAttribute("class", "");
  showQuestion();
  //setTime();
});
/*let lastPage = boxes[4].answers[2];
lastPage.addEventListener("click", function () {
  document.getElementById("second").setAttribute("class", "hide");
  document.getElementById("third").setAttribute("class", "");
});*/

/*function showLastPage() {
  document.getElementById("third");
}*/
document.getElementById("optionOne").addEventListener("click", checkAnswer);
document.getElementById("optionTwo").addEventListener("click", checkAnswer);
document.getElementById("optionThree").addEventListener("click", checkAnswer);
document.getElementById("optionFour").addEventListener("click", checkAnswer);
