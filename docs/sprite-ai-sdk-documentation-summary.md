

  # Sprite AI SDK Documentation Summary

## Overview
The Sprite AI SDK is a powerful Node.js toolkit for game developers and designers, offering a range of image processing and AI-powered asset generation functions. It leverages advanced AI models like DALL-E 3 and GPT-4 to create and manipulate sprites, character animations, and game assets.

## Key Features
1. **Sprite Generation**: Create character sprites and animations using AI.
2. **House Asset Generation**: Generate 2D house assets for games.
3. **Image Processing**: 
   - Color replacement
   - Background removal
   - Unique color extraction
4. **Image Encoding**: Convert images to Base64 strings.

## Core Functions

### generateSprite
- Creates sprite sheets optimized for walking animations.
- Uses AI to generate frames based on text descriptions.
- Provides frame dimensions for easy integration with game engines like Phaser.js.

### generateHouseAsset
- Generates 2D assets for house-like structures in games.
- Utilizes DALL-E 3 for custom image creation based on descriptions.

### removeBackgroundColor
- Removes specific background colors from images, making them transparent.
- Useful for preparing sprites and assets for game integration.

### getUniqueColors
- Extracts unique colors from an image.
- Helps in color palette analysis and optimization.

### encodeImage
- Converts image files to Base64 encoded strings.
- Facilitates image data transmission in text-based formats.

### Color Replacement (using Jimp)
- Allows precise color replacement and transparency manipulation in images.
- Useful for creating cutouts, silhouettes, and cleaning up backgrounds.

## Prerequisites
- Node.js environment
- Sprite AI SDK installed via NPM
- OpenAI API key (for AI-powered functions)
- Jimp library (for image processing functions)

## Usage
Most functions are accessed through the `sprite` object:
```javascript
import { sprite } from 'sprite-ai'
```

## Documentation Structure
- README.md: Overview and getting started guide
- dev-docs/task.md: Development tasks and guidelines
- docs/OSS FUNTIME/: Open-source focused documentation
- docs/Sprite methods and Functions/: Detailed function documentation
- yeahboi/Getting Started with Sprite AI.md: Quick start guide

This SDK provides a comprehensive set of tools for game developers, combining traditional image processing techniques with cutting-edge AI capabilities to streamline asset creation and manipulation for game development.

  