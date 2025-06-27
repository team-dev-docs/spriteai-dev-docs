# SpriteAI Quickstart Guide

## Overview

SpriteAI is a powerful library for generating and manipulating game sprites using AI-powered image generation and processing. This quickstart guide will help you quickly get started with the core functionalities of SpriteAI.

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- OpenAI API Key

## Installation

Install SpriteAI using npm:

```bash
npm install spriteai
```

## Basic Usage

### 1. Generating a Character Spritesheet

Generate a character spritesheet with custom animation states:

```javascript
import { sprite } from 'spriteai';

// Generate a pixel art character spritesheet
const description = 'A warrior knight in pixel art style';
const options = {
  states: ['idle', 'walk', 'attack'],  // Animation states
  framesPerState: 6,                   // Frames per animation
  size: '512x512',                     // Output image size
  style: 'pixel-art',                  // Art style
  direction: 'right'                   // Character facing direction
};

async function createCharacterSprite() {
  try {
    const result = await sprite.generateCharacterSpritesheet(description, options);
    
    // Access the generated spritesheet
    console.log('Spritesheet URL:', result.original);
    console.log('Base64 Spritesheet:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  } catch (error) {
    console.error('Sprite generation failed:', error);
  }
}

createCharacterSprite();
```

### 2. Generating Pixel Art

Create pixel art sprites with AI:

```javascript
import { sprite } from 'spriteai';

async function createPixelArt() {
  const description = 'A cute robot exploring a futuristic city';
  const result = await sprite.generatePixelArt(description);
  
  // Display or save the generated pixel art
  console.log('Pixel Art:', result.image);
}

createPixelArt();
```

### 3. Generating a Landscape Sprite

Create game background or environment sprites:

```javascript
import { sprite } from 'spriteai';

async function createLandscapeSprite() {
  const description = 'A mystical forest with ancient trees';
  const options = {
    size: '1024x1024',
    style: 'pixel-art',
    timeOfDay: 'sunset',
    weather: 'misty',
    perspective: 'side-scrolling'
  };

  const result = await sprite.generateLandscapeSprite(description, options);
  console.log('Landscape Sprite:', result.landscape);
}

createLandscapeSprite();
```

## Advanced Image Processing

### Remove Background Color

Remove specific background colors from images:

```javascript
import { sprite } from 'spriteai';

async function processImage() {
  const inputPath = 'path/to/input/image.png';
  const outputPath = 'path/to/output/image.png';
  
  await sprite.removeBackgroundColor(
    inputPath, 
    outputPath, 
    '#FFFFFF',  // Target color to remove
    0.1         // Color matching threshold
  );
}

processImage();
```

## Configuration

Ensure you have set up your OpenAI API key in your environment:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Error Handling

Always use try/catch blocks when working with asynchronous sprite generation methods to handle potential errors gracefully.

## Supported Styles and Options

- Art Styles: 'pixel-art', 'retro', 'modern'
- Perspectives: 'side-scrolling', 'top-down', 'isometric'
- Time of Day: 'day', 'night', 'sunset', 'dawn'
- Weather Effects: 'clear', 'rainy', 'foggy', 'snowy'

## Next Steps

- Explore advanced sprite manipulation techniques
- Check out the full API documentation
- Join our community forums for tips and inspiration

## Troubleshooting

- Ensure you have a valid OpenAI API key
- Check your network connection
- Verify Node.js and npm are up to date
- Review error messages for specific guidance

## Support

For more detailed information, visit our documentation or contact support.
