const fs = require('fs');
const file = './input.txt';

let totalScore = 0;

function playGame(pChoice, oChoice) {
    // Outcome = X, Y, Z
    // Opponent choice = A, B, C
    // Rock = A
    // Paper == B
    // Scissors = C
    // 1 Point for Rock, 2 Points Paper, 3 Point Scissors
    // + Outcome = (0 Lose, 3 Draw, 6 Win)
    let sum = 0;
    let r = 1;
    let p = 2;
    let s = 3;

    if (pChoice == 'X' && oChoice == 'A') {
        // Lose, rock
        sum += s;
    } else if (pChoice == 'X' && oChoice == 'B') {
        // Lose, paper
        sum += r;
    } else if (pChoice == 'X' && oChoice == 'C') {
        // Lose, scissors
        sum += p;
    } else if (pChoice == 'Y' && oChoice == 'A') {
        // Tie, rock
        sum += 3 + r;
    } else if (pChoice == 'Y' && oChoice == 'B') {
        // Tie, paper
        sum += 3 + p;
    } else if (pChoice == 'Y' && oChoice == 'C') {
        // Tie, scissors
        sum += 3 + s;
    } else if (pChoice == 'Z' && oChoice == 'A') {
        // Win, rock
        sum += 6 + p;
    } else if (pChoice == 'Z' && oChoice == 'B') {
        // Win, paper
        sum += 6 + s;
    } else if (pChoice == 'Z' && oChoice == 'C') {
        // Win, scissors
        sum += 6 + r;
    }

    return sum;
};


fs.readFile(file, 'utf8', (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    let arr = data.split("\n")
    
    for (let i = 0; i < arr.length; i++) {
        let player = arr[i].substring(2, 3);
        let opponent = arr[i].substring(0, 1);
        totalScore += playGame(player, opponent);
    }

    console.log(totalScore);
});