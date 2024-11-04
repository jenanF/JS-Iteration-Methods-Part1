// CHALLENGE 1 **Logger**
let names = ['jenan', 'anwar', 'mshary', 'salman'];

const logger = function (name) {
    return name.forEach(function (n) {
        console.log(n);
    });
}

logger(names);



// CHALLENGE 2 **F to C**
let temperture = [90, 120, 80, 350];

function FtoC(temp) {
    return (temp - 32) * (5 / 9);
}

const convert = temperture.map(FtoC);

console.log(convert);

// CHALLENGE 3 ***hottestDays*
const hottestDays = function (temperatures, threshhold) {
    console.log(temperatures.filter(function (temp) {
        return temp > threshhold;
    }));
}

hottestDays(temperture, 100);

// CHALLENGE 4 **logHottestDays**
hottestDays(temperture.map(FtoC), FtoC(100));