# Quickstart Guide for SpriteAI SDK

This guide will help you get started with the SpriteAI SDK, a powerful tool for generating character spritesheets, environment sprites, and item sprites using AI.

## Installation

1. First, make sure you have Node.js installed on your system.

2. Clone the SpriteAI repository:
   ```bash
   git clone 
   cd spriteAI
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

## Setting Up

Before using the SDK, you need to set up your OpenAI API key. Make sure you have an account with OpenAI and have obtained an API key.

Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Using the SDK

The SpriteAI SDK provides three main functions for generating game assets:

1. `generateCharacterSpritesheet`
2. `generateEnvironmentSprites`
3. `generateItemSprites`

### Generating a Character Spritesheet

Here's a basic example of how to generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
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

To generate environment sprites:

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

### Generating Item Sprites

To generate item sprites:

```javascript
import { generateItemSprites } from './index.js';

const description = 'medieval weapons';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  itemType: 'equipment',
  background: 'white',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Item sheet generated:', result.itemSheet);
    console.log('Metadata:', result.metadata);
  })
  .catch(error => {
    console.error('Error generating item sprites:', error);
  });
```

## Additional Features

### Fetching Available Animation States

You can fetch the available animation states:

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

To get a list of available sprite styles:

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

## Saving Generated Assets

By default, when the `save` option is set to `true`, the generated assets will be saved in the `assets` folder in the current working directory. The filenames will be based on the description provided, with spaces replaced by underscores.

## Next Steps

- Explore the various options available for each generation function to customize your output.
- Integrate the generated assets into your game development workflow.
- Experiment with different descriptions and styles to create unique game assets.

For more detailed information on the SDK's functions and capabilities, please refer to the full documentation.