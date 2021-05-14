class Data {
    //constructor makes the object 
    constructor(data){
        this.data = data
    }
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