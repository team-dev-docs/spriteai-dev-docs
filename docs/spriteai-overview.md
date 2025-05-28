# SpriteAI Overview

## Introduction

SpriteAI is a powerful tool designed to generate and manipulate game assets using AI-powered image generation and processing techniques. This overview will introduce you to the key features and functionalities of SpriteAI, helping you understand how it can streamline your game development process.

## Key Features

### 1. Character Spritesheet Generation

SpriteAI allows you to generate character spritesheets based on text descriptions. This feature is particularly useful for creating animated characters with various states and actions.

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a cute dragon';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
  save: true
};

const result = await generateCharacterSpritesheet(description, options);
```

### 2. Environment Sprite Generation

Create environmental elements for your game world using AI-generated sprites.

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'forest elements';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'pixel-art',
  theme: 'fantasy'
};

const result = await generateEnvironmentSprites(description, options);
```

### 3. Item Sprite Generation

Generate a collection of item sprites for game inventories or pickups.

```javascript
import { generateItemSprites } from './index.js';

const description = 'magical artifacts';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'pixel-art',
  itemType: 'equipment'
};

const result = await generateItemSprites(description, options);
```

### 4. Background Removal

SpriteAI includes functionality to remove specific background colors from images, useful for creating transparent sprites.

```javascript
import { removeBackgroundColor } from './index.js';

const inputPath = 'path/to/image.png';
const outputPath = 'path/to/output.png';
const targetColor = '#FFFFFF';
const colorThreshold = 10;

await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);
```

## Additional Functionalities

- **Fetch Available Animation States**: Retrieve a list of available animation states for character sprites.
- **Fetch Available Sprite Styles**: Get information on the different sprite styles supported by SpriteAI.

## Integration with OpenAI

SpriteAI leverages OpenAI's DALL-E 3 model for image generation, ensuring high-quality and diverse sprite outputs based on text descriptions.

## Customization Options

Most generation functions in SpriteAI accept various options for customization, including:
- Image size
- Art style
- Number of frames or elements
- Specific themes or directions

## Output and Saving

Generated sprites can be returned as base64-encoded image data or direct URLs. The library also supports saving generated assets to disk for easy integration into your project workflow.

## Conclusion

SpriteAI offers a comprehensive suite of tools for game developers looking to quickly generate high-quality sprite assets. By combining AI-powered image generation with specialized processing techniques, SpriteAI streamlines the creation of characters, environments, and items for your game projects.

For more detailed information on specific functions, please refer to the individual documentation pages for each feature.