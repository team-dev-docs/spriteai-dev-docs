# Generate Ninja Sprites

The `generateNinja()` function provides a convenient way to generate pixel-art ninja character sprites without needing to specify detailed descriptions.

## Usage

```javascript
import { generateNinja } from 'spriteai';

// Generate ninja sprites with default options
const ninja = await generateNinja();

// Generate ninja sprites with custom options
const customNinja = await generateNinja({
  states: ['idle', 'walk', 'attack', 'sneak'],
  framesPerState: 8,
  style: 'pixel-art',
  save: true
});
```

## Function Signature

```javascript
generateNinja(options = {})
```

## Parameters

- `options` (Object, optional): Configuration options for the ninja sprite generation
  - `states` (Array, default: `['idle', 'walk', 'run', 'attack', 'sneak']`): Animation states to include
  - `style` (String, default: `'pixel-art'`): Visual style of the sprite
  - `framesPerState` (Number, default: `6`): Number of frames for each animation state
  - `size` (String, optional): Size of the output image (e.g., '1024x1024')
  - `padding` (Number, optional): Padding between sprites
  - `direction` (String, optional): Direction the character faces ('right' by default)
  - `save` (Boolean, optional): Whether to save the generated spritesheet to the assets directory

## Returns

Returns a Promise that resolves to an object containing:

- `original` (String): URL of the original generated image
- `spritesheet` (String): Base64-encoded PNG data of the processed spritesheet
- `metadata` (Object): Information about the spritesheet including:
  - `states`: Array of animation states
  - `framesPerState`: Number of frames per animation state
  - `totalFrames`: Total number of frames in the spritesheet
  - `dimensions`: Width and height of the original image
  - `frameData`: Object containing information about each animation state's frames

## Examples

### Basic Ninja Generation

```javascript
import { generateNinja } from 'spriteai';

async function createNinjaSprites() {
  const result = await generateNinja();
  console.log(`Generated ninja spritesheet with ${result.metadata.totalFrames} frames`);
  return result.spritesheet;
}
```

### Customized Ninja with Specific Animation States

```javascript
import { generateNinja } from 'spriteai';

async function createStealthNinja() {
  const ninja = await generateNinja({
    states: ['idle', 'sneak', 'attack', 'disappear'],
    framesPerState: 8,
    style: 'pixel-art',
    save: true
  });
  
  return ninja;
}
```

## Notes

- The ninja character is generated with a black outfit and mask by default
- This function is a convenience wrapper around `generateCharacterSpritesheet()`
- Saved sprites will be placed in the `assets` directory with a filename based on the character description
