
module.exports = function (app) {
    app.use('/', require('./routes/about'));
    app.use('/', require('./routes/blacklist'));
    app.use('/', require('./routes/commands'));
    app.use('/', require('./routes/currency'));
    app.use('/', require('./routes/followers'));
    app.use('/', require('./routes/games'));
    app.use('/', require('./routes/giveaway'));
    app.use('/', require('./routes/groups'));

    app.use('/', require('./routes/help'));
    app.use('/', require('./routes/home'));
    app.use('/', require('./routes/integration'));
    app.use('/', require('./routes/music'));
    app.use('/', require('./routes/profile'));
    app.use('/', require('./routes/quotes'));
    app.use('/', require('./routes/remote'));
    app.use('/', require('./routes/settings'));
    app.use('/', require('./routes/setupoverlay'));
    app.use('/', require('./routes/template'));
    app.use('/', require('./routes/test'));
    app.use('/', require('./routes/timers'));
    app.use('/', require('./routes/user'));
    app.use('/', require('./routes/users'));
    app.use('/', require('./routes/variables'));
    app.use('/', require('./routes/viewoverlay'));
    console.log("Loaded routes")
};
