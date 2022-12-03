const fs = require('fs');
const file = './input.txt';

function findCommon(str1, str2) {
    for (let i in str1) {
        if (str2.includes(str1[i])) {
            return str1[i];
        }
    }
    return
};

function findPriority(string) {
    // Uppercase - 38
    // Lowercase - 96
    const leftString = string.slice(0, string.length / 2);
    const rightString = string.slice(string.length / 2);
    let common = findCommon(leftString, rightString);
    if (common == common.toUpperCase()) {
        return common.charCodeAt(0) - 38;
    } else {
        return common.charCodeAt(0) - 96;
    }
};

// Read input file
fs.readFile(file, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    arr = data.split('\n');

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += findPriority(arr[i]);
    }
    console.log(sum);
});