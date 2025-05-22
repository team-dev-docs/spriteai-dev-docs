# generateCharacterSpritesheet

## High Level

This function is exported from our Node.js SDK that you can install from NPM and import from the `sprite` object like this:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';
```

## Why should I use this function?

The `generateCharacterSpritesheet` function allows you to programmatically generate pixel art character spritesheets with multiple animation states. This is particularly useful for game developers, animators, or anyone needing to create consistent character animations quickly and efficiently.

## What parameters are required?

The function requires two parameters:

1. `description` (string): A description of the character you want to generate.
2. `options` (object, optional): Configuration options for customizing the spritesheet generation.

## Prerequisites

- Node.js environment
- OpenAI API key (for DALL-E 3 image generation)
- `spriteAI` package installed in your project

## How do I use this function?

Here's a basic example of how to use the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from 'spriteAI';

async function createSpritesheet() {
  try {
    const result = await generateCharacterSpritesheet('a cute robot', {
      states: ['idle', 'walk', 'run', 'jump'],
      framesPerState: 6,
      size: '1024x1024',
      style: 'pixel-art',
      save: true
    });

    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  } catch (error) {
    console.error('Error generating spritesheet:', error);
  }
}

createSpritesheet();
```

### Options

You can customize the spritesheet generation with these options:

- `states` (string[]): Animation states to generate (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState` (number): Number of frames per animation state (default: 6)
- `size` (string): Output image size (default: '1024x1024')
- `style` (string): Art style to use (default: 'pixel-art')
- `padding` (number): Padding between sprites (default: 1)
- `direction` (string): Base direction the character faces (default: 'right')
- `save` (boolean): Whether to save the generated spritesheet to disk (default: false)

## Return Value

The function returns a Promise that resolves to an object containing:

- `original` (string): URL of the original generated image
- `spritesheet` (string): Base64-encoded PNG data URI of the processed spritesheet
- `metadata` (object): Detailed information about the generated spritesheet, including dimensions, frame data, and animation states

## Advanced Usage

### Customizing Animation States

```javascript
const result = await generateCharacterSpritesheet('a fierce dragon', {
  states: ['idle', 'fly', 'breathe-fire', 'roar'],
  framesPerState: 8,
  size: '2048x2048'
});
```

### Saving to Disk

When the `save` option is set to `true`, the spritesheet will be saved in the `assets` folder of your current working directory:

```javascript
await generateCharacterSpritesheet('a ninja warrior', {
  save: true,
  size: '2048x2048'
});
// Saves to ./assets/ninja_warrior_spritesheet.png
```

## Notes

- The function uses DALL-E 3 to generate the initial spritesheet image, ensuring high-quality and creative results.
- Each row in the generated spritesheet represents a different animation state.
- The function automatically processes the generated image to create a properly formatted spritesheet with the specified number of frames and states.
- Make sure you have the necessary permissions and API credits to use the OpenAI API for image generation.

By using this function, you can streamline your character animation workflow and quickly generate consistent, high-quality spritesheets for your projects.
