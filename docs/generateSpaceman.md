# Generate Spaceman

## Brief Description
`generateSpaceman` is a specialized function that generates a spaceman character sprite using AI-powered image generation and processing, specifically designed for space-themed games or applications.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with optional parameters to customize the spaceman character.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(options);
```

## Parameters
- `options` (object, optional):
  - `suit` (string): The type of space suit (e.g., "modern", "retro", "futuristic"). Defaults to a modern design.
  - `helmet` (boolean): Whether the spaceman should have a helmet. Defaults to true.
  - `color` (string): The primary color of the space suit. Defaults to white.
  - `background` (boolean): Whether to include a space background. Defaults to false.
  - `pose` (string): The pose of the spaceman (e.g., "standing", "floating", "running"). Defaults to standing.
  - `save` (boolean): Whether to save the generated image to disk.
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated spaceman sprite.
- `url`: Direct URL to the generated image.
- `frameDimensions`: Suggested dimensions for animation frames if the sprite contains multiple poses.

## Examples

1. Generate a default spaceman sprite:
```javascript
const result = await sprite.generateSpaceman();
console.log(result.image);
```

2. Generate a customized spaceman:
```javascript
const result = await sprite.generateSpaceman({
  suit: "retro",
  helmet: true,
  color: "blue",
  pose: "floating",
  save: true
});
console.log("Saved spaceman sprite:", result.url);
```

3. Generate a spaceman with a background for a game:
```javascript
const result = await sprite.generateSpaceman({
  background: true,
  pose: "running"
});
console.log(result.frameDimensions); // Get dimensions for animation
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate spaceman images, which may result in varying outputs for the same input.
- Generated sprites are optimized for use in 2D games or applications.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- For animated sprites, the `frameDimensions` property provides recommended dimensions for each frame.
- Ensure you have the necessary permissions and API keys set up for using the OpenAI image generation service.