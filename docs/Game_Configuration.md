

  # Game Configuration

This document provides an overview of the game configuration options and scene setup for our Phaser-based game engine.

## Game Configuration

The game configuration is set up in the `game.js` file. It defines the basic parameters for the game instance.

```javascript
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: MainScene
};

const game = new Phaser.Game(config);
```

### Configuration Options

- `type`: Set to `Phaser.AUTO`, allowing Phaser to choose the best renderer (WebGL or Canvas) based on the device.
- `width` and `height`: Define the dimensions of the game canvas (800x600 pixels in this case).
- `parent`: Specifies the ID of the HTML element where the game canvas will be inserted.
- `physics`: Configures the physics engine.
  - `default`: Set to 'arcade' for simple AABB (Axis-Aligned Bounding Box) collision detection.
  - `arcade`: Additional settings for the Arcade Physics system.
    - `gravity`: Set to `{ y: 0 }` for no vertical gravity.
    - `debug`: When set to `true`, it displays physics bodies and velocities (useful for debugging).
- `scene`: Specifies the initial scene to load (in this case, `MainScene`).

## Scene Setup

The `MainScene` class in `scenes/MainScene.js` extends `Phaser.Scene` and sets up the game logic.

```javascript
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        // Asset loading
    }

    create() {
        // Scene setup
    }

    update() {
        // Game loop logic
    }
}
```

### Key Methods

1. `preload()`: Used to load game assets before the scene starts.
   ```javascript
   preload() {
       this.load.image('player', 'data:image/png;base64,...');
   }
   ```

2. `create()`: Sets up the initial game state, creates game objects, and initializes physics.
   ```javascript
   create() {
       this.player = this.physics.add.sprite(400, 300, 'player');
       this.player.setCollideWorldBounds(true);
       this.cursors = this.input.keyboard.createCursorKeys();
   }
   ```

3. `update()`: Contains the game loop logic, called every frame.
   ```javascript
   update() {
       // Handle player movement based on cursor key input
   }
   ```

## Player Movement

Player movement is handled in the `update()` method using cursor keys:

```javascript
update() {
    const speed = 200;

    this.player.setVelocity(0);

    if (this.cursors.left.isDown) {
        this.player.setVelocityX(-speed);
    }
    if (this.cursors.right.isDown) {
        this.player.setVelocityX(speed);
    }
    if (this.cursors.up.isDown) {
        this.player.setVelocityY(-speed);
    }
    if (this.cursors.down.isDown) {
        this.player.setVelocityY(speed);
    }
}
```

This setup allows for smooth, four-directional movement using the arrow keys.

By understanding these configuration options and scene setup procedures, developers can easily customize and extend the game's functionality to suit their needs.

  