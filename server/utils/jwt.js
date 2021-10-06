const jwt = require('jsonwebtoken');
const { secret } = require('../config/index')

module.exports = {
    createToken(_id) {
        const payloads = { _id };
        const options = { expiresIn: '30d' };
        const token = jwt.sign(payloads, secret, options);
        return token;
    },
    createApiToken(_id) {
        const payloads = { user: { id: _id } };
        const options = { expiresIn: '30d' };
        const token = jwt.sign(payloads, secret, options);
        return token;
    },
    verifyToken(token) {
        return new Promise((resolve, reject) => {
            const decodedToken = jwt.verify(token, secret, (err, payload) => {
                if (err) {
                    reject(err);
                    return;
                }
                //we could load paypload
                resolve(payload)
            });
        })

    }
};