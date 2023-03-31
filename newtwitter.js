const https = require('https');

let offset = 300;
let limit = 0;
let total = 16000;

const getUsers = () => {
    https.get(`https://ms-sc-solana-staging.socialconnector.io/solana/vrnrc/${limit}/${offset}`, (res) => {
        let data = '';
        res.on('data', (chunk) => {
            data += chunk;
        });
        res.on('end', () => {
            const users = ('done '+limit + ' '+offset);
            console.log(users);
            limit = offset;
            offset += 300;
            if (offset <= total) {
                // offset += limit;
                getUsers();
            }
        });
    }).on('error', (e) => {
        console.error(e);
    });
}

getUsers();
