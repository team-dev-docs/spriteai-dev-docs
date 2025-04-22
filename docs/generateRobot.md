---
slug: /generateRobot
sidebar_position: 3
---

# Generate Robot Sprite

## Brief Description
`generateRobot` is a convenience function that generates a robot character sprite sheet using AI-powered image generation. It's a specialized wrapper around the more general `generateCharacterSpritesheet` function with preset options for robot characters.

## Usage
To use `generateRobot`, import it from the SpriteAI module and call it with optional customization options.

```javascript
import { generateRobot } from 'spriteai';

const robotSprite = await generateRobot();
```

## Parameters
- `options` (object, optional): Configuration options that override the default settings
  - `states` (array): Animation states to generate (default: ['idle', 'walk', 'run', 'attack', 'power-up'])
  - `style` (string): Art style for generation (default: 'pixel-art')
  - `framesPerState` (number): Number of frames per animation state (default: 6)
  - `size` (string): Size of the generated image (default: '1024x1024')
  - `padding` (number): Padding between frames (default: 1)
  - `direction` (string): Direction the character faces (default: 'right')
  - `save` (boolean): Whether to save the generated image to disk

## Return Value
Returns an object containing:
- `original`: URL of the original AI-generated image
- `spritesheet`: Base64-encoded image data URL of the processed sprite sheet
- `metadata`: Object containing information about the sprite sheet:
  - `states`: List of animation states
  - `framesPerState`: Number of frames per state
  - `totalFrames`: Total number of frames in the sprite sheet
  - `dimensions`: Width and height of the image
  - `frameData`: Detailed information about each animation state's position in the sprite sheet

## Examples

1. Generate a robot sprite sheet with default settings:
```javascript
const robotSprite = await generateRobot();
console.log(robotSprite.metadata);
```

2. Generate a robot with custom animation states and saving to disk:
```javascript
const robotSprite = await generateRobot({
  states: ['idle', 'walk', 'shoot', 'explode'],
  framesPerState: 8,
  save: true
});
```

## Notes or Considerations
- The function uses a predefined description "robot character with mechanical limbs and glowing eyes" for consistently themed results
- The default 'power-up' animation state is unique to the robot character type
- When saving images, they are stored in an 'assets' folder with a filename based on the description
- The function makes API calls to generate images and may take some time to complete
- Generated sprites maintain consistent sizing across all frames
