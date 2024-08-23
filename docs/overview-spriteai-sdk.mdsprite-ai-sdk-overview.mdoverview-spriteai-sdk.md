

  # Overview of the SpriteAI SDK

The SpriteAI SDK is a powerful Node.js library designed to simplify and enhance game development and image processing tasks. It offers a range of functions that leverage artificial intelligence and advanced image manipulation techniques to streamline the creation of game assets and optimize image handling.

## Key Features

1. **Image Processing**
   - Color replacement
   - Background removal
   - Unique color extraction

2. **Asset Generation**
   - AI-powered sprite sheet creation
   - 2D house asset generation

3. **Image Encoding**
   - Convert images to base64 strings

## Core Functions

### Image Processing

- `removeBackgroundColor`: Removes a specified background color from an image, creating transparency.
- `getUniqueColors`: Extracts a palette of unique colors from an image.

### Asset Generation

- `generateSprite`: Creates sprite sheets optimized for walking animations using AI.
- `generateHouseAsset`: Generates 2D house assets for Phaser JS games using DALL-E 3.

### Utility Functions

- `encodeImage`: Converts image files to base64 encoded strings.

## Getting Started

To use the SpriteAI SDK, install it via NPM:

```
npm install sprite-ai
```

Then, import the SDK in your project:

```javascript
import { sprite } from 'sprite-ai'
```

## Key Benefits

- Rapid prototyping of game characters and assets
- Automated sprite sheet creation
- Easy integration with game engines like Phaser.js
- Powerful image processing capabilities
- Leverages advanced AI models for asset generation

## Prerequisites

- Node.js environment
- OpenAI API credentials (for AI-powered functions)
- Jimp library (for certain image processing tasks)

The SpriteAI SDK simplifies complex tasks in game development and image processing, allowing developers to focus on creating engaging content while leveraging the power of AI and advanced image manipulation techniques.

  