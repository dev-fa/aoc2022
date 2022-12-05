const fs = require('fs');
const file = './input.txt';

let numArray = [];

fs.readFile(file, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    numArray = data.split('\n');
    numArray.push('');

    let firstHighestSum = 0;
    let secondHighestSum = 0;
    let thirdHighestSum = 0;


    firstHighestSum = findHighest(numArray, 0);
    secondHighestSum = findHighest(numArray, firstHighestSum);
    thirdHighestSum = findHighest(numArray, secondHighestSum);

    realHighestSum = firstHighestSum + secondHighestSum + thirdHighestSum;
    console.log(realHighestSum);
});


function findHighest(arr, currentHighest) {
    let highestSum = 0;
    let currentSet = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != "") {
            currentSet += parseInt(arr[i]);
        } else {
            if (currentSet > highestSum) { 
                if (currentSet >= currentHighest && currentHighest != 0) {
                    currentSet = 0;
                    continue;
                }
                highestSum = currentSet;
            }
            currentSet = 0;
        }
    };
    return highestSum;
};