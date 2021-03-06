
var questions = [
  {
    title: "Which selector does # relate to?",
    choices: ["class", "tags", "id", "css"],
    answer: "id"
  },
  {
    title: "Which HTML tag is used to link to an external JavaScript file?",
    choices: ["<css>", "<body>", "<script>", "<style>"],
    answer: "<script>"
  },
  {
    title: "HTML and CSS are programming languages",
    choices: ["true", "false"],
    answer: "false"
  },
  {
    title: "A boolean is:",
    choices: [
      "A datatype that returns true or false",
      "A type of sausage",
      "A HTML tag",
      "None of the above"
    ],
    answer: "A true or false statement"
  },
  {
    title: "In which year did Huddersfield Town FC become the first club to win three successive English League titles?",
    choices: ["1967", "1989", "1926", "1954"],
    answer: "1926"
  }
];

var myQuiz = $("#quizContainer");
var secondsRemaining = questions.length * 15;
var timer;
var userAnswer;
var answer = questions[answer];
var currentIndex = 0;
var startQuiz = document.getElementById("startQuiz");

///////////////////////


startQuiz.onclick = startTimer;

function startTimer() {
  displayQuestion();

  timer = setInterval(function() {
    secondsRemaining -= 1;
    console.log(secondsRemaining);
    
    //display
    var timerDisplay = document.getElementById("theTimer");
    timerDisplay.textContent = secondsRemaining;


    //when timer runs out go to highscore file.
    if (secondsRemaining === 0) {
      clearInterval(timer);
      window.location.href = "highscore.html";
    }
  }, 1000);
}

/////////////////////////////////////


function displayQuestion() {
  document.getElementById("card-header").innerHTML = "";
  document.getElementById("card-body").innerHTML = "";

  var titleElement = document.createElement("h1");
  var currentQuestion = questions[currentIndex].title;
  titleElement.textContent = currentQuestion;

  var cardHeader = document.getElementById("card-header");
  cardHeader.appendChild(titleElement);

  //select choices by accessing questions object.
  var choices = questions[currentIndex].choices;

  //create button for each choise of answer.
  for (var i = 0; i < choices.length; i++) {
    var choicesElement = document.createElement("button");
    var cardBody = document.getElementById("card-body");
    cardBody.appendChild(choicesElement);
    choicesElement.textContent = choices[i];
    choicesElement.onclick = isCorrectAnswer;
  }

  console.log(choices);
}

/////////////////////////////////////////

function isCorrectAnswer() {
    var answer = questions[currentIndex].answer;
    userAnswer = this.innerHTML;
  
    if (userAnswer === answer) {
      console.log("answer correct");
    } else if (userAnswer !== answer) {
      removeTime();
      console.log("answer incorrect");
    }
    currentIndex++;
    if (currentIndex === questions.length) {
      console.log(getScore());
      window.location.href = "highscore.html";
    }
    displayQuestion();
    console.log("finish isCorrectAnswer");
  }
  
  /////////////////////////
  
  //call functions 
  function addTime() {
    secondsRemaining += 15;
  }
  
  function removeTime() {
    secondsRemaining -= 15;
  }
  
  function getScore() {
    return secondsRemaining;
  }
  localStorage.setItem("Score", secondsRemaining);
  
  function getUserInfo() {}
  
  function saveScore() {}
  
  console.log(questions);


