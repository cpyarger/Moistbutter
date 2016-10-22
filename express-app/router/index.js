module.exports = function (app) {
    app.use('/', require('./routes/index'));
};
module.exports = function (app) {
    app.use('/giveaway', require('./routes/giveaway'));
};
