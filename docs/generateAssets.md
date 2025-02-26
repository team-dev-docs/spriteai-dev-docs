# Generate Assets Documentation

## Brief Description

The `sprite` object provides a collection of methods for generating various game assets using AI-powered image generation. These methods allow developers to create sprites, environments, items, and other visual elements for 2D games.

## Usage

To use the asset generation methods, import the `sprite` object from the module and call the desired method with a description and optional parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateCharacterSprite("A brave knight in shining armor");
```

## Available Methods

### generateCharacterSprite(characterDescription, options)

Generates a character sprite based on the provided description.

- `characterDescription` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

Returns an object containing:
- `image`: Base64-encoded image data URL of the generated sprite.

### generateEnvironmentAsset(environmentDescription, options)

Generates an environment asset based on the provided description.

- `environmentDescription` (string, required): A text description of the environment to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

### generateItemAsset(itemDescription, options)

Generates an item asset based on the provided description.

- `itemDescription` (string, required): A text description of the item to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

### generateVehicleAsset(vehicleDescription, options)

Generates a vehicle asset based on the provided description.

- `vehicleDescription` (string, required): A text description of the vehicle to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

### generateWeaponAsset(weaponDescription, options)

Generates a weapon asset based on the provided description.

- `weaponDescription` (string, required): A text description of the weapon to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

### generateBuildingAsset(buildingDescription, options)

Generates a building asset based on the provided description.

- `buildingDescription` (string, required): A text description of the building to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

### generateAnimationAsset(animationDescription, frames, options)

Generates an animation asset based on the provided description.

- `animationDescription` (string, required): A text description of the animation to generate.
- `frames` (number, optional): Number of frames in the animation (default: 4).
- `options` (object, optional): Same as `generateCharacterSprite`.

Returns an object containing:
- `image`: Base64-encoded image data URL of the generated animation.
- `frameCount`: Number of frames in the animation.
- `suggested_frame_width`: Suggested width for each frame.

### generateTilesetAsset(tilesetDescription, tileCount, options)

Generates a tileset asset based on the provided description.

- `tilesetDescription` (string, required): A text description of the tileset to generate.
- `tileCount` (number, optional): Number of tiles in the tileset (default: 9).
- `options` (object, optional): Same as `generateCharacterSprite`.

Returns an object containing:
- `image`: Base64-encoded image data URL of the generated tileset.
- `tileCount`: Number of tiles in the tileset.
- `suggested_tile_size`: Suggested size for each tile.

### generateUIAsset(uiDescription, options)

Generates a UI element asset based on the provided description.

- `uiDescription` (string, required): A text description of the UI element to generate.
- `options` (object, optional): Same as `generateCharacterSprite`.

## Examples

1. Generate a character sprite:
```javascript
const characterResult = await sprite.generateCharacterSprite("A wise old wizard with a long beard");
console.log(characterResult.image);
```

2. Generate an environment asset:
```javascript
const environmentResult = await sprite.generateEnvironmentAsset("A lush forest with a hidden waterfall");
console.log(environmentResult.image);
```

3. Generate an animated asset:
```javascript
const animationResult = await sprite.generateAnimationAsset("A flickering torch", 6);
console.log(animationResult.image);
console.log(`Frame count: ${animationResult.frameCount}`);
console.log(`Suggested frame width: ${animationResult.suggested_frame_width}`);
```

## Notes and Considerations

- All methods use AI models to generate images, which may result in varying outputs for the same input.
- Generated images are returned as Base64-encoded data URLs.
- When the `save` option is set to `true`, images are stored in an 'assets' folder with filenames based on the description.
- The functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed, including OpenAI, axios, and sharp.
- Be mindful of API usage limits and costs associated with the underlying AI services.