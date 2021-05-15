let gameCounter = document.getElementById("gameCounter");

//Score variables
let player1Score = document.getElementById("p1Score")
let player2Score = document.getElementById("p2Score")


let playerTurn = document.getElementById("playerTurn")

function spawnQuestion(){
  axios
  .get('https://opentdb.com/api.php?amount=50&type=multiple')
  .then(res => {
    //assign variables to specific data
    var question = res.data.results[0].question;
    answer = res.data.results[0].correct_answer;
    var wrongChoice1 = res.data.results[0].incorrect_answers[0];
    var wrongChoice2 = res.data.results[0].incorrect_answers[1];
    var wrongChoice3 = res.data.results[0].incorrect_answers[2];
    //Display the question & answer choices
    document.getElementById('question').innerHTML = question;
    document.getElementById('answer').innerHTML = answer;
    document.getElementById('wrongChoice1').innerHTML = wrongChoice1;
    document.getElementById('wrongChoice2').innerHTML = wrongChoice2;
    document.getElementById('wrongChoice3').innerHTML = wrongChoice3;
    //randomize the questions (copied from internet)
    var ul = document.querySelector('ul');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
  })
  .catch(err => console.error(err));
}

//When buttons are clicked, do the following
$('#answer').click(() =>{
  gameCounter++;
  checkScore();
  scoreUpdate();
  attemptUpdate();
  gameCounterClock();
  console.log(gameCounter);
})

$('#wrongChoice1').click(() =>{
  gameCounter++;
  alert("wrong answer");
  console.log(gameCounter);
})

$('#wrongChoice2').click(() =>{
  gameCounter++;
  alert("wrong answer");
  console.log(gameCounter);
})

$('#wrongChoice3').click(() =>{
  gameCounter++;
  alert("wrong answer");
  console.log(gameCounter);
})

//Calls API and displays question/answer choices

spawnQuestion()


//Checking the local browser storage to see if "Score" exists.  If not it is created and set to 0.
if(localStorage.getItem("p1Score")){
  player1Score.innerHTML = localStorage.getItem("p1Score");
  p1Score = localStorage.getItem("p1Score");
}
else{
  player1Score.innerHTML = 0;
  p1Score = 0;
}

if(localStorage.getItem("p2Score")){
  player2Score.innerHTML = localStorage.getItem("p2Score");
  p2Score = localStorage.getItem("p2Score");

}
else{
  player2Score.innerHTML = 0;
  p2Score = 0;
}

if(localStorage.getItem("gameCounter")){
  gameCounter.innerHTML = localStorage.getItem("gameCounter");
  gameCounter = localStorage.getItem("gameCounter");
}
else{
  gameCounter.innerHTML = 0;
  gameCounter = 0;
}

function checkScore(){
  if(p1Score == 5){
    alert("Player 1 wins!!")
    localStorage.clear();
    window.location.reload();
  }
}

function scoreUpdate(){
  p1Score = parseInt(p1Score) + 1;
    localStorage.setItem("p1Score", p1Score);
    alert("Player 1's score is: " + p1Score);
    location.reload();
}

function gameCounterClock(){
  gameCounter = parseInt(gameCounter);
  localStorage.setItem("gameCounter", gameCounter);
  location.reload();
}

function attemptUpdate(){
  p1trial = parseInt(localStorage.getItem('p1Attempts'))
  p1Attempts = parseInt(p1Attempts) + p1trial;
  localStorage.setItem("p1Attempts", p1Attempts);
  alert("Player 1's total attempts are: " + p1Attempts);
}

//Below needs work

let player1Attempts = document.getElementById("p1Attempts")
let player2Attempts = document.getElementById("p2Attempts")




if(localStorage.getItem("p1Attempts")){
  player1Attempts.innerHTML = localStorage.getItem("p1Attempts");
  p1Attempts = localStorage.getItem("p1Attempts");
}
else{
  player1Attempts.innerHTML = 0;
  p1Attempts = 0;
}


if(localStorage.getItem("p2Attempts")){
  player1Attempts.innerHTML = localStorage.getItem("p2Attempts");
  p2Attempts = localStorage.getItem("p2Attempts");

}
else{
  player1Attempts.innerHTML = 0;
  p2Attempts = 0;
}

