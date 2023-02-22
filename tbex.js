(function (ext) {
  // Define a new block that opens a pop-up window
  ext.openPopUp = function (url) {
    window.open(url, '_blank', 'width=500,height=500');
  };

  // Define a new block that shows a warning dialog
  ext.showWarningDialog = function (message) {
    window.alert(message);
  };

  // Define a new block that moves the window to the specified X and Y coordinates
  ext.moveWindowTo = function (x, y) {
    window.moveTo(x, y);
  };

  // Define the descriptor for the new category of blocks
  var descriptor = {
    blocks: [
      [' ', 'open pop-up window with URL %s', 'openPopUp', 'https://example.com'],
      [' ', 'show warning dialog with message %s', 'showWarningDialog', 'This is a warning message.'],
      [' ', 'move window to X: %n Y: %n', 'moveWindowTo', 0, 0],
    ],
  };

  // Register the extension with ScratchExtensions
  ScratchExtensions.register("maugli's windows tools", descriptor, ext);
})({});
