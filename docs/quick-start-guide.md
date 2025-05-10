# Quick Start Guide for SpriteAI

This guide will help you get started with SpriteAI, a tool for generating game assets using AI.

## Prerequisites

Before you begin, make sure you have the following installed:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Install SpriteAI in your project:

```bash
npm install spriteai
```

2. Set up your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Usage

### Generating Character Spritesheets

To generate a character spritesheet:

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'a cute cat wizard';
const options = {
  states: ['idle', 'walk', 'run', 'attack'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
console.log(result);
```

This will generate a spritesheet with the specified animations and save it to the 'assets' folder.

### Generating Landscape Sprites

To generate a landscape sprite:

```javascript
import { generateLandscapeSprite } from 'spriteai';

const description = 'a magical forest';
const options = {
  size: '1024x1024',
  style: 'pixel-art',
  timeOfDay: 'sunset',
  weather: 'clear',
  perspective: 'side-scrolling',
  save: true
};

const result = await generateLandscapeSprite(description, options);
console.log(result);
```

This will generate a landscape sprite and save it to the 'assets' folder.

## Options

### Character Spritesheet Options

- `states`: Array of animation states (default: ['idle', 'walk', 'run', 'attack'])
- `framesPerState`: Number of frames per animation state (default: 6)
- `size`: Output size of the image (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `padding`: Padding between sprites (default: 1)
- `direction`: Base direction of the character (default: 'right')
- `save`: Whether to save the generated image (default: false)

### Landscape Sprite Options

- `size`: Output size of the image (default: '1024x1024')
- `style`: Art style (default: 'pixel-art')
- `timeOfDay`: Time of day setting (default: 'day')
- `weather`: Weather conditions (default: 'clear')
- `perspective`: Perspective of the landscape (default: 'side-scrolling')
- `save`: Whether to save the generated image (default: false)
- `removeBackground`: Whether to remove the background (optional)
- `backgroundColor`: Background color to remove (optional, used with removeBackground)
- `colorThreshold`: Threshold for background color removal (optional, used with removeBackground)

## Output

Both functions return an object containing:
- `original`: URL of the original generated image
- `spritesheet` or `landscape`: Base64-encoded PNG data of the processed image
- `metadata`: Object containing information about the generated sprite

## Notes

- Make sure you have a valid OpenAI API key set up as an environment variable.
- The generated images will be saved in the 'assets' folder of your project if the `save` option is set to `true`.
- The quality and style of the generated sprites depend on the DALL-E model and the provided descriptions.

For more detailed information and advanced usage, please refer to the full documentation.