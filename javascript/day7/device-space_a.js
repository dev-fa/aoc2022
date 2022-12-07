const fs = require('fs');
const file = '/home/f/Repos/aoc2022/javascript/day7/test.txt';


function returnSize(str) {
    return str.match(/(\d+)/)[0];
}


(function() {
    let data = fs.readFileSync(file, 'utf-8');
    let total = 0;
    let subtotal = 0;
    let dir = '';
    data.split('\n').forEach(line => {
        let output = line.split('\n')[0];
        if (output.search("cd") != -1) {
            dir = output.substring(5);
            if (subtotal <= 100000) {
                total += subtotal;
            }
            subtotal = 0;
        } else if (/\d/.test(output)) {
            subtotal += parseInt(returnSize(output));
        }
    });
    console.log(total);
})();