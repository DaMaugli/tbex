(function (ext) {
  // move window to center
  ext.moveWindowToCenter = function() {
    // Get the dimensions of the window and screen
    var w = window.outerWidth;
    var h = window.outerHeight;
    var screenWidth = window.screen.availWidth;
    var screenHeight = window.screen.availHeight;
            
    // Calculate the new position for the window
    var left = Math.max(0, (screenWidth - w) / 2);
    var top = Math.max(0, (screenHeight - h) / 2);
            
    // Move the window to the new position
    window.moveTo(left, top);
  };

  // put blocks here
  var descriptor = {
    blocks: [
      [' ', 'move window to center', 'moveWindowToCenter']
    ],
  };

  // register the extension
  ScratchExtensions.register("Window Tools", descriptor, ext);
})({});
