const request = require('request-promise-native');
const entered = process.argv[2];

const requestURI = 'http://services.groupkt.com/country/get/all';
const emptyEnterError = 'Sorry but for make this work you need to input some country full name.';
const wrongEnterError = 'Sorry but that country does not exist, try to input some country full name one more time.';

var resultCount=0;

function makeRequestAndShowResult() {
    request(requestURI, {json: true}, (err, res, body) => {
        if (err) {
            console.log(err)
        }
            body.RestResponse.result.forEach((function (element) {
                if (element.name === entered) {
                    console.log('Country: ' + element.name + ', 2digit code: ' + element.alpha2_code + ', 3digit code: ' + element.alpha3_code + '.');
                    resultCount=resultCount+1
                }
            }));
        if (resultCount === 0){
            console.log(wrongEnterError)
        }
    })
}


function checkIfUserInsertCountry() {
    if (entered === undefined) {
        console.log(emptyEnterError);
        resultCount=resultCount+1;
    }
}


checkIfUserInsertCountry();
makeRequestAndShowResult();