# MainScene

The `MainScene` class is the core game scene in our Phaser 3 game. It handles the main gameplay logic, including player creation, movement, and updates.

## Class Overview

`MainScene` extends `Phaser.Scene` and contains the following key methods:

- `constructor()`: Initializes the scene with the key 'MainScene'.
- `preload()`: Loads game assets before the scene starts.
- `create()`: Sets up the game objects and initial state.
- `update()`: Runs every frame, handling game logic and player movement.

## Detailed Method Breakdown

### constructor()

```javascript
constructor() {
    super({ key: 'MainScene' });
}
```

This method calls the parent constructor with the scene key 'MainScene', which is used to identify and start this scene.

### preload()

```javascript
preload() {
    this.load.image('player', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAEklEQVRYw+3BAQEAAACCIP+vbkhAAQAAAO8GECAAAZf3V9sAAAAASUVORK5CYII=');
}
```

This method loads a simple colored rectangle as a placeholder sprite for the player. In a full game, you would typically replace this with an actual image file.

### create()

```javascript
create() {
    this.player = this.physics.add.sprite(400, 300, 'player');
    this.player.setCollideWorldBounds(true);
    
    this.cursors = this.input.keyboard.createCursorKeys();
}
```

The `create()` method sets up the initial game state:

1. Creates a player sprite at coordinates (400, 300) using the 'player' image.
2. Enables collision with world bounds for the player.
3. Sets up cursor keys for player movement.

### update()

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

The `update()` method runs every frame and handles player movement:

1. Sets a constant speed for player movement.
2. Resets the player's velocity to 0 at the start of each frame.
3. Checks if any cursor keys are pressed and updates the player's velocity accordingly.

## Extending the MainScene

To extend or modify the `MainScene`, you can:

1. Add new game objects in the `create()` method.
2. Implement additional logic in the `update()` method.
3. Create new methods for specific game mechanics.
4. Override existing methods to change their behavior.

Example of adding a score display:

```javascript
create() {
    // ... existing code ...

    this.score = 0;
    this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '32px', fill: '#000' });
}

update() {
    // ... existing code ...

    // Update score (example: increase score over time)
    this.score += 1;
    this.scoreText.setText('Score: ' + this.score);
}
```

By understanding and modifying the `MainScene` class, you can create more complex and engaging gameplay for your Phaser 3 game.