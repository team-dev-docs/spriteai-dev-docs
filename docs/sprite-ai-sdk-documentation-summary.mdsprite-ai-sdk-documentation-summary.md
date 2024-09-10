

  # Sprite AI SDK Documentation Summary

## Overview
The Sprite AI SDK is a powerful Node.js toolkit designed for game developers and digital artists. It provides a suite of functions for image processing, sprite generation, and asset creation using advanced AI models.

## Key Features
1. **AI-Powered Sprite Generation**: Create character animations and sprite sheets using DALL-E 3 and GPT-4 Vision.
2. **Image Processing Tools**: 
   - Color replacement
   - Background removal
   - Unique color extraction
3. **Asset Creation**: Generate 2D house assets for game development.
4. **Utility Functions**: Image encoding to Base64 strings.

## Core Functions

### generateSprite
- Creates sprite sheets optimized for walking animations.
- Uses AI to generate frames based on text descriptions.
- Provides frame dimensions for easy integration with game engines like Phaser.js.

### removeBackgroundColor
- Removes specific background colors from images, creating transparency.
- Useful for preparing sprites and game assets.

### generateHouseAsset
- Generates 2D house assets for Phaser.js games using DALL-E 3.
- Customizable with options for iterations and image size.

### getUniqueColors
- Extracts a palette of unique colors from an image.
- Useful for color analysis and optimization in game graphics.

### encodeImage
- Converts image files to Base64 encoded strings.
- Facilitates easy transmission of image data in JSON payloads.

### Color Replacement with Jimp
- Allows precise color manipulation in images.
- Useful for creating cutouts, silhouettes, and cleaning up backgrounds.

## Getting Started
- Install the SDK via NPM: `npm install sprite-ai`
- Import the SDK: `import { sprite } from 'sprite-ai'`
- Ensure you have the necessary API keys for OpenAI services.

## Use Cases
- Rapid prototyping of game characters and environments.
- Automated asset creation for game development.
- Image processing and optimization for web and mobile applications.
- Color palette extraction for design purposes.

## Prerequisites
- Node.js environment
- OpenAI API key (for AI-powered functions)
- Jimp library (for image processing functions)

This SDK combines AI capabilities with traditional image processing techniques, offering a comprehensive toolkit for modern game development and digital asset creation.

  