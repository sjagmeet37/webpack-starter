
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






