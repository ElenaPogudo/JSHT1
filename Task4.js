const request = require('request');


request('http://services.groupkt.com/country/get/all', {json: true}, (err, res, body) => {
    if (err) {
        return console.log(err);
    }


    let jsObjects = JSON.parse(JSON.stringify(body.RestResponse.result));

    jsObjects.forEach((function(element) {

        if(element.name=='Belarus')  {//probably need input from command line and check right country name, but i have no more time
            console.log('Country: '+element.name+', 2digit code: '+ element.alpha2_code+', 3digit code: '+element.alpha3_code+'.');
        }
    }));

});
