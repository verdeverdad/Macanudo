console.log("hellow world");
console.log("hola mundillo");


function alerta() {
    console.log("queee");
}
alerta();

console.log(20 == 18)
console.log("hola" != "Hola")
console.log(20 == 20)

var score = 100

console.log(score == 100)
console.log("hola" && "Hola") == "HOLA"

var result = 42

if (result > 40) {
    console.log("felicidades")
}
else { console.log("lo siento") }


var vagon0 = "bagon0"
var vagon1 = "bagon1"
var vagon2 = "bagon2"
var vagon3 = "bagon3"
var vagon4 = "bagon4"

console.log(vagon0)


function listaArray(arr, arr2) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "red") {
            console.log(i + i);
        } else if (arr2[i] == "blue") {
            console.log(i, arr[i], arr2[i])
        }

        else { console.log(i + 100, arr[i]) }
    }
}
var colors = ["blue", "red", "white", "black"]
var col = ["blue", "black", "red", "white"]

listaArray(col, colors);

var miObjeto = {}
miObjeto.saludo = "HOla"
miObjeto.despedida = "chaU"
console.log(miObjeto)

var objeto = {
    saludo: "hola",
    saludo2: "chacha"
}
console.log(objeto)
objeto.otro = "otro"
console.log(objeto)

var car1 = {};
car1.color = "red";
console.log(car1);
car1["color"] = "green"; //modificar valor de propiedad color
car1["speed"] = 200;
car1.speed = 100;
console.log(car1);

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
/* Sobre la base del hecho de que la notación de corchetes puede evaluar expresiones, accedí a la propiedad arrOfKeys[i] en el objeto drone. 
Este valor cambió en cada bucle mientras se ejecutaba el bucle for.
Específicamente, la primera vez que se ejecutó, se evaluó así: 
El valor de i era 0 
El valor de arrOfKeys[i] era arrOfKeys[0], que era "speed" 
Por lo tanto, drone[arrOfKeys[i]] se evaluó como drone["speed"],que es igual a 100
Esto me permitió repetir cada uno de los valores almacenados dentro del objeto drone, en función de cada una de las claves de sus propiedades.*/



var fruits = [];
fruits.push("apple"); // ['apple']
console.log(fruits);
fruits.push('pear'); // ['apple', 'pear']
console.log(fruits);
fruits.pop("pear");
console.log(fruits)

function arrNuevo(uno, dos, tres) {
    var arr = []
    arr.push(uno);
    arr.push(dos);
    arr.push(tres);
    console.log(arr)
    return arr;
}
arrNuevo('dios', "diablo", 'yo');

function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    console.log(arr)
    return arr;
}

arrayBuilder("uno", "dos", "tres")
var grace = "hola";
var simpleArr = arrayBuilder('apple', 'pear', 'plum');
console.log(simpleArr);
var que = "Wo".concat("rl").concat("d");
console.log(que)
var h = "ho-ho-ho".indexOf('o');
console.log(h);
grace.split("h");
console.log(grace)


//objetos math metodos integrados

Math.random();
var decimal = Math.random();
console.log(decimal);
console.log(decimal * 10);

var rounded = Math.ceil(0.4);
console.log(rounded);

var aleatorio = Math.random();

var redondo = Math.ceil(aleatorio);
console.log(redondo);

var leters = "abc";

for (i = 0; i < leters.length; i++) {
    console.log(leters[i] + " bien");
}

//array
var veggies = ["zanahoria", "tomate", "pepino"];
console.log(veggies.length);
console.log(veggies[0]);
console.log(veggies[1]);


for (i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}


//string
var gretting = "Mobbi"
console.log(gretting.length);

console.log(gretting[0]);
console.log(gretting[1]);

for (i = 0; i < gretting.length; i++) {
    console.log(gretting[i]);
}

var gret = "hello";
var user = 'Lisa';

//console.log( gret.pop() );
console.log(gret + " " + user);
console.log(gret.concat(user));


var greet = "Hello, ";
var place = "World"
//longitud de un string
console.log(greet.length);
//Para leer cada carácter individual en un índice específico en una cadena, comenzando desde cero, puedo usar el método charAt():  
console.log(greet.charAt(0));
//El método concat() une dos cadenas:  
console.log("Wo".concat("rl").concat("d"));
//indexOf devuelve la ubicación de la primera posición que coincide con un carácter: 
console.log("ho-ho-ho".indexOf('h'));
//lastIndexOf encuentra la última coincidencia; de lo contrario, funciona igual que indexOf.
console.log("ho-ho-ho".lastIndexOf('h'));

//El método split corta la cadena en una matriz de subcadenas:
"ho-ho-ho".split("-"); // ['ho', 'ho', 'ho']
//cambiar las mayúsculas y minúsculas de las cadenas.
greet.toUpperCase(); // "HELLO, "
greet.toLowerCase(); // "hello, "

var car = {}; //declaración de objeto
car.mileage = 98765;
car.color = "red"; //le agrego dos propiedades

//agrego un metodo(funcion)
car.turnTheKey = function () {
    console.log("The engine is running")
};
car.lightsOn = function () {
    console.log("The lights are on.");
}
console.log(car);
car.lightsOn();
car.turnTheKey();

//typeof te dice que tipo de parametro es string numero o booleano
var test = typeof ([1, 2, 3])
//test = typeof(1<2)
console.log(test)

console.log(typeof 42);

//GESTION DE ERRORES
try {
    console.log(a + b);
} catch (err) {
    console.log(err);
    console.log("igual funciona")
}


try {
    throw new ReferenceError();
} catch (err) {
    console.log(err);
    console.log("igual funciona")
}

//ejemplo de programacion funcional
//FUNCIONES DE PRIMERA CLASE
function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if (useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber());


//FUNCIONES DE ORDEN SUPERIOR
addTwoNums(specificNum(), specificNum());
addTwoNums(specificNum(), randomNum())

//FUNCIONES PURAS

addTwoNums(5, 6);
//ejemplo de programacion funcional


//EJEMPLO PROGRAMACION ORIENTADA A OBJETOS

var zapatos1 = {
    precio: 100,
    impuestos: 20,
    precioTotal: function () {
        var calcular = zapatos1.precio * zapatos1.impuestos;
        console.log('precioTotal', calcular);
    }
}
zapatos1.precioTotal();

var zapatos2 = {
    precio: 50,
    impuestos: 20,
    precioTotal: function () {
        var calcular = zapatos2.precio * zapatos2.impuestos;
        console.log('precioTotal', calcular);
    }
}
zapatos2.precioTotal();

//ejemplo mejorado

var zapatos1 = {
    precio: 100,
    impuestos: 20,
    precioTotal: function () {
        var calcular = this.precio * this.impuestos;
        console.log('precioTotal', calcular);
    }
}
zapatos1.precioTotal();

//CLASES

class Car {
    constructor(color, año) {
        this.color = color;       //el constructor guarda los parametros
        this.año = año;
    }
    mostrar() {                //las funciones van sin palabra clave son metodos
        console.log('turbo is one')
    }
}
const car2 = new Car("azul", 200); //creo el nuevo objeto 
car2.mostrar();   //uso sus datos

//poliformismo
const bicycle = {
    bell: function () {
        return "Ring, ring! Watch out, please!"
    }
}
bicycle.bell();
const door = {
    bell: function () {
        return "Ring, ring! Come here, please!"
    }
}
console.log(door.bell());
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);

console.log("abc".concat("def"));
console.log(["abc"].concat(["def"]))
console.log(["abc"] + ["def"]);

class Bird1 {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird1 {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird1 {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

//constructores
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function () {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}
console.log(kiwiIcecream)

let apple = new String("apple");
apple; // --> String {'apple'}

let pear = "pear";
pear; // --> "pear"
/*La variable pear es un literal de cadena; es decir, 
un valor primitivo de Javascript.

La variable pear, al ser un valor primitivo, 
siempre tendrá más rendimiento que la variable apple, que es un objeto.

Además de ser más eficaz, debido al hecho de que cada objeto en JavaScript
 es único, no puede comparar un objeto String con otro objeto String, 
 incluso cuando sus valores son idénticos.
 Además de no usar constructores para construir versiones de objetos de primitivos,
  es mejor no usar constructores cuando crees objetos simples y comunes*/


//CLASES

class Train {    //superclase
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {   //subclase
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.



//construir un objeto
class Animal {
    constructor(color = 'yellow', energy = 100) {
        this.color = color;
        this.energy = energy;
    }
    isActive() {
        if (this.energy > 0) {
            this.energy -= 20;
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy == 0) {
            this.sleep();
        }
    }
    sleep() {
        this.energy += 20;
        console.log('Energy is increasing, currently at:', this.energy)
    }
    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canClimbTrees = canClimbTrees;
        this.canJumpHigh = canJumpHigh;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class Bird extends Animal {
    constructor(sound = 'chirp', canFly = true, color, energy) {
        super(color, energy);
        this.sound = sound;
        this.canFly = canFly;
    }
    makeSound() {
        console.log(this.sound);
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.houseCatSound = houseCatSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.houseCatSound);
    }
}

class Tiger extends Cat {
    constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
        super(sound, canJumpHigh, canClimbTrees, color, energy);
        this.tigerSound = tigerSound;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        console.log(this.tigerSound);
    }
}

class Parrot extends Bird {
    constructor(canTalk = false, sound, canFly, color, energy) {
        super(sound, canFly, color, energy);
        this.canTalk = canTalk;
    }
    makeSound(option) {
        if (option) {
            super.makeSound();
        }
        if (this.canTalk) {
            console.log("I'm a talking parrot!");
        }
    }
}

var fiji = new Parrot(false); // we're passing `false` to the constructor so that fiji can't talk
var polly = new Parrot(true); // we're passing `true` to the constructor so that polly can talk

fiji.makeSound(); // undefined
fiji.makeSound(true); // chirp

polly.makeSound(); // I'm a talking parrot!
polly.makeSound(true); // chirp, I'm a talking parrot!

polly.color; // yellow
polly.energy; // 100

polly.isActive(); // Energy is decreasing, currently at: 80

var penguin = new Bird("shriek", false, "black and white", 200); // setting all the custom properties
penguin; // Bird {color: 'black and white', energy: 200, sound: 'shriek', canFly: false }

penguin.sound; // 'shriek'
penguin.canFly; // false
penguin.color; // 'black and white'
penguin.energy; // 200
penguin.isActive(); // Energy is decreasing, currently at: 180

var leo = new HouseCat();

// leo, no purring please:
leo.makeSound(false); // meow
// leo, both purr and meow now:
leo.makeSound(true); // purr, meow

var cuddles = new Tiger();
cuddles.makeSound(false); // Roar!
cuddles.makeSound(true); // purr, Roar!


// Task 1: Code a Person class

class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        this.energy -= 10;
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy);
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var inter = new Worker("Bob", 21, 110, 0, 10);
    inter.goToWork();

    return inter;
}

// Task 4: Code a manager object, methods
function manager() {
    var manager = new Worker("Alice", 30, 120, 100, 30);

    manager.doSomethingFun();
    return manager;
}

console.log(intern())
console.log(manager())


//literales de plantilla

let greets = "Hello";
let places = "World";
console.log(`${greets} ${places} !`)

//ESCUCHA DE EVENTOS
const target = document.querySelector("body");

function handleClick(){
    console.log("click the body");
}

target.addEventListener('click', handleClick)


var h1 = document.createElement('h1')
h1.innerText = "Type into the input to make this text change"

var input = document.createElement('input')
input.setAttribute('type', 'text')

document.body.innerText = '';
document.body.appendChild(h1);
document.body.appendChild(input);

input.addEventListener('change', function() {
    h1.innerText = input.value
})


//estructura de datos

const frui = ['kiwi', 'mango', 'apple', 'pear'];
function appendIndex(frui, index) {
    console.log(`${index}. ${frui}`)
}
frui.forEach(appendIndex);
/*el método forEach() acepta una función que funcionará en cada elemento de la matriz. El primer parámetro de esa función es el elemento de la matriz actual en sí, y el segundo parámetro (opcional) es el índice.

Muy a menudo, la función que debe usar el método forEach() se pasa directamente a la llamada del método de la siguiente manera:
const veggi = ['onion', 'garlic', 'potato'];
veggi.forEach( function(frui, index) {
    console.log(`${index}. ${frui}`);
});

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})


const resultado = [];
const drones = {
    speed: 100,
    color: 'yellow'
}
const dronesKeys = Object.keys(drones);
dronesKeys.forEach( function(key) {
    resultado.push(key, drones[key])
})
console.log(resultado);


let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);

const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array*/

