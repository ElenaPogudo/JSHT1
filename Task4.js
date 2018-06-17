const request = require('request');


request('http://services.groupkt.com/country/get/all', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }


    JSON.parse(JSON.stringify(body.RestResponse.result), function (key, value) {
        if ((key == 'name') || (key == 'alpha2_code') || (key == 'alpha3_code')) {
            console.log(value);

        }//просто выводит все страны и все их коды
    });
});
