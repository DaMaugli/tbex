// Define the ScratchX extension
(function(ext) {
    // Define a new block that opens a native Windows dialog box with a warning message
    ext.showWarningDialog = function (message) {
      window.alert(message);
    };
  
    // Define a new block that opens a pop-up window
    ext.openPopUp = function (url) {
      window.open(url, '_blank', 'width=500,height=500');
    };
    
    // Define a new block that moves the window to the specified coordinates
    ext.moveWindowTo = function (x, y) {
      window.moveTo(x, y);
    };
  
    // Define the descriptor for the new category of blocks
    var descriptor = {
      blocks: [
        [' ', 'show warning dialog with message %s', 'showWarningDialog', 'This is a warning message.'],
        [' ', 'open browser window with URL %s', 'openPopUp', 'https://example.com'],
        [' ', 'move window to x:%n y:%n', 'moveWindowTo', 0, 0]
      ],
    };
  
    // Register the extension with ScratchX
    ScratchExtensions.register("maugli's game changers", descriptor, ext);
  })({});
  