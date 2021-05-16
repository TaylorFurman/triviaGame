//Score variables
let player1Score = document.getElementById("p1Score")
let player2Score = document.getElementById("p2Score")



//determining who's turn it is based on the window refresh counter
let pTurn = document.getElementById("playerTurn")

function playerTurn(){
  if(localStorage.getItem("counter")%2 !=0){
    pTurn.innerHTML = "Player 1's Turn!";
  }else if (localStorage.getItem("counter")%2 ==0){
    pTurn.innerHTML = "Player 2's Turn!";
  }
}
playerTurn();


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
  addPoint();
})

$('#wrongChoice1').click(() =>{
  alert("wrong answer");
  takePoint();
  window.location.reload();
})

$('#wrongChoice2').click(() =>{
  alert("wrong answer");
  takePoint();
  window.location.reload();
})

$('#wrongChoice3').click(() =>{
  alert("wrong answer");
  takePoint();
  window.location.reload();
})

$('#newGame').click(() =>{
  alert("NEW GAME STARTED!")
  localStorage.removeItem('p1Score');
  localStorage.removeItem('p2Score');
  localStorage.removeItem('counter');
  window.location.reload();
})

//Calls API and displays question/answer choices

spawnQuestion()

//checks score and clears local storage when players win
checkScore()

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

//functions for checking score to check for win condition
function checkScore(){
  if(localStorage.getItem('p1Score') == 10){
    alert("Player 1 wins!!")
    localStorage.removeItem('p1Score');
    localStorage.removeItem('p2Score');
    localStorage.removeItem('counter');
    window.location.reload();//need to clear the window reload count in local storage
  }
  else if (localStorage.getItem('p2Score') == 10){
    alert("Player 2 wins!!")
    localStorage.removeItem('p1Score');
    localStorage.removeItem('p2Score');
    localStorage.removeItem('counter');
    window.location.reload();//need to clear the window reload count in local storage
  }
}
//functions for adding a point based on correct choice
function addPoint(){
  if(localStorage.getItem('counter')%2 != 0){
    p1Score = parseInt(p1Score) + 1;
    localStorage.setItem("p1Score", p1Score);
    alert("Player 1's score is: " + p1Score);
    location.reload();
  }
  else if (localStorage.getItem('counter')%2 == 0){
    p2Score = parseInt(p2Score) + 1;
    localStorage.setItem("p2Score", p2Score);
    alert("Player 2's score is: " + p2Score);
    location.reload();
  }
}
//functions for taking a point based on correct choice
function takePoint(){
  if(localStorage.getItem('counter')%2 != 0 && localStorage.getItem('p1Score') >0){
    p1Score = parseInt(p1Score) - 1;
    localStorage.setItem("p1Score", p1Score);
    alert("Player 1's score is: " + p1Score);
    location.reload();
  }
  else if (localStorage.getItem('counter')%2 == 0 && localStorage.getItem('p2Score') >0){
    p2Score = parseInt(p2Score) - 1;
    localStorage.setItem("p2Score", p2Score);
    alert("Player 2's score is: " + p2Score);
    location.reload();
  }
}

console.log(localStorage.getItem('counter'));

//keep track of how many times the window has been refreshed to determine player's turn/score update
function windReloadCounter(){
  window.addEventListener("unload", function(){
    var count = parseInt(localStorage.getItem('counter') || 0);
    localStorage.setItem('counter', ++count);
  }, false); 
}

windReloadCounter()

