const request = require('request');

for (let i = 0; i < 3; i++) {
    request('https://ms-sc-twitter.socialconnector.io/pull_users/300/1000', (error, response, body) => {
        console.log('error:', error);
        console.log('statusCode:', response && response.statusCode);
        console.log('body:', body);
    });
}
