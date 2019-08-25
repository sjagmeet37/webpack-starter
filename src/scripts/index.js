
console.log('Hello world');

// CONSTANT

const a = 43;
console.log(a);

//if using let after varibale is called it throws error but for var it's undefined 
// let is block scopped while var is not
// make if to true to see effect
if (false){ 
    let s = 47;
}else{
    var s = 47;
}
console.log(s);

//rest parameter

function carsId( ...allCarIds){

    allCarIds.forEach( id => console.log(id));
}

carsId(1,2,3);


// destruing array

let myIds = [1,2,3];
let [num1, num2, num3] = myIds;  
console.log(num1, num2, num3);

let num11, remainingNum;
[num11, ...remainingNum] = myIds;

console.log(num11, remainingNum);

//skipping numbers
[, ...remainingNum] = myIds;
console.log(num11, remainingNum);

//destruning object
// use [] for array and {} for object
let car = {id:700, style:'Hatch Back'};
let {id, style} = car;
console.log(id, style);

//won't work as es6 is disabled
let car2 = {id:700, style:'Hatch Back'};
let id1, style1;
({ id1, style1 } = car2);
console.log(id1, style1);

//both arrays and strings are called iterateables in js
// spread syntax
function spreadSyntax(index1, index2, index3){
    console.log(index1,index2,index3);
}

spreadSyntax(...myIds);
let myString = 'abc';
spreadSyntax(myString);

function spreadSyntaxWithRestSyntax(index1, index2, index3, ...remaing){
    console.log(index1,index2,index3);
    console.log(remaing);

}

// types in js

console.log(typeof(1));
console.log(typeof('hello'));
console.log(typeof(true));
console.log(typeof(function(){}));
console.log(typeof([1,2]));
console.log(typeof({}));
console.log(typeof(undefined));
console.log(typeof(NaN));
console.log(typeof(null));

// type conversion

console.log(Number.parseInt('55'));
console.log(Number.parseFloat('55.66'));


//equality operator

console.log(1 == 1);
console.log(1 === 1);

console.log(1 == '1'); // == automatically try type conversion while === not
console.log(1 === '1');

console.log(1 != '1'); // != automatically try type conversion while !== not
console.log(1 !== '1');

// unary operator
// ++variable
// --variable
// +variable 
// -variable converts negative to positive // check their working with string

//conditional operator
(5>6) ? console.log(true) : console.log(false);


//functions

function showMessage(){
    console.log('I\'m function');
}

showMessage();
showMessage();

//function with arg
function showMyMessage(message){
    console.log(message);
}
showMyMessage('meaasge 1');
showMyMessage('message 2');

function getSum(var1, var2){
    return var1 + var2;
}

console.log(getSum(5,9));

function startOuterFunction(){

    let message = 'Starting';

    let innerFunction = function(){
        //let message = 'Overriding'; //remove comment to see overriding and scoping
        console.log(message);
    };
    innerFunction();
}

startOuterFunction();

//block scope // only let supports block scoping 

var message = 'outside';
if (5 === 5){
    let message = 'inside';
    console.log(message);
}
console.log(message);

//IIFE Imediately Invoked Function Expression
//function is invoked immediatly after once it's declaration is read 
var app = ( function(){
    console.log('Inside IIFE');
    return {Index : 'True'};    
})();

console.log(app);

//closure holds on to variables of IIFE

let car3 = (function(){
    let carId = 345;
    let carName = 'Altis';
    let getCarId = function(){
        return this.carId;
    };
    let getCarName = function(){
        return this.carName;
    };

    //closure definition // before ':' is value that can be used outside to call closure and after ':' is value that is returned
    return{
        CarId: getCarId,
        carName: getCarName 
    };
})();

console.log(car3.CarId());
console.log(car3.carName()); 

//call and apply

let newCar = {carId: 789,
              carName : 'Bugatti'
}; 

console.log(car3.CarId.call(newCar));
console.log(car3.carName());

//apply missing

//bind keyword //makes copy of the function


//arraow function 

//function with no arg and no logic so value is returned staight away
let arrow1 = () => 1234;
console.log(arrow1);

//similar to above method but '_' is used instead of '()'
arrow1 = _ => 789;
console.log(arrow1);

// method accepts only one argument so parethesis is not required
arrow1 = singleArg => singleArg + 1234;
console.log(arrow1(789));

//method takes 2 arg's and if args are more than 1 parethesis are required
arrow1 = (val1, val2) => val1 + val2;
console.log(arrow1(10,8));

// if method is more than one line return keyword is required
arrow1 = (val1, val2) =>{
    let val3 = val1 + val2;
    return val3;
} ;
console.log(arrow1(10,9));

//Default parameter

let defaultParam = (city, state = 'Punjab') =>{
    return `city is ${city} and state is ${state}`;
};

console.log(defaultParam('Amritsar'));
console.log(defaultParam('Bengaluru', 'Karanataka'));

// Objects

let card = {}; //an empty object

let card1 = {
    suit : 'Hearts',
    value : 2
}; //object with values

console.log(card1.suit,card1.value);

//passing object to function (it's pass by reference)

function changeSuit(card){
    card.suit = 'clubs';
}

changeSuit(card1);
console.log(card1.suit,card1.value);

let cardArray = [

    {
        suit : 'Hearts',
        value : 2
    },
    {
        suit : 'clubs',
        value : 2
    }
];

console.log(cardArray);

//js built in objects ex. Number, Date, string functions

let date = new Date();
console.log(date.getDate());

let num = 2/0;
console.log(Number.isNaN());


/**
 * 
 * Constructor functions
 * 
 */
// this is empty constructor function
//convention is to declare it like class declaration in java
 function MyConstructorFunction(){
       
 };

 console.log(MyConstructorFunction());

 function Car(carId, carName){
    this.carId = carId;
    this.carName = carName;
    this.getCarId = function(){
        return this.carId;
    };
    this.getCarName = () => this.carName;
 };

 //object initilization and accessing 
 let myCar = new Car(1,'Discovery');
 console.log(myCar.carId, myCar.carName);

 myCar = new Car(2, 'Phantom');
 console.log(myCar.getCarId(), myCar.getCarName());


 //prototypes 
 // saves a memeory as function is created only once unlike constructor function where every object has it's own method copy

 function Bike(name){
    this.bikeName = name;
 }

 Bike.prototype.getBikeName = function(){
     return 'Bike Name is ' + this.bikeName;
 };
//extending prortype
 String.prototype.str = function( myArg ){
    return JSON.stringify(myArg);
 };
 
 Bike.prototype.strgify = function( myArg ){
    return JSON.stringify(myArg);
 };

 let myBike = new Bike('HayaBusa');
 console.log(myBike.getBikeName());


 // JSON

 let myObj = [
     {name : 'j1'},
     {name : 'j2'},
     {name : 'j3'}
 ];

 let jsonObj = JSON.stringify(myObj);
 console.log(jsonObj);
 console.log(JSON.parse(jsonObj)); 
 console.log('foo'.str('jsonObj'));

 console.log(myBike.strgify(myObj));// while extending prototype use object referece to access object
