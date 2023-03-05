(function (ext) {
    // open tab
    ext.openPopUp = function (url) {
      window.open(url, '_blank', 'width=500,height=500');
    };
  
    // show warning dialog
    ext.showWarningDialog = function (message) {
      window.alert(message);
    };
  
    // move window
    ext.moveWindowTo = function (x, y) {
      window.moveTo(x, y);
    };
  
    // resize window
    ext.resizeWindow = function (width, height) {
      window.resizeTo(width, height);
    };
  
    // fullscreen
    ext.goFullscreen = function() {
      document.documentElement.requestFullscreen();
    };
  
    // exit fullscreen
    ext.exitFullscreen = function() {
      document.exitFullscreen();
    };
  
    // close with are u sure
    ext.closeGameWithConfirmation = function() {
      if (confirm("Are you sure you want to close the game?")) {
        window.close();
      }
    };
  
    // crash game
    ext.closeGameWithoutConfirmation = function() {
      window.close();
    };
  
    // get screen resolution
    ext.getScreenWidth = function() {
      return window.screen.width;
    };
  
    ext.getScreenHeight = function() {
      return window.screen.height;
    };
  
    // put blocks here
    var descriptor = {
      blocks: [
        [' ', 'open browser tab with URL %s', 'openPopUp', 'https://example.com'],
        [' ', 'show warning dialog with message %s', 'showWarningDialog', 'This is a warning message.'],
        [' ', 'move window to X: %n Y: %n', 'moveWindowTo', 0, 0],
        [' ', 'resize window to width %n height %n', 'resizeWindow', '500', '500'],
        ['r', 'screen width:', 'getScreenWidth'],
        ['r', 'screen height:', 'getScreenHeight'],
        [' ', 'fullscreen', 'goFullscreen'],
        [' ', 'exit fullscreen', 'exitFullscreen'],
        [' ', 'close game with confirmation', 'closeGameWithConfirmation'],
        [' ', 'close game without confirmation(crash)', 'closeGameWithoutConfirmation']
      ],
    };
  
    // this important thing lmao
    ScratchExtensions.register("maugli's windows tools", descriptor, ext);
  })({});
  
