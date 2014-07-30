'use strict';


module.exports = function pledge(resolve, reject) {
    return function obligation(err, data) {
        if (err) {
            return reject(err);
        }
        return resolve.apply(null, arguments);
    };
};