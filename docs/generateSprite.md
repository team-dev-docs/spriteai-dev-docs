---
slug: /
sidebar_position: 1
---

# spriteAI Documentation

## Brief Description
`spriteAI` is a project designed to generate character spritesheets and manipulate images using the OpenAI API and image processing libraries. This tool allows users to create pixel-art character animations with customizable states and frames.

## Features
- Generate character spritesheets based on descriptions and animation states.
- Remove background colors from images to create transparent backgrounds.
- Supports various art styles and output sizes.
- Easy integration with OpenAI's DALL-E for image generation.
- Fetch available animation states and sprite styles dynamically.
- Generate environment tilesets based on descriptions.

## Installation
To get started with `spriteAI`, clone the repository and install the necessary dependencies:

```bash
git clone 
cd spriteAI
npm install
```

## Usage

### Generating a Spritesheet
Use the `generateCharacterSpritesheet` function to generate a character spritesheet:

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

const result = await generateCharacterSpritesheet(description, options);
console.log('Spritesheet generated:', result.spritesheet);
```

### Removing Background Color
Use the `removeBackgroundColor` function to remove a specific background color from an image:

```javascript
import { removeBackgroundColor } from './index.js';

const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF'; // Color to remove
const colorThreshold = 10; // Threshold for color matching

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
console.log('Background color removed successfully.');
```

### Generating Environment Sprites
Use the `generateEnvironmentSprites` function to generate a tiled environment spritesheet:

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'fantasy environment';
const options = {
  elements: 8,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 2,
  theme: 'fantasy',
  save: true
};

const result = await generateEnvironmentSprites(description, options);
console.log('Environment tileset generated:', result.tileset);
```

## Fetch Available Options
The `spriteAI` module provides the following functions to fetch available animation states and sprite styles:

```javascript
import { fetchAvailableAnimationStates, fetchAvailableSpriteStyles } from './index.js';

const states = await fetchAvailableAnimationStates();
console.log('Available animation states:', states);

const styles = await fetchAvailableSpriteStyles();
console.log('Available sprite styles:', styles);
```

## Directory Structure
- `index.js`: Main logic for generating spritesheets, removing backgrounds, and generating environment sprites.
- `package.json`: Project configuration and dependencies.
- `assets/`: Directory for storing generated spritesheets and environment tilesets.
- `lib/imageProcessing.js`: Functions for image manipulation.
- `lib/openaiHelpers.js`: Helper functions for OpenAI API interactions.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for more details.
