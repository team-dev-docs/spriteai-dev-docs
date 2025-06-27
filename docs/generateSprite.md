---
slug: /
sidebar_position: 1
---
# generateSprite

## Overview

The `generateSprite` function is a powerful tool in the SpriteAI SDK that allows you to generate sprite sheets for game characters using advanced AI technology. It creates pixel art sprite sheets optimized for walking animations by leveraging DALL-E 3 and GPT models.

## Why Use This Function?

Using `generateSprite` offers several key benefits:
- Quickly generate unique character sprites for game development
- Create sprites with consistent style and animation potential
- Eliminate manual sprite creation time
- Leverage AI to produce diverse and creative sprite designs

## Parameters and Arguments

### description (string, required)
- A text description of the character you want to generate
- Example: "A medieval knight", "A robotic cat"

### options (object, optional)
- `iterations` (number): Number of sprite variations to generate
- `size` (string): Size of generated image (default: "1024x1024")
- `save` (boolean): Whether to save the generated image to disk

## Prerequisites

- OpenAI API key
- Node.js environment
- Install spriteAI package via npm
- Stable internet connection

## How to Use the Function

### Basic Usage
```javascript
import { sprite } from 'spriteai';

// Generate a single sprite
const result = await sprite.generateSprite('A pixelated robot');
```

### Multiple Sprite Variations
```javascript
// Generate multiple sprite variations
const variations = await sprite.generateSprite('A cartoon cat', { iterations: 3 });
```

### Saving Sprites
```javascript
// Generate and save sprite
const result = await sprite.generateSprite('A ninja warrior', { save: true });
```

## Important Notes

- Sprites are optimized for walking animations
- Generated images follow a 2x3 grid layout (6 frames)
- Images are converted to grayscale
- Generation time varies based on AI processing

## Return Value

Returns an array or object with:
- `messages`: Frame dimension information
- `image`: Base64-encoded sprite sheet image

## Error Handling

```javascript
try {
  const sprite = await sprite.generateSprite('Character description');
} catch (error) {
  console.error('Sprite generation failed:', error);
}
```
