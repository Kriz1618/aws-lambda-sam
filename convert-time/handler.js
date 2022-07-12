const moment = require('moment');

exports.convertTime = async(event) => {
    console.log('Convert time works!!');

    let tz = event.queryStringParameters?.tz || 'GMT 0';
    let formattedDate = moment().format();

    if (tz !== null) {
        formattedDate = moment().tz(tz).format();
    }

    const message = `The time in ${tz} is ${formattedDate}`;

    const response = {
        statusCode: 200,
        body: message,
    }

    return response;
}