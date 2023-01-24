let boxes = [
  {
    question: "commonly used data types do not include:",
    answers: ["1.string", "2.booleans", "3.alerts", "4.numbers"],
    result: "3.alerts",
  },
  {
    question: "The condition in an if/else statment is enclosed with --------",
    answers: [
      "1.quotes",
      "2.curly brackets",
      "3.parenthesis",
      "4.square brackets",
    ],
    result: "3.parenthesis",
  },
  {
    question: "arrays in Java script can be used to store -------",
    answers: [
      "1.numbers and strings",
      "2.other arrays",
      "3.booleans",
      "4.all of the above",
    ],
    result: ["4.all of the above"],
  },
  {
    question:
      "string values must be enclosed within -------- when being assigned to variables ",
    answers: ["1.commas", "2.curly bracket", "3.quotes", "4.patenthesis"],
    result: ["2.curly bracket"],
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
    result: ["3.for loops"],
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

function checkAnswer(event) {
  var userChoice = event.target.textContent;
  if (userChoice == boxes[currentQuestionIndex].result) {
    document.getElementById("result").setAttribute("class", "");
    document.getElementById("result").textContent = "correct";
  } else {
    document.getElementById("result").setAttribute("class", "");
    document.getElementById("result").textContent = "wrong!";
  }

  setTimeout(function () {
    document.getElementById("result").setAttribute("class", "hide");
    if (currentQuestionIndex < boxes.length) {
      showQuestion();
    }
  }, 1500);
  currentQuestionIndex++;
}

function endQuiz() {
  document.getElementById("second").setAttribute("class", "hide");
  document.getElementById("third").setAttribute("class", "");
}
var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("timer");
var secondleft = 75;
function setTime() {
  var timerInterval = setInterval(function () {
    secondleft--;
    timeEl.textContent = secondleft;
    if (secondleft <= 0 || currentQuestionIndex >= boxes.length) {
      clearInterval(timerInterval);
      endQuiz();
    }
  }, 1000);
}
let button = document.querySelector("#firstButton");

button.addEventListener("click", function () {
  setTime();
  document.getElementById("first").setAttribute("class", "hide");
  document.getElementById("second").setAttribute("class", "");
  showQuestion();
});

document.getElementById("optionOne").addEventListener("click", checkAnswer);
document.getElementById("optionTwo").addEventListener("click", checkAnswer);
document.getElementById("optionThree").addEventListener("click", checkAnswer);
document.getElementById("optionFour").addEventListener("click", checkAnswer);
