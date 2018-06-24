const fs = require('fs');

function splitFileByLines(file) {
    const arrayOfLines = fs.readFileSync(file, "utf8").split('\n');
    let result=[];

    arrayOfLines.forEach(function(item, i) {
        if (i % 2 === 0) result.push(item);
    });

    console.log(result.join('\n'));
}

splitFileByLines("1.txt");