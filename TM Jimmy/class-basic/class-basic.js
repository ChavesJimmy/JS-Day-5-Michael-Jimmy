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

    let animalA = new Animal("Eagle", "North America", "oviparous");
    let animalB = new Animal("Eagle", "North America", "oviparous");
    let animalC = new Animal("Pinguin", "Antarctica", "oviparous");


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
        return `This is a(n) ${this.Brand} , produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
    }
}
let carA = new Car("ferrari", "340 km/H", 1998);
let carB = new Car("skoda", "150 km/H", 2008);
let carC = new Car("peugeot", "200 km/H", 2013);

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
    let personA = new Person ("Amelie", 4, ["candies", "chocolate", "play"]);
    let personB = new Person ("Mathieu", 5, ["volcan", "train", "play"]);
    let personC = new Person ("Maman", 32, ["Amelie", "Mathieu", "Papa"]);
    for (let val of personArray){
        document.getElementById("persons").innerHTML += val.presentation2();}