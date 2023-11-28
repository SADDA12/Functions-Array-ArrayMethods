// Q1.
let animals = ["cat","dog","bear","goat","sheep","chicken","tiger"]
function sliceArray(animals){
    result = animals.slice(2,6)
    console.log(result)
}
sliceArray(animals)
// arrow function
let sliceArray = (animals) => console.log(animals.slice(2,6))
sliceArray(animals)



// Q2.
let country = ["Ghana","Togo","Nigeria","Kenya","Sudan","Libya"]
function spliceArray(country){
    country.splice(3,2,"newElement1","newElement2")
    console.log(country)
}
spliceArray(country)
// arrow function
let spliceArray = (country) => {
    country.splice(3,2,"newElement1","newElement2")
    console.log(country)
}
spliceArray(country)


// Q3.
let num = [2,4,6,8,10,12]
function pushNum(num){
    num.push("newElement1","newElement2")
    console.log(num)
}
pushNum(num)
// arrow function
let pushNum = (num) => {
    num.push("newElement1","newElement2")
    console.log(num)
}
pushNum(num)


// Q4.
let alph = ["a","b","c","d","e"]
function popAlph(alph){
    alph.pop()
    console.log(alph)
}
popAlph(alph)
// arrow function
let popAlph = (alph) => {
    alph.pop()
    console.log(alph)
}
popAlph(alph)


// Q5.
let numbers = [1,3,5,7,9]
function addEl(numbers){
    numbers.unshift("newElement1","newElement2")
    console.log(numbers)
}
addEl(numbers)
// arrow function
let addEl = (numbers) => {
    numbers.unshift("newElement1","newElement2")
    console.log(numbers)
}
addEl(numbers)


// Q6.
function removeEl(numbers){
    numbers.shift()
    console.log(numbers)
}
removeEl(numbers)
// arrow function
let removeEl = (numbers) => {
    numbers.shift()
    console.log(numbers)
}
removeEl(numbers)


// Q7.
function squareEl(numbers) {
  const newArray = [];

  numbers.forEach(function (number) {
    const squaredValue = number * number;
    newArray.push(squaredValue);
  });

  return newArray;
}
console.log(squareEl(numbers))

// arrow function
let squareEl = (numbers) => {
    const newArray = [];

  numbers.forEach(function (number) {
    const squaredValue = number * number;
    newArray.push(squaredValue);
  });
  return newArray;
}
console.log(squareEl(numbers))


// Q8.
let NumBers = [5,10,15,20,25]

function doubleEl(NumBers) {
    const newArray = [];

    NumBers.forEach(function (x) {
        const result = x * 2;
        newArray.push(result);
    });
    return newArray;
}
console.log(doubleEl(NumBers));

// arrow function
let doubleElement = (NumBers) => {
    const newarray = [];

    NumBers.forEach(function(x) {
        let result = x * 2;
        newarray.push(result);
    });
    return newarray;
}
console.log(doubleElement(NumBers));


// Q9.
let numbs = [1,2,3,4,5,6,7,8,9]

function removeOdds(numbs) {
    const newArr = [];

    numbs.forEach(function(a) {
        if(a % 2 === 0) {
            newArr.push(a)
        }
    });
    return newArr;
}
console.log(removeOdds(numbs));

// arrow function
let removeOdds = (numbs) => {
    const newArr = [];

    numbs.forEach(function (a) {
        if(a % 2 ===0) {
            newArr.push(a)
        }
    });
    return newArr;
}
console.log(removeOdds(numbs));


// Q10.
let a = [0,1]
let b = [2,3]

function concatenateArrays(a,b) {
    b.forEach(function (el) {
        a.push(el);
    });
    return a
}

console.log(concatenateArrays(a,b));

// arrow function
let concatenateArrays = (a,b) => {
    b.forEach(function(el) {
        a.push(el);
    });
    return a
}
console.log(concatenateArrays(a,b))
