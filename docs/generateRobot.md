# Generate Robot Sprite

## Overview

The `generateRobot` function is a turbo-charged convenience method for creating a mind-blowing robot character sprite sheet using the SpriteAI library. This function turbocharges the process of generating a sleek, futuristic robot-themed character with predefined animation states and customizable options.

## Usage

To unleash the power of the `generateRobot` function, import it from the SpriteAI module and call it with optional parameters:

```javascript
import { generateRobot } from 'spriteAI';

const robotSprite = await generateRobot(options);
```

## Parameters

The `generateRobot` function accepts an optional `options` object with the following electrifying properties:

- `states` (array of strings): Animation states for the robot character. Default: `['idle', 'walk', 'run', 'attack', 'power-up']`
- `style` (string): The art style of the sprite. Default: `'pixel-art'`
- `framesPerState` (number): Number of frames for each animation state. Default: `6`

Any additional options supported by the `generateCharacterSpritesheet` function can also be passed in the `options` object for even more customization power!

## Returns

The function returns a Promise that resolves to an object containing these high-voltage components:

- `original` (string): URL of the original generated image, fresh from the AI forge
- `spritesheet` (string): Base64-encoded data URL of the processed sprite sheet, ready for action
- `metadata` (object): A treasure trove of information about the generated sprite sheet, including states, dimensions, and frame data

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

By default, `generateRobot` creates a pixel-art style robot character with mechanical limbs and glowing eyes that would make even Tony Stark jealous. It includes these action-packed animation states:

1. Idle (for when your robot is conserving energy)
2. Walk (for casual strolls through the motherboard)
3. Run (for when the antivirus software is in hot pursuit)
4. Attack (for battling those pesky bugs)
5. Power-up (for that extra boost of silicon-based adrenaline)

Each state has 6 frames by default, but you can crank it up using the `framesPerState` option for even smoother animations!

## Customization

You can customize various aspects of the robot sprite generation by modifying the `options` object. It's like having a full robotics lab at your fingertips:

- Change the animation states by providing a custom `states` array (Want a 'dance' state? Go for it!)
- Adjust the number of frames per state with the `framesPerState` option (More frames = smoother robot moves)
- Modify the art style using the `style` option (e.g., 'vector' for sleek designs, '3d' for that extra dimension, 'hand-drawn' for a personal touch)
- Add any other options supported by `generateCharacterSpritesheet` for further customization (The sky's the limit!)

## Notes

- The generated robot sprite is optimized for game development and animation purposes, ready to conquer digital worlds.
- The function uses cutting-edge AI-powered image generation to create the robot character, so results may vary slightly between calls. Each robot is unique!
- For more control over the sprite generation process, consider using the `generateCharacterSpritesheet` function directly. It's like switching from auto-pilot to manual controls.

Remember to handle any potential errors when calling this asynchronous function, and ensure you have the necessary permissions and API access to use the SpriteAI library's image generation capabilities. Safety first, even in the world of robot sprites!
