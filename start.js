var exec = require('child_process').exec;

var child = exec('node ./TwitchServer/twitchWatch.js');
child.stdout.on('data', function(data) {
    console.log('TWITCH: ' + data);
});
child.stderr.on('data', function(data) {
    console.log('TWITCH: ' + data);
});
child.on('close', function(code) {
    console.log('Twitch closing code: ' + code);
});
child.on('connected', function(code) {
    console.log('Twitch Server Connected');
});


var child2 = exec('node ./web/server.js');
child2.stdout.on('data', function(data) {
    console.log('Web Server: ' + data);
});

child2.stderr.on('data', function(data) {
    console.log('Web Server: ' + data);
});

child2.on('close', function(code) {
    console.log('Web Server closing code: ' + code);
});

var child3 = exec('electron frontend.js');
child3.stdout.on('data', function(data) {
    console.log('Electron: ' + data);
});

child3.stderr.on('data', function(data) {
    console.log('Electron: ' + data);
});

child3.on('close', function(code) {
    console.log('Electron closing code: ' + code);

});
