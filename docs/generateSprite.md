# generateSprite Documentation

## Brief Description

The `sprite` object provides methods for generating sprite sheets and game assets using AI-powered image generation. It includes functions for creating character sprites, environment assets, and other game-related graphics.

## Usage

To use the sprite generation functions, import the `sprite` object from the module:

```javascript
import { sprite } from './path/to/sprite/module';
```

## Methods

### generateSprite(description, options)

Generates a sprite sheet image based on a given character description.

#### Parameters
- `description` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

#### Example

```javascript
const result = await sprite.generateSprite("A pixelated robot");
console.log(result.messages);
console.log(result.image);
```

### generateEnvironmentAsset(environmentDescription, options)

Generates a 2D environment asset based on a given description.

#### Parameters
- `environmentDescription` (string, required): A text description of the environment asset to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated environment asset.

#### Example

```javascript
const result = await sprite.generateEnvironmentAsset("A lush forest background");
console.log(result.image);
```

### generateCharacterSprite(characterDescription, options)

Generates a sprite sheet specifically for a character based on a given description.

#### Parameters
- `characterDescription` (string, required): A text description of the character to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.

#### Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated character sprite sheet.

#### Example

```javascript
const result = await sprite.generateCharacterSprite("A cartoon cat");
console.log(result.image);
```

## Notes and Considerations

- All functions use AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated images are optimized for use in 2D games and follow specific layouts or optimizations based on their purpose.
- When the `save` option is set to `true`, generated images are stored in an 'assets' folder with filenames based on the provided descriptions.
- These functions may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies (OpenAI, axios, sharp) installed and properly configured in your project.