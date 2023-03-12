(function(ext) {
  // Get the Windows username
  const { os } = require('node-os-utils');

  ext.getWindowsUsername = function(callback) {
    os.userInfo().username.then(function(username) {
      callback(username);
    }).catch(function(err) {
      console.error(err);
      callback("");
    });
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ['R', 'windows username', 'getWindowsUsername'],
    ],
  };

  // Register the extension
  ScratchExtensions.register('Windows Username Extension', descriptor, ext);
})({});
