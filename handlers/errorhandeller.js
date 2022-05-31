'use strict';

module.exports = (error, req, res, next) => {
    res.status(500).send("somthing is wrong?");
};
