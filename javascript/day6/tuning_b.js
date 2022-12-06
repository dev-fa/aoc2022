const fs = require('fs');
const file = './input.txt';

let data = fs.readFileSync(file, 'utf-8');
let marker = '';
let markerIndex = 0;
let markerElements = 14;
for (let i = 0; i < data.length - 1 - markerElements; i++) {
    marker = new Set([data[i], data[i+1], data[i+2], data[i+3], data[i+4], data[i+5], 
                      data[i+6], data[i+7], data[i+8], data[i+9], 
                      data[i+10], data[i+11], data[i+12], data[i+13]]);
    if (marker.size === markerElements) {
        markerIndex = i + markerElements;
        break;
    }
}
console.log(marker.values());
console.log(markerIndex);