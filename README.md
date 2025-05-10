# spriteAI

spriteAI is a project designed to generate character spritesheets, environment sprites, and manipulate images using the OpenAI API and image processing libraries. This tool allows users to create pixel-art character animations and environment assets with customizable states, frames, and styles.

## Features

- Generate character spritesheets based on descriptions and animation states.
- Create environment sprites and tilesets for game development.
- Remove background colors from images to create transparent backgrounds.
- Supports various art styles and output sizes.
- Easy integration with OpenAI's DALL-E for image generation.

## Installation

To get started with spriteAI, clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

## Usage

### Generating a Character Spritesheet

To generate a character spritesheet, you can use the `generateCharacterSpritesheet` function from the `index.js` file. Here's an example:

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
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

### Generating Environment Sprites

To generate environment sprites or tilesets, use the `generateEnvironmentSprites` function:

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  theme: 'fantasy',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Environment tileset generated:', result.tileset);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating environment sprites:', error);
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

### Fetching Available Animation States

To get a list of available animation states, use the `fetchAvailableAnimationStates` function:

```javascript
import { fetchAvailableAnimationStates } from './index.js';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('Available animation states:', states);
  })
  .catch(error => {
    console.error('Error fetching animation states:', error);
  });
```

### Fetching Available Sprite Styles

To get a list of available sprite styles, use the `fetchAvailableSpriteStyles` function:

```javascript
import { fetchAvailableSpriteStyles } from './index.js';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('Available sprite styles:', styles);
  })
  .catch(error => {
    console.error('Error fetching sprite styles:', error);
  });
```

## Directory Structure

- `index.js`: Main logic for generating spritesheets, environment sprites, and removing backgrounds.
- `package.json`: Project configuration and dependencies.
- `assets/`: Directory for storing generated spritesheets and environment sprites.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.