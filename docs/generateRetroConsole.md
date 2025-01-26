# generateRetroConsole Documentation

## Brief Description
`generateRetroConsole` is a function that generates pixel art sprites in the style of specific retro gaming consoles, using AI-powered image generation and analysis.

## Usage
To use `generateRetroConsole`, import it from the sprite module and call it with a description of the sprite you want to generate and the desired console type.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateRetroConsole(description, consoleType, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate.
- `consoleType` (string, required): The type of retro console to emulate. Valid options are:
  - 'nes': Nintendo Entertainment System
  - 'snes': Super Nintendo Entertainment System
  - 'gameboy': Nintendo Game Boy
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated sprite.
- `url`: URL of the generated image (if available).

## Examples

1. Generate a NES-style sprite:
```javascript
const result = await sprite.generateRetroConsole("A pixelated warrior", "nes");
console.log(result.image);
```

2. Generate a Game Boy-style sprite and save it:
```javascript
const result = await sprite.generateRetroConsole("A cute monster", "gameboy", { save: true });
console.log(result.url);
```

## Console-Specific Limitations

The function respects the technical limitations of each console:

- NES: 54 colors, 256x240 resolution
- SNES: 256 colors, 256x224 resolution
- Game Boy: 4 colors, 160x144 resolution

## Notes and Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated sprites strictly adhere to the color palette and resolution limitations of the specified console.
- When saving images, they are stored in an 'assets' folder with a timestamped filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and dependencies set up to use this function.