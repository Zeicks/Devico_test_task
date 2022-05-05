const jsonData = require('./animals.json');
const allAnimals = [jsonData.pigs, jsonData.chickens, jsonData.cows]
const pigs = jsonData.pigs;
const chickens = jsonData.chickens;
const cows = jsonData.cows;
function animals(arr) {
    pigLegs = pigs * 4;
    chickenLegs = chickens * 2;
    cowLegs = cows * 4;
    legTotal = chickenLegs + cowLegs + pigLegs;
    return legTotal;
}
console.log(animals());