

  # Player Controls

This document provides instructions on how to control the player character in the game.

## Overview

The player character is controlled using the keyboard arrow keys. The controls allow for movement in four directions: up, down, left, and right.

## Implementation

The player controls are implemented in the `MainScene` class, specifically in the `update` method. The game uses Phaser's physics system and cursor key input to handle player movement.

### Setting Up Controls

In the `create` method of the `MainScene` class, we set up the cursor keys:

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

### Handling Movement

Player movement is handled in the `update` method. The player's velocity is set based on which arrow keys are pressed:

```javascript
update() {
    const speed = 200;

    // Reset velocity
    this.player.setVelocity(0);

    // Handle movement
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

## Control Scheme

The player character can be controlled using the following keys:

- Left Arrow: Move left
- Right Arrow: Move right
- Up Arrow: Move up
- Down Arrow: Move down

The player moves at a constant speed of 200 pixels per second in any direction.

## Notes

- The player's velocity is reset to 0 at the beginning of each update cycle. This ensures that the character stops moving when no keys are pressed.
- Multiple keys can be pressed simultaneously, allowing for diagonal movement.
- The player is confined to the game world boundaries, as set by `this.player.setCollideWorldBounds(true);` in the `create` method.

  