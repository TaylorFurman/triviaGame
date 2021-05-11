const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple&category=12'
const button1 = document.getElementById('answer');
const button2 = document.getElementById('wrongChoice1');
const button3 = document.getElementById('wrongChoice2');
const button4 = document.getElementById('wrongChoice3');

var player1Score = 0;
var player2Score = 0;
var player3Score = 0;
var player4Score = 0;



function spawnQuestion(){
  axios
  .get('https://opentdb.com/api.php?amount=10&type=multiple&category=12')
  .then(res => {
    var question = res.data.results[0].question;
    var answer = res.data.results[0].correct_answer;
    var wrongChoice1 = res.data.results[0].incorrect_answers[0];
    var wrongChoice2 = res.data.results[0].incorrect_answers[1];
    var wrongChoice3 = res.data.results[0].incorrect_answers[2];
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
  .then(checkAnswer)
  .catch(err => console.error(err));
}

function checkAnswer(){
  const answer = new Promise((resoultion, rejection) =>{
    

  });
}


spawnQuestion()
  




function scoreUpdate(){
  button1.onclick = false;
  button2.onclick = false;
  button3.onclick = false;
  button4.onclick = false;
  if (button1.onclick == true){
    player1Score = player1Score + 1;
    console.log(player1Score);
  }
  
}

button1.onclick = function(){
  checkAnswer();
  scoreUpdate();
}

button2.onclick = function(){
  checkAnswer();
  scoreUpdate();

}

button3.onclick = function(){
  checkAnswer();
  scoreUpdate();
}

button4.onclick = function(){
  checkAnswer();
  scoreUpdate();
}

//keep below for reference


