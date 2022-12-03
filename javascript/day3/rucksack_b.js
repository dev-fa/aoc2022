const fs = require('fs');
const file = './input.txt';

function findCommon(str1, str2, str3) {
    for (let i in str1) {
        if (str2.includes(str1[i])) {
            if (str3.includes(str1[i])) {
                return str1[i];
            }
        }
    }
    return
};

function findPriority(str1, str2, str3) {
    // Uppercase - 38
    // Lowercase - 96
 
    let common = findCommon(str1, str2, str3);
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
        if ((i + 1) % 3 == 0) {
            sum += findPriority(arr[i], arr[i-1], arr[i-2])
        }
    }
    console.log(sum);
});