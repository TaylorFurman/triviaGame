class APIController{
    constructor(url){
        this.url = url
    }
    getData(){
        return axios(this.url) //fetch data using axios
    }
}


class UIController extends APIController{
    constructor(url){
        super(url)
    }
    async planets(){
        const planets = await this.getData().then((response) =>{
            return response.data
        })
        this.renderPlanets(planets.results)
    }
    renderPlanets(planets){
        const planetList = planets.map((planet) =>{
            return``
        })
    }
        

}


$('#question').click(() =>{
    new UIController('https://opentdb.com/api.php?amount=10&type=multiple&category=12')
})






axios
    .get('https://opentdb.com/api.php?amount=10&type=multiple&category=12')
    .then(res => {
        //assign variables to specific data
        var question = res.data.results[0].question;
        var answer = res.data.results[0].correct_answer;
        var wrongChoice1 = res.data.results[0].incorrect_answers[0];
        var wrongChoice2 = res.data.results[0].incorrect_answers[1];
        var wrongChoice3 = res.data.results[0].incorrect_answers[2];                    
    })      
    
    .catch("failure");



//Below needs work

let player1Attempts = document.getElementById("p1Attempts")
let player2Attempts = document.getElementById("p2Attempts")

function attemptUpdate(){
    p1Attempts = parseInt(p1Attempts);
    localStorage.setItem("p1Attempts", p1Attempts);
    alert("Player 1's total attempts are: " + p1Attempts);
  }




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



function gameCounterClock(){
    console.log(gameCounter);
    gameCounter = parseInt(gameCounter);
    localStorage.setItem("gameCounter", gameCounter);
    localStorage.removeItem("gameCounter");
    location.reload();
  }

if(localStorage.getItem("gameCounter")){
gameCounter.innerHTML = localStorage.getItem("gameCounter");
gameCounter = localStorage.getItem("gameCounter");
}
else{
gameCounter.innerHTML = 0;
gameCounter = 0;
}


if(localStorage.getItem("windowReloadCounter")){
windowReloadCounter.innerHTML = localStorage.getItem("windowReloadCounter");
windowReloadCounter = localStorage.getItem("windowReloadCounter");
}
else{
windowReloadCounter.innerHTML = 0;
windowReloadCounter = 0;
}