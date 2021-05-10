const api_url = 'https://opentdb.com/api.php?amount=10&type=multiple&category=12'
const button1 = document.getElementById('answer');
const button2 = document.getElementById('wrongChoice1');
const button3 = document.getElementById('wrongChoice2');
const button4 = document.getElementById('wrongChoice3');

function doSomething(){
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
  .then()
  .catch(err => console.error(err));
}

doSomething()

button1.onclick = function(){
  window.location.reload();
}

button2.onclick = function(){

}

button3.onclick = function(){

}

button4.onclick = function(){

}



//keep below for reference
axios.get("https://opentdb.com/api.php?amount=10&category=12")
.then(res => console.log(res.data.results));