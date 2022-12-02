const fs = require('fs');
const file = './input.txt';

let totalScore = 0;

function playGame(pChoice, oChoice) {
    // Player choice = X, Y, Z
    // Opponent choice = A, B, C
    // Rock = X and A
    // Paper == Y and B
    // Scissors = Z and C
    // 1 Point for Rock, 2 Points Paper, 3 Point Scissors
    // + Outcome = (0 Lose, 3 Draw, 6 Win)
    let sum = 0;

    if (pChoice == 'X' && oChoice == 'A') {
        // Rock, rock
        sum += 4; // Rock + Tie - 1+3
    } else if (pChoice == 'X' && oChoice == 'B') {
        // Rock, paper
        sum += 1; // Rock + Lose - 1+0
    } else if (pChoice == 'X' && oChoice == 'C') {
        // Rock, scissors
        sum += 7; // Rock + Win - 1+6
    } else if (pChoice == 'Y' && oChoice == 'A') {
        // Paper, rock
        sum += 8; // Paper + Win - 2+6
    } else if (pChoice == 'Y' && oChoice == 'B') {
        // Paper, paper
        sum += 5; // Paper + Tie - 2+3
    } else if (pChoice == 'Y' && oChoice == 'C') {
        // Paper, scissors
        sum += 2; // Paper + Lose - 2+0
    } else if (pChoice == 'Z' && oChoice == 'A') {
        // Scissors, rock
        sum += 3; // Scissors + lose - 3+0
    } else if (pChoice == 'Z' && oChoice == 'B') {
        // Scissors, paper
        sum += 9; // Scissors + win - 3+6
    } else if (pChoice == 'Z' && oChoice == 'C') {
        // Scissors, scissors
        sum += 6; // Scissors + tie = 3+3
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