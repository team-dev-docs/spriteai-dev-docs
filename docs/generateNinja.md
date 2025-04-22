# generateNinja

## Brief Description
`generateNinja` is a function that generates a ninja character sprite using AI-powered image generation and processing. It creates a pixel art ninja with customizable characteristics.

## Usage
To use `generateNinja`, import it from the sprite module and call it with optional customization options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateNinja(options);
```

## Parameters
- `options` (object, optional):
  - `style` (string): The visual style for the ninja (e.g., "traditional", "futuristic", "cartoon")
  - `weapon` (string): Type of weapon the ninja carries (e.g., "katana", "shuriken", "nunchucks")
  - `color` (string): Dominant color scheme for the ninja's outfit
  - `pose` (string): The ninja's pose or action (e.g., "standing", "attacking", "jumping")
  - `save` (boolean): Whether to save the generated image to disk
  - Other options inherited from the base generate function

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated ninja sprite
- `url`: Direct URL to the generated image
- `frameData`: Suggested frame dimensions for animation (if available)

## Examples

1. Generate a default ninja sprite:
```javascript
const result = await sprite.generateNinja();
console.log(result.image);
```

2. Generate a customized ninja sprite:
```javascript
const result = await sprite.generateNinja({
  style: "futuristic",
  weapon: "energy blade",
  color: "neon blue",
  pose: "attacking",
  save: true
});
console.log("Generated ninja sprite:", result.url);
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate pixel art images, which may result in varying outputs.
- The ninja sprites are optimized for pixel art style, suitable for 2D games.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- The frame data returned can be used to set up animation sequences in game engines like Phaser.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.