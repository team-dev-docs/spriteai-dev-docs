# generateSpaceman

## Brief Description
`generateSpaceman` is a function that generates a pixelated spaceman character based on a given description using AI-powered image generation.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with a description of the spaceman character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(description, options);
```

## Parameters
- `description` (string, required): A text description of the spaceman character to generate.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated spaceman character.
- `url`: Direct URL to the generated image.

## Examples

1. Generate a spaceman character:
```javascript
const result = await sprite.generateSpaceman("An astronaut with a red helmet and blue suit");
console.log(result.image); // Base64-encoded image data URL
console.log(result.url); // Direct URL to the generated image
```

2. Generate and save a spaceman character:
```javascript
const result = await sprite.generateSpaceman("A space explorer with a jetpack", { save: true });
console.log("Spaceman saved and accessible at:", result.url);
```

## Notes or Considerations
- The function uses AI image generation to create pixelated spaceman characters in a style similar to games like Among Us.
- The generated images are optimized for use as game sprites or avatars.
- When saving images, they are stored with a timestamp-based filename.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary API credentials and permissions to use the image generation service.