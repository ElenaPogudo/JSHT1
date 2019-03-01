const fs = require('fs');

const clearFile = (resultFileName) => {
    return new Promise((resolve, reject) => {
        fs.writeFileSync(resultFileName, '', (err) => {
            reject(err);
        })
    });

};


const checkFile = (startFileName) => {
    let inf = fs.readFileSync(startFileName, "utf8");
    JSON.parse(inf, function (key, value) {

            if (key === 'flag') {
                if (typeof value === "boolean") {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }


            if (key === 'myPromises') {
                if (Array.isArray(value)) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'element') {
                if (typeof value === "object") {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'screenshot') {
                if ((typeof value === "object") && (value === undefined)) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'elementText') {
                if (typeof value === "string") {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'allElementsText') {
                if ((typeof value === "string") && (value.match("const"))) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'counter') {
                if (value > 10) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'config') {
                if (value.toString() === "Common") {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'const') {
                if (value.toString() === "FiRst") {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'parameters') {
                if ((value.length === 8) && (Array.isArray(value))) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }

            if (key === 'description') {
                if ((typeof value === "string") && (value.length > 5) && (value.length < 13)) {
                    console.log(key + ' - ok');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + " - ok" + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
                else {
                    console.log(key + ' - WARNING');
                    fs.appendFileSync('2TaskResults.txt', "Property: " + key + ", value: " + value + '\n', 'utf8', (err) => {
                        if (err) throw err;
                    });
                }
            }
        }

    );
    console.log('All warnings shown in 2TaskResylts.txt file');
};

clearFile('2TaskResults.txt').then(checkFile('2.json'));
