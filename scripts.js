const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple&category=12'

var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;

var answer = {player1:"", player2: ""};

var result

var gameCounter = 0;

function spawnQuestion(){
  axios
  .get('https://opentdb.com/api.php?amount=10&type=multiple&category=12')
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
    answer[player1Score] = result;
  })
  .catch(err => console.error(err));
}

function scoreUpdate(){
  if(gameCounter%2 ==0){
    player1Score++
    console.log("Player 1's score is: " + player1Score);
    setTimeout(location.reload(), 100000000);
  }

}

$('#answer').click(() =>{
  scoreUpdate();
  gameCounter++; 
})

$('#wrongChoice1').click(() =>{
  alert("wrong answer");
  gameCounter++;  
})

$('#wrongChoice2').click(() =>{
  alert("wrong answer");
  gameCounter++;  
})

$('#wrongChoice3').click(() =>{
  alert("wrong answer");
  gameCounter++;
})

//keep below for reference


spawnQuestion()

