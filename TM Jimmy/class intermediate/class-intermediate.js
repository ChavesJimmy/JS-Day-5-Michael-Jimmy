// animal class
let animalArray = []
class Animal {
    Name;
    Place;
    Category;
    constructor(nameAn, place, categ){
        this.Name = nameAn;
        this.Place = place ;
        this.Category = categ;
    
        animalArray.push(this);
    }
        description(){
            return `I am a(n) ${this.Name} , I live in ${this.Place} and I'm a(n) ${this.Category}<br><br>`
        }       
    }

class Fish extends Animal{
    Swim;
    constructor(nameAn, place, categ, swim){
        super(nameAn, place, categ);
        this.Swim = swim;
    }
    description(){
        return `I am a(n) ${this.Name} , I live in ${this.Place} and I'm a(n) ${this.Category}<br>
        Can I swim ? => ${this.Swim}<br><br>`
    } 
}

    let animalA = new Animal("Eagle", "North America", "oviparous");
    let animalB = new Animal("Eagle", "North America", "oviparous");
    let animalC = new Animal("Pinguin", "Antarctica", "oviparous");
    let fish1 = new Fish("Shark", "Ocean", "ovoviviparous", true);
    let fish2 = new Fish("Jellyfish", "Sea and Ocean", "oviparous", false);
    let fish3 = new Fish("Octopus", "Deep Ocean", "oviparous", true);



for (let val of animalArray){
document.getElementById("animals").innerHTML += val.description();}

//car class
let carArray = [];

class Car {
    Brand;
    MaxSpeed;
    YearOfProduction;
    constructor(br, MaxSp, YofPr){
        this.Brand = br;
        this.MaxSpeed = MaxSp;
        this.YearOfProduction = YofPr;

        carArray.push(this);
    }
    presentation(){
        return `This is a(n) ${this.Brand}'s car , produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
    }
}
class Motorbike extends Car{
    NumberOfWheels;
        constructor(br, MaxSp, YofPr, NWheel ){
            super(br, MaxSp, YofPr);
            this.NumberOfWheels = NWheel;
        }
        presentation(){
            return `This is a(n) ${this.Brand}'s Motorbike, with ${this.NumberOfWheels} wheels, produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
        }
}
let carA = new Car("ferrari", "340 km/H", 1998);
let carB = new Car("skoda", "150 km/H", 2008);
let carC = new Car("peugeot", "200 km/H", 2013);
let motoA = new Motorbike("Suzuki","280 km/H", 2001, 2);
let motoB = new Motorbike("Kawasaki","230 km/H", 2011, 2);
let motoC = new Motorbike("Honda","250 km/H", 2019, 2);



for (let val of carArray){
    document.getElementById("cars").innerHTML += val.presentation();}

//class person
    let personArray = [];
    class Person{
        Name;
        Age;
        Hobbies;
        constructor(nam, age, hobbies){
            this.Name = nam;
            this.Age = age;
            this.Hobbies = hobbies;

            personArray.push(this);
        }
    
        presentation2(){
            return `This is ${this.Name} , (s)he is ${this.Age} and (s)he likes ${this.Hobbies}<br><br>`
        }
    }
    class Job extends Person{
        myJob;
        constructor(nam, age, hobbies, job){
            super(nam, age, hobbies);
            this.myJob = job;
        }
        presentation2(){
            return `This is ${this.Name} , (s)he is ${this.Age} and (s)he likes ${this.Hobbies} and (s)he work as ${this.myJob}<br><br>`
        }
    }
    let personA = new Person ("Amelie", 4, ["candies", "chocolate", "play"]);
    let personB = new Person ("Mathieu", 5, ["volcan", "train", "play"]);
    let personC = new Person ("Maman", 32, ["Amelie", "Mathieu", "Papa"]);
    let personD = new Job ("Frieda", "42", ["traveling", "running"], "doctor")
    for (let val of personArray){
        document.getElementById("persons").innerHTML += val.presentation2();}