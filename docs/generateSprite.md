# generateBuildingAsset

## Brief Description
`generateBuildingAsset` is a method of the `sprite` object that generates a 2D building asset image based on a given description, using AI-powered image generation.

## Usage
To use `generateBuildingAsset`, import it from the sprite module and call it with a description of the building you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateBuildingAsset(buildingDescription, options);
```

## Parameters
- `buildingDescription` (string, required): A text description of the building to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated building asset.

## Examples

1. Generate a single building asset:
```javascript
const result = await sprite.generateBuildingAsset("A medieval castle with high towers");
console.log(result.image);
```

2. Generate and save a building asset:
```javascript
const result = await sprite.generateBuildingAsset("A futuristic skyscraper", { save: true });
console.log("Asset saved to disk");
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated assets are optimized for use in 2D games.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.