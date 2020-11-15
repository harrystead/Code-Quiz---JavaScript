var userName;

function getUserName() {
  userName = prompt("Please Enter your Name:");
  localStorage.setItem("Name", userName);

  if ((userName = "")) {
    alert("Please enter your name");
  }
}

getUserName();

function displayHighscores() {
  document.getElementById("names").innerHTML = localStorage.getItem("Name");
  document.getElementById("scores").innerHTML = localStorage.getItem("Score");
}

displayHighscores();