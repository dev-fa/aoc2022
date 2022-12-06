const fs = require('fs');
const file = '/home/f/Repos/aoc2022/javascript/day6/input.txt';

let data = fs.readFileSync(file, 'utf-8');
let marker = '';
let markerIndex = 0;
let markerElements = 4;
for (let i = 0; i < data.length - 1 - markerElements; i++) {
    marker = new Set([data[i], data[i+1], data[i+2], data[i+3]])
    if (marker.size === 4) {
        markerIndex = i + markerElements;
        break;
    }
}
console.log(marker.values());
console.log(markerIndex);