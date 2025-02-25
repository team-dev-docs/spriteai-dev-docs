# generateBuildingAsset Documentation

## Brief Description
`generateBuildingAsset` is a function that generates a 2D building asset image based on a given description, using AI-powered image generation. This function is part of the `sprite` module and is designed for use in 2D game development.

## Usage
To use `generateBuildingAsset`, import it from the sprite module and call it with a description of the building you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateBuildingAsset(buildingDescription, options);
```

## Parameters
- `buildingDescription` (string, required): A text description of the building asset to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated building asset.

## Examples

1. Generate a building asset:
```javascript
const result = await sprite.generateBuildingAsset("A medieval stone tower with a thatched roof");
console.log(result.image);
```

2. Generate and save a building asset:
```javascript
const result = await sprite.generateBuildingAsset("A futuristic skyscraper with glowing windows", { save: true });
console.log("Asset saved to disk");
```

## Notes and Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated assets are optimized for use in 2D games.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured in your project.
- The generated image is returned as a base64-encoded data URL, which can be directly used in your game or further processed as needed.
- Consider the usage limits and costs associated with the OpenAI API when using this function in your project.