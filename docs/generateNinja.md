# Generate Ninja

The `generateNinja` function is a specialized tool for creating pixel art sprite sheets of ninja characters. This function is part of the spriteAI library and leverages AI-powered image generation to produce customizable ninja sprites for game development.

## Usage

To use the `generateNinja` function, import it from the spriteAI module and call it with optional parameters:

```javascript
import { generateNinja } from './path/to/spriteAI';

const result = await generateNinja(options);
```

## Parameters

The `generateNinja` function accepts an optional `options` object with the following properties:

- `states` (array): An array of animation states for the ninja character. Default: `['idle', 'walk', 'run', 'attack', 'sneak']`
- `style` (string): The art style of the sprite. Default: `'pixel-art'`
- `framesPerState` (number): The number of frames for each animation state. Default: `6`

Additional options inherited from the base `generateCharacterSpritesheet` function may also be available.

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded image data URL of the processed sprite sheet
- `metadata` (object): Contains information about the sprite sheet, including:
  - `states` (array): List of animation states
  - `framesPerState` (number): Number of frames per animation state
  - `totalFrames` (number): Total number of frames in the sprite sheet
  - `dimensions` (object): Width and height of the sprite sheet
  - `frameData` (object): Detailed information about each animation state's position in the sprite sheet

## Example

```javascript
const ninjaSprite = await generateNinja({
  states: ['idle', 'attack', 'dodge'],
  framesPerState: 8
});

console.log(ninjaSprite.metadata);
console.log(ninjaSprite.spritesheet);
```

## Notes

- The function uses AI models (likely DALL-E 3) to generate the initial ninja character image.
- The default style is pixel art, which is ideal for retro-style games or applications requiring a nostalgic aesthetic.
- The generated sprite sheet includes multiple animation states, making it suitable for games with varied character actions.
- The 'sneak' state is included by default, which is particularly fitting for ninja characters.
- The function internally uses the `generateCharacterSpritesheet` function, passing a specific description for a ninja character.

## Customization

While the function provides default values, you can customize various aspects of the ninja sprite:

- Modify the `states` array to include different animations (e.g., 'jump', 'throw', 'climb').
- Adjust the `framesPerState` to create smoother or more detailed animations.
- Experiment with different styles by changing the `style` option, although 'pixel-art' is the default and recommended for this function.

Remember that changing these options may affect the quality and consistency of the generated sprite sheet, so test thoroughly with your specific game engine or application.