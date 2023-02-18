class MyExtension {
  /**
   * Scratch will call this method *once* when the extension loads.
   * This method's job is to tell Scratch things like the extension's ID, name, and what blocks it supports.
   */
  getInfo() {
    return {
      id: 'popup',
      name: 'Pop-up Window',
      blocks: [
        {
          opcode: 'openPopUp',
          blockType: Scratch.BlockType.COMMAND,
          text: 'open pop-up window with URL [URL]',
          arguments: {
            URL: {
              type: Scratch.ArgumentType.STRING,
              defaultValue: 'https://example.com',
            },
          },
        },
      ],
    };
  }

  // Function to open a pop-up window
  openPopUp(args) {
    var url = args.URL;
    window.open(url, '_blank', 'width=500,height=500');
  }
}

// Call Scratch.extensions.register to register your extension
// Make sure to register each extension exactly once
Scratch.extensions.register(new MyExtension());
