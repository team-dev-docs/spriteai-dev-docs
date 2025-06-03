# generateRobot

The `generateRobot` function is a specialized tool for creating pixel art sprite sheets of robot characters with multiple animation states. It's designed to streamline the process of generating game-ready robot sprites for developers working on projects that require animated robot characters.

## Overview

`generateRobot` is part of the spriteAI module and uses AI-powered image generation to create customizable robot character sprites. It's particularly useful for game developers who need quick, high-quality robot assets for their projects.

## Usage

To use `generateRobot`, import it from the spriteAI module and call it with optional parameters:

```javascript
import { generateRobot } from './path/to/spriteAI';

const robotSprite = await generateRobot(options);
```

## Parameters

The `generateRobot` function accepts an optional `options` object with the following properties:

- `states` (array): Animation states for the robot. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`
- `style` (string): Art style for the robot sprite. Default: `'pixel-art'`
- `size` (string): Size of the generated image. Default: `'1024x1024'`
- `padding` (number): Padding between sprite frames. Default: `1`
- `direction` (string): Direction the robot is facing. Default: `'right'`

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded data URL of the processed sprite sheet
- `metadata` (object): Contains information about the sprite sheet:
  - `states` (array): List of animation states
  - `framesPerState` (number): Number of frames per state
  - `totalFrames` (number): Total number of frames in the sprite sheet
  - `dimensions` (object): Width and height of the sprite sheet
  - `frameData` (object): Detailed information about each animation state

## Example

```javascript
const robotSprite = await generateRobot({
  states: ['idle', 'walk', 'attack'],
  framesPerState: 8,
  style: 'pixel-art',
  size: '2048x2048'
});

console.log(robotSprite.metadata);
// Use robotSprite.spritesheet in your game engine
```

## Notes

- The function uses AI models to generate images, which may result in variations between calls.
- The default style is pixel art, which is ideal for retro-style games.
- The generated sprite sheet includes multiple animation states, making it ready for use in game development.
- Ensure you have the necessary API keys and permissions set up for the AI image generation service.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.

## See Also

- `generateCharacterSpritesheet`: For generating generic character sprite sheets
- `generateNinja`: For ninja-specific character sprites
- `generateSpaceman`: For astronaut-specific character sprites