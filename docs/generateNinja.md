# Generate Ninja

`generateNinja` is a utility function that creates sprite animations using OpenAI's DALL-E 3 model, specifically designed to generate ninja character sprites for use in game development with Phaser.js.

## Basic Usage

```javascript
const ninja = await sprite.generateNinja({
  description: "A stealthy ninja with black outfit",
  options: {
    save: true,
    framesPerAnimation: 4
  }
});
```

## Parameters

### description

**Type:** `string`

**Required:** Yes

Detailed description of the ninja character you want to generate. The more specific the description, the better the results. Include details about appearance, style, color scheme, and any distinctive features.

### options

**Type:** `object`

**Required:** No

An object containing additional configuration options:

- `save` (boolean): Whether to save the generated image to disk. Default is `false`.  
- `framesPerAnimation` (number): The number of frames for each animation sequence. Default is `4`.  
- `states` (array): Animation states to generate. Default is `['idle', 'walk', 'attack', 'jump']`.  
- `size` (string): Size of the generated image. Default is `'1024x1024'`.  

## Return Value

The function returns a Promise that resolves to an object with the following properties:

```javascript
{
  url: string,             // Original URL of the generated image
  base64: string,          // Base64-encoded string of the generated spritesheet
  frameWidth: number,      // Width of each frame in the spritesheet
  frameHeight: number,     // Height of each frame in the spritesheet
  rows: number,            // Number of rows in the spritesheet
  columns: number,         // Number of columns in the spritesheet
  frameCount: number,      // Total number of frames
  animations: object       // Object mapping each animation state to frame indices
}
```

### animations Object Structure

The `animations` object provides mapping for each animation state to its corresponding frames in the spritesheet:

```javascript
{
  idle: { start: 0, end: 3 },
  walk: { start: 4, end: 7 },
  attack: { start: 8, end: 11 },
  jump: { start: 12, end: 15 }
}
```

## Example

```javascript
// Import the sprite module
const sprite = require('./path/to/sprite');

async function createNinjaSprite() {
  const ninjaSprite = await sprite.generateNinja({
    description: "A female ninja with purple outfit, silver throwing stars, and a katana on her back",
    options: {
      save: true,
      framesPerAnimation: 4,
      states: ['idle', 'run', 'throw', 'slice']
    }
  });
  
  // Use the spritesheet in your Phaser game
  this.load.spritesheet('ninja', ninjaSprite.base64, { 
    frameWidth: ninjaSprite.frameWidth, 
    frameHeight: ninjaSprite.frameHeight 
  });
  
  // Later, create animations using the frame data
  this.anims.create({
    key: 'ninja-idle',
    frames: this.anims.generateFrameNumbers('ninja', { 
      start: ninjaSprite.animations.idle.start, 
      end: ninjaSprite.animations.idle.end 
    }),
    frameRate: 8,
    repeat: -1
  });
  
  // Similarly for other animation states
}
```

## Notes

- The generated ninja sprite is optimized for 2D game development and uses pixel art styling.
- Each animation state (idle, walk, etc.) typically contains the specified number of frames optimized for looping.
- The total size of the spritesheet depends on the number of states and frames per animation.
- For best results, be specific in your description about the ninja's appearance and style.
