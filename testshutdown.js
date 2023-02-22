const { exec } = require('child_process');

class MyExtension {
  getInfo() {
    return {
      id: 'myextensionexample',
      name: 'Cool Extension',
      blocks: [
        {
          opcode: 'shutdown',
          blockType: Scratch.BlockType.COMMAND,
          text: 'Shut down computer',
        }
      ]
    };
  }

  shutdown() {
    exec('shutdown /s');
  }
}

Scratch.extensions.register(new MyExtension());
