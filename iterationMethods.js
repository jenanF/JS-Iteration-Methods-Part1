const numbers = [10, 13, 20, 25, 38, 35, 40];

// TASK 1  **Filtering**
let greaterThan25 = numbers.filter(function (num) {
    return num >= 25;
});

console.log(greaterThan25);

let divisibleBy5 = numbers.filter(function (num) {
    return num % 5 === 0;
});

console.log(divisibleBy5);


// TASK 2  **Mapping**
let squaredArray = numbers.map(function (num) {
    return num * num;
});

console.log(squaredArray);

let multipliedBy2 = numbers.map(function (num) {
    return num * 2;
});

console.log(multipliedBy2);


// TASK 3   **Filtering && Mapping**
let greaterThan20 = numbers.filter(function (num) {
    return num >= 20;
});

let greaterThan20Squared = greaterThan20.map((function (num) {
    return num * num;
}));

console.log(greaterThan20Squared);

let divisibleBy5MultipliedBy3 = divisibleBy5.map(function (num) {
    return num * 3;
});

console.log(divisibleBy5MultipliedBy3)