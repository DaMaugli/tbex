(function(ext) {
  // Get the Windows username
  ext.getWindowsUsername = function(callback) {
    if (process && process.env && process.env.USERNAME) {
      var username = process.env.USERNAME;
      callback(username);
    } else {
      callback("");
    }
  };

  // Block and block menu descriptions
  var descriptor = {
    blocks: [
      ['r', 'windows username', 'getWindowsUsername'],
    ],
  };

  // Register the extension
  ScratchExtensions.register('Windows Username Extension', descriptor, ext);
})({});
