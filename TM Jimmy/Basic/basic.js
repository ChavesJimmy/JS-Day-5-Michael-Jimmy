var animal1 = {
    Name : "Kanguru",
    Place : "Australia",
    Category : "Mammals",

    presentation : function(){
        return `I am a ${this.Name} , I live in ${this.Place} and I'm a ${this.Category}<br><br>`
    }
}
var animal2 = {
    Name : "Elefant",
    Place : "Africa",
    Category : "Mammals",

    presentation : function(){
        return `I am a ${this.Name} , I live in ${this.Place} and I'm a ${this.Category}<br><br>`
    }
}
var animal3 = {
    Name : "Panda",
    Place : "Asia",
    Category : "Mammals",

    presentation : function(){
        return `I am a ${this.Name} , I live in ${this.Place} and I'm a ${this.Category}<br><br>`
    }
}

document.getElementById("animals").innerHTML += animal1.presentation();
document.getElementById("animals").innerHTML += animal2.presentation();
document.getElementById("animals").innerHTML += animal3.presentation();

var car1 = {
    Brand : "Ferrari",
    MaxSpeed : "320 Km/H",
    YearOfProduction : "2015",

    presentation : function(){
        return `This is a ${this.Brand} , produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
    }
}
var car2 = {
    Brand : "Porsche",
    MaxSpeed : "270 Km/H",
    YearOfProduction : "2012",

    presentation : function(){
        return `This is a ${this.Brand} , produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
    }
}
var car3 = {
    Brand : "Mazerati",
    MaxSpeed : "310 Km/H",
    YearOfProduction : "2019",

    presentation : function(){
        return `This is a ${this.Brand} , produced in ${this.YearOfProduction} with a max speed of ${this.MaxSpeed}<br><br>`
    }
}

document.getElementById("cars").innerHTML += car1.presentation();
document.getElementById("cars").innerHTML += car2.presentation();
document.getElementById("cars").innerHTML += car3.presentation();

var person1 = {
    Name : "Bob",
    Age : 32,
    Hobbies : ["football", "cooking", "learning"],

    presentation : function(){
        return `This is ${this.Name} , he is ${this.Age} and he likes ${this.Hobbies}<br><br>`
    }
}
var person2 = {
    Name : "Max",
    Age : 12,
    Hobbies : ["lego", "candies"],

    presentation : function(){
        return `This is ${this.Name} , he is ${this.Age} and he likes ${this.Hobbies}<br><br>`
    }
}
var person3 = {
    Name : "Jane",
    Age : 72,
    Hobbies : ["walking", "talking"],

    presentation : function(){
        return `This is ${this.Name} , she is ${this.Age} and she likes ${this.Hobbies}<br><br>`
    }
}

document.getElementById("persons").innerHTML += person1.presentation();
document.getElementById("persons").innerHTML += person2.presentation();
document.getElementById("persons").innerHTML += person3.presentation();