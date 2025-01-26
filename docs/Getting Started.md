# Getting Started

Welcome to our Phaser-based game project! This guide will help you set up and run the game on your local machine.

## Prerequisites

Before you begin, make sure you have the following installed:
- A modern web browser (e.g., Chrome, Firefox, Safari)
- A local web server (e.g., Live Server extension for VS Code, Python's `http.server`, or any other simple HTTP server)

## Project Structure

The game project consists of the following main files:

- `index.html`: The main HTML file that loads the Phaser library and game scripts
- `game.js`: The entry point for the game, containing the Phaser configuration
- `scenes/MainScene.js`: The main game scene, handling game logic and player movement

## Setting Up the Project

1. Clone or download the project repository to your local machine.

2. Navigate to the project directory in your terminal or command prompt.

3. Set up a local web server to serve the project files. If you're using VS Code with the Live Server extension, you can right-click on `index.html` and select "Open with Live Server".

## Running the Game

1. Open your web browser and navigate to the local server address (e.g., `http://localhost:5500` if using Live Server).

2. You should see a black game window with a small white square representing the player.

3. Use the arrow keys on your keyboard to move the player around the screen.

## Understanding the Code

### Game Configuration

The game configuration is set up in `game.js`:

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

This configuration creates a game window of 800x600 pixels, uses the Arcade physics system with no gravity, and sets `MainScene` as the primary scene.

### Main Scene

The `MainScene` class in `scenes/MainScene.js` handles the game logic:

1. In the `preload` method, a placeholder sprite is loaded for the player.
2. The `create` method sets up the player sprite and input controls.
3. The `update` method handles player movement based on keyboard input.

## Next Steps

Now that you have the game running, you can start experimenting with the code:

1. Try changing the player's movement speed in the `update` method.
2. Add more sprites or game objects to the scene.
3. Implement game mechanics like collision detection or scoring.

Happy coding, and enjoy building your game!