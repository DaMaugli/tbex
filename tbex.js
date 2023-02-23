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

  // Define a new block that resizes the window to the specified width and height
  ext.resizeWindow = function (width, height) {
    window.resizeTo(width, height);
  };

  // Define a new block that enters fullscreen mode
  ext.goFullscreen = function() {
    document.documentElement.requestFullscreen();
  };

  // Define a new block that exits fullscreen mode
  ext.exitFullscreen = function() {
    document.exitFullscreen();
  };

  // Define a new block that prompts the user with a confirmation message before closing the game
  ext.closeGameWithConfirmation = function() {
    if (confirm("Are you sure you want to close the game?")) {
      window.close();
    }
  };

  // Define a new block that closes the game without any confirmation prompt
  ext.closeGameWithoutConfirmation = function() {
    window.close();
  };

  // Define the descriptor for the new category of blocks
  var descriptor = {
    blocks: [
      [' ', 'open browser tab with URL %s', 'openPopUp', 'https://example.com'],
      [' ', 'show warning dialog with message %s', 'showWarningDialog', 'This is a warning message.'],
      [' ', 'move window to X: %n Y: %n', 'moveWindowTo', 0, 0],
      [' ', 'resize window to width %n height %n', 'resizeWindow', '500', '500'],
      [' ', 'fullscreen', 'goFullscreen'],
      [' ', 'exit fullscreen', 'exitFullscreen'],
      [' ', 'close game with confirmation', 'closeGameWithConfirmation'],
      [' ', 'close game without confirmation(crash)', 'closeGameWithoutConfirmation']
    ],
  };

  // Register the extension with ScratchExtensions
  ScratchExtensions.register("maugli's windows tools", descriptor, ext);
})({});
