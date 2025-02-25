# generateWeaponAsset Documentation

## Brief Description
`generateWeaponAsset` is a function that generates a 2D weapon asset image based on a given description, using AI-powered image generation.

## Usage
To use `generateWeaponAsset`, import it from the sprite module and call it with a description of the weapon you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateWeaponAsset(weaponDescription, options);
```

## Parameters
- `weaponDescription` (string, required): A text description of the weapon to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated weapon asset.

## Examples

1. Generate a weapon asset:
```javascript
const result = await sprite.generateWeaponAsset("A futuristic laser pistol");
console.log(result.image);
```

2. Generate and save a weapon asset:
```javascript
const result = await sprite.generateWeaponAsset("A medieval longsword", { save: true });
console.log("Weapon asset saved to disk");
```

## Notes or Considerations
- The function uses the DALL-E 3 AI model to generate images, which may result in varying outputs for the same input.
- Generated assets are optimized for use in 2D games.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary permissions and API access to use the OpenAI image generation service.