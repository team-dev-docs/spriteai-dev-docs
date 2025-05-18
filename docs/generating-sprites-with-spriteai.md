# Generating Sprites with SpriteAI

SpriteAI is a powerful tool that allows you to generate character spritesheets and manipulate images using the OpenAI API and various image processing libraries. This guide will walk you through the process of generating sprites using SpriteAI, highlighting its key features and providing examples of how to use them effectively.

## Introduction to SpriteAI

SpriteAI is designed to simplify the process of creating pixel-art character animations with customizable states and frames. It leverages advanced AI technology to generate high-quality spritesheets based on text descriptions, making it an invaluable tool for game developers, designers, and digital artists.

## Key Features

- Generate character spritesheets based on text descriptions
- Create animations with multiple states (e.g., idle, walk, run, attack)
- Support for various art styles and output sizes
- Background color removal for transparent sprites
- Easy integration with OpenAI's DALL-E for image generation

## Generating a Character Spritesheet

To generate a character spritesheet using SpriteAI, you'll use the `generateCharacterSpritesheet` function. Here's an example of how to use it:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'left',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

This code will generate a spritesheet for a cute dragon with idle, walk, and run animations, each containing 4 frames. The resulting spritesheet will be in pixel-art style, sized 512x512 pixels, with the character facing left.

## Customizing Your Sprites

SpriteAI offers several options to customize your generated sprites:

- `states`: An array of animation states (e.g., ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames for each animation state
- `size`: Output size of the spritesheet (e.g., '1024x1024')
- `style`: Art style of the sprite (e.g., 'pixel-art')
- `padding`: Padding between frames
- `direction`: Direction the character faces ('left' or 'right')
- `save`: Whether to save the generated spritesheet to disk

## Removing Background Colors

SpriteAI also provides functionality to remove background colors from your sprites, creating transparent backgrounds. Here's how to use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'spriteai';

const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF'; // Color to remove
const colorThreshold = 10; // Threshold for color matching

removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold)
  .then(() => {
    console.log('Background color removed successfully.');
  })
  .catch(error => {
    console.error('Error removing background color:', error);
  });
```

This function allows you to remove a specific background color from your sprite, making it easy to integrate your generated sprites into various game engines or design projects.

## Advanced Features

SpriteAI also offers additional functions for more specific use cases:

- `fetchAvailableAnimationStates()`: Retrieves a list of available animation states
- `fetchAvailableSpriteStyles()`: Retrieves a list of available sprite styles
- `generateEnvironmentSprites()`: Generates environment tileset sprites
- `generateItemSprites()`: Generates item sprites for game inventories or pickups

These functions allow you to expand your sprite generation capabilities and create a wide variety of game assets using SpriteAI.

## Conclusion

SpriteAI offers a powerful and flexible way to generate high-quality sprites for your games and digital art projects. By leveraging AI-powered image generation and providing easy-to-use functions for customization and manipulation, SpriteAI streamlines the sprite creation process, allowing you to focus on bringing your creative visions to life.

Whether you're creating character animations, environment tilesets, or item sprites, SpriteAI has the tools you need to generate professional-looking assets quickly and efficiently. Experiment with different descriptions, styles, and options to discover the full potential of SpriteAI in your projects!