# Generate Robot Sprite

## Overview

The `generateRobot` function is a convenience method for creating a robot character sprite sheet using the SpriteAI library. This function simplifies the process of generating a robot-themed character with predefined animation states and options.

## Usage

To use the `generateRobot` function, import it from the SpriteAI module and call it with optional parameters:

```javascript
import { generateRobot } from 'spriteAI';

const robotSprite = await generateRobot(options);
```

## Parameters

The `generateRobot` function accepts an optional `options` object with the following properties:

- `states` (array of strings): Animation states for the robot character. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
- `style` (string): The art style of the sprite. Default: `'pixel-art'`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`

Any additional options supported by the `generateCharacterSpritesheet` function can also be passed in the `options` object.

## Returns

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded data URL of the processed sprite sheet
- `metadata` (object): Information about the generated sprite sheet, including states, dimensions, and frame data

## Example

```javascript
import { generateRobot } from 'spriteAI';

const robotSprite = await generateRobot({
  states: ['idle', 'walk', 'run', 'attack', 'power-up', 'shutdown'],
  framesPerState: 8
});

console.log(robotSprite.metadata);
// Use robotSprite.spritesheet to display or further process the generated sprite sheet
```

## Default Behavior

By default, `generateRobot` creates a pixel-art style robot character with mechanical limbs and glowing eyes. It includes the following animation states:

1. Idle
2. Walk
3. Run
4. Attack
5. Power-up

Each state has 6 frames by default, but this can be customized using the `framesPerState` option.

## Customization

You can customize various aspects of the robot sprite generation by modifying the `options` object:

- Change the animation states by providing a custom `states` array
- Adjust the number of frames per state with the `framesPerState` option
- Modify the art style using the `style` option (e.g., 'vector', '3d', 'hand-drawn')
- Add any other options supported by `generateCharacterSpritesheet` for further customization

## Notes

- The generated robot sprite is optimized for game development and animation purposes.
- The function uses AI-powered image generation to create the robot character, so results may vary slightly between calls.
- For more control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly.

Remember to handle any potential errors when calling this asynchronous function, and ensure you have the necessary permissions and API access to use the SpriteAI library's image generation capabilities.