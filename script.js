


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


