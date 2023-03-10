(function(ext) {
  var os = require('os');
  var fs = require('fs');

  // This function retrieves the username of the user that is running the executable file.
  ext.getUsername = function(callback) {
      fs.readFile(os.homedir() + '/.username', 'utf8', function(err, data) {
          if (err) {
              callback('unknown');
          } else {
              callback(data.trim());
          }
      });
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
      }
  );
({});
