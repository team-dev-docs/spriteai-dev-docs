# Player Controls

## Overview

This document outlines the implementation and usage of player controls in our Phaser-based game engine. The player character can be controlled using keyboard input, allowing for movement in four directions: up, down, left, and right.

## Implementation

The player controls are implemented in the `MainScene` class, specifically within the `update` method. The game utilizes Phaser's physics system and cursor key input to manage player movement.

### Setting Up Controls

In the `create` method of the `MainScene` class, we initialize the cursor keys:

```javascript
this.cursors = this.input.keyboard.createCursorKeys();
```

### Handling Movement

Player movement is processed in the `update` method. The player's velocity is set based on the state of the arrow keys:

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

The player character responds to the following keyboard inputs:

- Left Arrow: Move left
- Right Arrow: Move right
- Up Arrow: Move up
- Down Arrow: Move down

The player moves at a constant velocity of 200 pixels per second in any direction.

## Technical Notes

- The player's velocity is reset to 0 at the beginning of each update cycle, ensuring that the character stops moving when no keys are pressed.
- The control system supports simultaneous key presses, enabling diagonal movement when multiple arrow keys are pressed.
- Player movement is confined to the game world boundaries, as defined by `this.player.setCollideWorldBounds(true);` in the `create` method.

## Customization

Developers can adjust the player's movement speed by modifying the `speed` constant in the `update` method. Additionally, more complex movement patterns or physics interactions can be implemented by expanding upon this basic control scheme.
