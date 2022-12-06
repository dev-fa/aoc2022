const fs = require('fs');
const file = './input.txt';

let total = 0;
let data = fs.readFileSync(file, 'utf8');
data.split('\n').forEach(line => {
    let pairs = line.split(',');
    total += checkIfContained(pairs[0], pairs[1]);
});
console.log(total);


function checkIfContained(range1, range2) {
    range1 = range1.split('-');
    range2 = range2.split('-');
    let arr1 = [];
    let arr2 = [];
    for (let i = parseInt(range1[0]); i <= parseInt(range1[1]); i++) {
        arr1.push(i);
    }
    for (let i = parseInt(range2[0]); i <= parseInt(range2[1]); i++) {
        arr2.push(i);
    }

    if (arr1.length > arr2.length) {
        for (let i in arr2) {
            if (arr1.includes(arr2[i])) {
                return 1;
            }
        }
        return 0;
    } else {
        for (let i in arr1) {
            if (arr2.includes(arr1[i])) {
                return 1;
            }
        }
        return 0;
    }
}