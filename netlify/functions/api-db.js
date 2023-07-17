const data = require('../../public/db.json')
const headers = {
    'content-type': 'application/json' ,
    'Access-Control-Allow-Origin': "*"
};

exports.handler = async () => {
    return {
        body: JSON.stringify(data),
        statusCode: 200,
        headers: headers
    }
}