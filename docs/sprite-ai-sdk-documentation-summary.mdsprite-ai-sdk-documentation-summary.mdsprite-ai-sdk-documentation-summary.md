

  # Sprite AI SDK Documentation Summary

## Overview
The Sprite AI SDK is a powerful Node.js toolkit for game developers and designers, offering a range of image processing and AI-powered asset generation functions. It leverages advanced AI models like DALL-E 3 and GPT-4 to create and manipulate game assets, particularly sprite sheets and character animations.

## Key Features

1. **Sprite Generation**: Create character sprites and animations using AI.
2. **House Asset Generation**: Generate 2D house assets for game environments.
3. **Image Processing**: 
   - Color replacement
   - Background removal
   - Unique color extraction
4. **Image Encoding**: Convert images to Base64 strings.

## Main Functions

### generateSprite
- Creates sprite sheets optimized for walking animations.
- Uses AI to generate frames based on text descriptions.
- Provides frame dimensions for use in game engines like Phaser.js.

### generateHouseAsset
- Generates 2D assets for house-like structures in games.
- Utilizes DALL-E 3 for custom image creation based on descriptions.

### removeBackgroundColor
- Removes specific background colors from images, making them transparent.
- Useful for preparing sprites and game assets.

### getUniqueColors
- Extracts a palette of unique colors from an image.
- Helpful for color analysis and optimization in game graphics.

### encodeImage
- Converts image files to Base64 encoded strings.
- Facilitates image data transmission in text-based formats.

### Color Replacement (using Jimp)
- Replaces specific colors in images with transparency.
- Aids in creating cutouts, silhouettes, and cleaning up backgrounds.

## Usage
The SDK is designed for use in a Node.js environment. Most functions are asynchronous and return Promises, requiring the use of async/await or .then() syntax.

## Prerequisites
- Node.js installed
- Sprite AI SDK installed via NPM
- OpenAI API key (for AI-powered functions)
- Jimp library (for certain image processing tasks)

## Getting Started
To use the SDK, import it in your Node.js project:

```javascript
import { sprite } from 'sprite-ai'
```

Then, you can access various functions like:

```javascript
const result = await sprite.generateSprite("description", options);
```

## Documentation Structure
The documentation is organized into several markdown files, covering individual functions, usage guides, and examples. It includes both core SDK functions and additional utilities for open-source use.

  