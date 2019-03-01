const request = require('request-promise-native')
const cname = process.argv[2];

function makeRequestAndShowResult() {
    request('http://services.groupkt.com/country/get/all', {json: true}, (err, res, body) => {
        if (err) {
            console.log(err)
        }

        body.RestResponse.result.forEach((function (element) {

            if (element.name == cname) {
                console.log('Country: ' + element.name + ', 2digit code: ' + element.alpha2_code + ', 3digit code: ' + element.alpha3_code + '.');
            }
        }));

    })
};

makeRequestAndShowResult();