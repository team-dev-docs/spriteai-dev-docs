# spriteAI

spriteAI is a project designed to generate character spritesheets and manipulate images using the OpenAI API and image processing libraries. This tool allows users to create pixel-art character animations with customizable states and frames.

## Features

- Generate character spritesheets based on descriptions and animation states.
- Remove background colors from images to create transparent backgrounds.
- Supports various art styles and output sizes.
- Easy integration with OpenAI's DALL-E for image generation.
- Fetch available animation states and sprite styles programmatically.
- Generate environment tilesets with customizable elements.

## Installation

To get started with spriteAI, clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

## Usage

### Generating a Spritesheet

To generate a character spritesheet, you can use the `generateCharacterSpritesheet` function from the `index.js` file. Here's an example:

```javascript
import { generateCharacterSpritesheet } from './index.js';

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
  })
  .catch(error => {
    console.error('Error generating spritesheet:', error);
  });
```

### Removing Background Color

To remove a specific background color from an image, use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from './index.js';

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

### Fetching Available Animation States and Sprite Styles

You can programmatically fetch the available animation states and sprite styles using the following functions:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './index.js';

const availableStates = await fetchAvailableAnimationStates();
console.log('Available animation states:', availableStates);

const availableStyles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', availableStyles);
```

### Generating Environment Sprites

To generate a tiled environment with customizable elements, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'fantasy landscape';
const options = {
  elements: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment sprites generated:', result.tileset);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
  });
```

## Directory Structure

- `index.js`: Main logic for generating spritesheets, removing backgrounds, and fetching available states and styles.
- `package.json`: Project configuration and dependencies.
- `assets/`: Directory for storing generated spritesheets and environment sprites.
- `lib/imageProcessing.js`: Functions for image manipulation.
- `lib/openaiHelpers.js`: Helper functions for OpenAI API interactions.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.