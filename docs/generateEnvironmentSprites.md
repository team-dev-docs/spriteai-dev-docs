---
sidebar_position: 4
---

# generateEnvironmentSprites Documentation

## Brief Description
`generateEnvironmentSprites` is a function that generates environment tilesets and sprites for game development using AI-powered image generation. It creates customizable collections of environment elements like terrain, buildings, or objects that can be used as game assets.

## Usage
To use `generateEnvironmentSprites`, import it from the spriteAI module and call it with a description of the environment you want to generate.

```javascript
import { generateEnvironmentSprites } from './path/to/spriteAI/module';

const result = await generateEnvironmentSprites(description, options);
```

## Parameters
- `description` (string, required): A text description of the environment elements to generate (e.g., "forest trees and rocks", "medieval castle walls").
- `options` (object, optional):
  - `elements` (number): Number of environment elements to generate (default: 4).
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style for the environment (default: "pixel-art").
  - `padding` (number): Padding between elements in the tileset (default: 1).
  - `theme` (string): Theme of the environment (default: "fantasy").
  - `save` (boolean): Whether to save the generated tileset to disk.

## Return Value
Returns an object containing:
- `original`: URL of the original generated image from the AI.
- `tileset`: Base64-encoded image data URL of the processed tileset.
- `metadata`: Object with detailed information about the generated tileset:
  - `elements`: Number of elements generated.
  - `theme`: Theme used for generation.
  - `dimensions`: Width and height of the generated image.
  - `tileData`: Information about the tileset layout including rows, columns, and total tiles.

## Examples

### Generate a Basic Forest Environment
```javascript
const forestTiles = await generateEnvironmentSprites("forest trees and rocks");
console.log(forestTiles.metadata);
// Output includes tileset information and base64 image data
```

### Generate Custom Medieval Environment
```javascript
const medievalEnvironment = await generateEnvironmentSprites(
  "medieval castle walls and towers", 
  {
    elements: 6,
    theme: "medieval",
    style: "vector",
    save: true
  }
);

// Access the generated tileset
const tilesetImage = medievalEnvironment.tileset;
console.log(`Generated ${medievalEnvironment.metadata.elements} medieval elements`);
```

### Generate Sci-Fi Environment with Custom Settings
```javascript
const scifiTiles = await generateEnvironmentSprites(
  "futuristic buildings and platforms",
  {
    elements: 8,
    size: "512x512",
    style: "3d",
    theme: "sci-fi",
    padding: 2
  }
);

// Check tile layout information
console.log(`Tileset has ${scifiTiles.metadata.tileData.rows} rows`);
console.log(`Each row has ${scifiTiles.metadata.tileData.columns} columns`);
```

## Available Themes and Styles
You can use the helper functions to get available options:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI/module';

const availableStyles = await fetchAvailableSpriteStyles();
console.log(availableStyles);
// Output: ['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate images, which may result in varying outputs for the same input.
- Generated environments are arranged in a grid layout with the specified number of elements.
- The default layout uses 2 columns, so the number of rows is calculated as `Math.ceil(elements / 2)`.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have proper API credentials configured for OpenAI services.
- The `padding` parameter helps separate individual tiles in the generated tileset for easier extraction.
- Different themes work better with certain styles - experiment to find the best combination for your use case.

## Related Functions
- [`generateCharacterSpritesheet`](/docs/generateCharacterSpritesheet) - For generating character animations
- [`generateItemSprites`](/docs/generateItemSprites) - For generating game items and equipment
- [`generateSprite`](/docs/generateSprite) - For basic sprite generation