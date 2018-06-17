const fs = require('fs');



function splitFileByLines(file) {
    let arrayOfLines = fs.readFileSync(file, "utf8").split('\n');
    let result=[];
    for (var i =0; i<arrayOfLines.length; i++){
        if (i % 2 == 0) continue;
        result.push(arrayOfLines[i]);
    }

    console.log(result.join('\n'));
}


splitFileByLines("1.txt");