const jwt = require('jsonwebtoken');
const {secret } = require('../config/');

module.exports = {
    createToken(_id){
        const payload = (_id)
        const options = {expiresIn: '30d'};
        const token = jwt.sign(payload,secret,options);
        return token;
    }, verifyToken(token){
        return new Promise((resolve, reject) => {
            const decodedToken = jwt.verify(token, secret, (error, payload)=> {
                if (error) {
                    reject(error);
                    return;
                } else {
                    resolve(payload);
                }
            });
        })
        
    }
}