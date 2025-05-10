# Generate Robot Character

The `generateRobot` function allows you to quickly create a robot character spritesheet with predefined animation states. This is a convenience function built on top of the `generateCharacterSpritesheet` function with robot-specific defaults.

## Usage

```javascript
import { generateRobot } from 'spriteAI';

// Generate a robot character with default settings
const robotSprite = await generateRobot();

// Generate a robot character with custom options
const customRobotSprite = await generateRobot({
  states: ['idle', 'walk', 'attack', 'power-down'],
  framesPerState: 8,
  style: 'hand-drawn',
  size: '1024x1024',
  save: true
});
```

## Parameters

The function accepts an options object with the following properties:

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| states | Array | ['idle', 'walk', 'run', 'attack', 'power-up'] | Animation states for the robot character |
| style | String | 'pixel-art' | Visual style of the generated sprite |
| framesPerState | Number | 6 | Number of animation frames per state |
| size | String | '1024x1024' | Image dimensions in pixels (width x height) |
| padding | Number | 1 | Padding between sprite frames |
| direction | String | 'right' | Direction the character faces |
| save | Boolean | false | If true, saves the spritesheet to the assets directory |

## Return Value

Returns an object containing:

- `original`: URL of the originally generated image
- `spritesheet`: Base64 data URL of the processed spritesheet
- `metadata`: Object containing information about the spritesheet:
  - `states`: Array of animation state names
  - `framesPerState`: Number of frames per animation state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Object with width and height of the spritesheet
  - `frameData`: Object with information about each animation state

## Default Robot Character

By default, the robot character is generated with:
- A mechanical appearance with limbs and glowing eyes
- Five animation states: idle, walk, run, attack, and power-up
- Pixel-art style graphics
- 6 frames per animation state

## Example

```javascript
import { generateRobot } from 'spriteAI';

async function createGameRobot() {
  const robotSprite = await generateRobot({
    states: ['idle', 'walk', 'attack', 'power-up', 'malfunction'],
    style: 'pixel-art',
    framesPerState: 8,
    save: true
  });
  
  console.log('Robot sprite generated with these states:', robotSprite.metadata.states);
  return robotSprite;
}
```

## Related Functions

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - Generate custom character spritesheets
- [generateNinja](./generateNinja.md) - Generate a ninja character sprite
- [generateSpaceman](./generateSpaceman.md) - Generate an astronaut character sprite