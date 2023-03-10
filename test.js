(function(ext) {
    const {app} = require('electron');
    const os = require('os');
    const fs = require('fs');

    let username;

    // This function retrieves the username of the user that is running the executable file.
    ext.getUsername = function(callback) {
        callback(username || 'unknown');
    };

    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    var descriptor = {
        blocks: [
            ['R', 'get username', 'getUsername'],
        ],
    };

    ScratchExtensions.register('Username Extension', descriptor, ext);

    // This code retrieves the username and writes it to a file when the executable is launched.
    app.on('ready', function() {
        username = os.userInfo().username;
        fs.writeFile(os.homedir() + '/.username', username, function(err) {
            if (err) {
                console.log('Error writing username:', err);
            } else {
                console.log('Username written:', username);
            }
        });
    });
})({});
