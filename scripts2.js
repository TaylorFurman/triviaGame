class Data {
    //constructor makes the object 
    constructor(data){
        this.data = data
    }
    spawnQuestion(){
        axios
        .get('https://opentdb.com/api.php?amount=50&type=multiple')
        .then(res => {
          //assign variables to specific data
          var question = res.data.results[0].question;
          var answer = res.data.results[0].correct_answer;
          var wrongChoice1 = res.data.results[0].incorrect_answers[0];
          var wrongChoice2 = res.data.results[0].incorrect_answers[1];
          var wrongChoice3 = res.data.results[0].incorrect_answers[2]; 
        });

    }
}

var question = new Data(axios.get('https://opentdb.com/api.php?amount=50&type=multiple').res.data.result[0].question);
question.spawnQuestion();

var Accord = new Car('Sedan');
Accord.getType();
        


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
}

class Car{
    constructor (type){
        if (!type){
            throw "type is Required";
        }
        this.type = type;
    }
    getType(){
        console.log('Type is: ' + this.type);
    }

}

var Accord = new Car('Sedan');
Accord.getType();

var Dodge = new Car('Truck');
Dodge.getType();

class Animal{
    constructor(name) {
        this.name = name;
    }
}

class Dog extends Animal {
    speak(){
        console.log(this.name + ' woofs.');
    }
}

var d = new Dog('fifi');

d.speak();

class Cat extends Animal{
    speak(){
        console.log(this.name + ' meows.');
    }
}

class Lion extends Cat{
    constructor(name, sex){
        super(name);
        this.sex = sex;
    }
    speak(){
        //super is a specialty keyword that calls speak() from Cat and Lion.
        //super.speak();
        console.log(this.name + ' roars.');
    }
}

var lion = new Lion('Cowardly', 'Male');
lion.speak();
console.log("This lion is", lion.sex);