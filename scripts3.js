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
