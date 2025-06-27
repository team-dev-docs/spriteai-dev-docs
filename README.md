# SpriteAI Quick Start Guide

## Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)
- OpenAI API Key

## Installation

```bash
npm install spriteai
```

## Basic Usage

### Generating Character Spritesheets

```javascript
import { generateCharacterSpritesheet } from 'spriteai';

const description = 'A pixelated ninja warrior';
const options = {
  states: ['idle', 'walk', 'attack'],
  framesPerState: 6,
  size: '512x512',
  style: 'pixel-art',
  direction: 'right'
};

async function createSprite() {
  try {
    const result = await generateCharacterSpritesheet(description, options);
    console.log('Spritesheet generated:', result.spritesheet);
    console.log('Metadata:', result.metadata);
  } catch (error) {
    console.error('Sprite generation failed:', error);
  }
}

createSprite();
```

### Generating Pixel Art

```javascript
import { generatePixelArt } from 'spriteai';

async function createPixelArt() {
  const pixelArt = await generatePixelArt('A cute robot', {
    save: true
  });

  console.log('Pixel Art URL:', pixelArt.url);
}
```

### Additional Effects

```javascript
import { 
  addShadow, 
  addReflectionEffect, 
  createElementalVariation 
} from 'spriteai';

async function enhanceSprite() {
  const baseSprite = await generatePixelArt('A dragon');
  
  const spriteWithShadow = await addShadow(baseSprite, { 
    shadowColor: 'dark-gray', 
    opacity: 0.5 
  });

  const reflectedSprite = await addReflectionEffect(baseSprite);
  
  const fireElementSprite = await createElementalVariation(baseSprite, {
    elementType: 'fire'
  });
}
```

## Configuration

### API Keys

Set your OpenAI API key as an environment variable:

```bash
export OPENAI_API_KEY='your-api-key-here'
```

## Supported Methods

- `generateCharacterSpritesheet()`
- `generatePixelArt()`
- `generateIsometric()`
- `generateRetroConsole()`
- `addShadow()`
- `addOutline()`
- `addReflectionEffect()`
- And many more!

## Error Handling

Always wrap async sprite generation methods in try/catch blocks to handle potential API or processing errors.

## Notes

- Sprite generation relies on OpenAI's DALL-E 3 model
- Image processing is done using Sharp library
- Results may vary based on input description and model capabilities
