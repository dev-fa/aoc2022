const fs = require('fs');
const file = './input.txt';

let testSupplies = [
    ['Z', 'N'],
    ['M', 'C', 'D'],
    ['P']
]

let supplies = [
    ['R', 'N', 'F', 'V', 'L', 'J', 'S', 'M'],
    ['P', 'N', 'D', 'Z', 'F', 'J', 'W', 'H'],
    ['W', 'R', 'C', 'D', 'G'],
    ['N', 'B', 'S'],
    ['M', 'Z', 'W', 'P', 'C', 'B', 'F', 'N'],
    ['P', 'R', 'M', 'W'],
    ['R', 'T', 'N', 'G', 'L', 'S', 'W'],
    ['Q', 'T', 'H', 'F', 'N', 'B', 'V'],
    ['L', 'M', 'H', 'Z', 'N', 'F']
]

let data = fs.readFileSync(file, 'utf-8');
data.split('\n').forEach(line => {
    let instruction = line.replace(/move|from|to/gi, '').trim().split("  ");
    supplies = moveStackElement(parseInt(instruction[0]), 
    parseInt(instruction[1]), parseInt(instruction[2]), supplies);
});
console.log(getLastElements(supplies));


function moveStackElement(amount, startStack, endStack, stackArray) {
    for (let i = 0; i < amount; i++) {
        stackArray[endStack-1].push(stackArray[startStack-1].pop());
    }
    return stackArray;
}


function getLastElements(stackArray) {
    let lastElements = '';
    for (let i = 0; i < stackArray.length; i++) {
        lastElements += stackArray[i][stackArray[i].length-1];
    }
    return lastElements
}