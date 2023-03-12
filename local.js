(function(ext) {
  // Get the Windows username
  ext.getWindowsUsername = function(callback) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        callback(xhr.responseText);
      }
    };
    xhr.open('GET', 'https://damaugli.github.io/tbex/getWindowsUsername.php');
    xhr.send();
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
