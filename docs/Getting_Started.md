

  # Getting Started with the Phaser Sample Game

This guide will walk you through setting up and running the Phaser sample game provided in our codebase. The game is a simple example that demonstrates basic Phaser functionality, including scene creation, sprite rendering, and player movement.

## Prerequisites

Before you begin, make sure you have the following installed on your system:
- A modern web browser
- A local web server (e.g., Python's SimpleHTTPServer, Node.js' http-server, or any other web server of your choice)

## Project Structure

The project consists of three main files:

1. `index.html`: The HTML file that loads the Phaser library and our game scripts.
2. `game.js`: The main game configuration file.
3. `scenes/MainScene.js`: The primary game scene containing game logic.

## Setting Up the Project

1. Clone or download the project repository to your local machine.

2. Navigate to the project directory in your terminal or command prompt.

3. Start your local web server in the project directory. For example, if you're using Python's SimpleHTTPServer, run:

   ```
   python -m SimpleHTTPServer 8000
   ```

   Or if you're using Node.js' http-server, run:

   ```
   npx http-server
   ```

4. Open your web browser and navigate to `http://localhost:8000` (or the appropriate port if you've configured it differently).

## Understanding the Code

### Game Configuration

The `game.js` file contains the main Phaser game configuration:

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

This configuration sets up a game canvas with dimensions of 800x600 pixels, uses the Arcade physics system with no gravity, and specifies `MainScene` as the default scene.

### Main Scene

The `scenes/MainScene.js` file defines the game's main scene:

```javascript
class MainScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MainScene' });
    }

    preload() {
        // Load game assets
    }

    create() {
        // Set up game objects
    }

    update() {
        // Game loop logic
    }
}
```

The `MainScene` class extends `Phaser.Scene` and implements three key methods:

- `preload()`: Loads game assets (in this case, a simple colored rectangle as a placeholder sprite).
- `create()`: Sets up the initial game state, creating the player sprite and input controls.
- `update()`: Runs continuously, handling player movement based on input.

## Running the Game

Once you've set up the local server and opened the game in your web browser, you should see a blue rectangle representing the player. You can control the player's movement using the arrow keys on your keyboard.

## Next Steps

Now that you have the basic Phaser game running, you can start experimenting with the code:

1. Try changing the player sprite to an actual image.
2. Add obstacles or collectibles to the game world.
3. Implement a scoring system or win/lose conditions.
4. Explore Phaser's documentation to learn about more advanced features and capabilities.

Happy game development!

  