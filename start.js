var exec = require('child_process').exec;



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
