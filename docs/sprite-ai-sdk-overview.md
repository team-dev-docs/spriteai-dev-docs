

  # SpriteAI: AI-Powered Game Asset Generation

SpriteAI is a powerful Node.js SDK designed to streamline the process of creating game assets using AI technology. It leverages OpenAI's DALL-E 3 model to generate custom sprites, house assets, and perform various image processing tasks.

## Key Features

1. **Sprite Generation**: Create sprite sheets optimized for walking animations in a retro, Super Nintendo-inspired style.
2. **House Asset Creation**: Generate 2D house assets for use in Phaser.js games.
3. **Background Removal**: Remove specific background colors from images, creating transparency.
4. **Color Analysis**: Extract unique colors from images for palette optimization.
5. **Image Encoding**: Convert images to base64 strings for easy transmission and storage.

## Main Components

### sprite Object

The core functionality is exposed through the `sprite` object, which can be imported as follows:

```javascript
import { sprite } from 'sprite-ai'
```

### Key Methods

1. **generateSprite(description, options)**
   - Creates sprite sheets based on text descriptions.
   - Options include iterations, size, and save preferences.

2. **generateHouseAsset(description, options)**
   - Generates 2D house assets for game environments.
   - Supports multiple iterations and custom sizes.

3. **removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold, options)**
   - Removes specified background colors from images.

4. **getUniqueColors(imagePath, options)**
   - Analyzes images to extract unique color palettes.

5. **encodeImage(imagePath)**
   - Converts image files to base64-encoded strings.

## Use Cases

- Rapid prototyping of game characters and environments
- Automated asset creation for indie game developers
- Color palette extraction and optimization for graphic design
- Image processing and background removal for web and app development

## Prerequisites

- Node.js environment
- OpenAI API key with access to DALL-E 3
- Dependencies: axios, jimp, openai, sharp

## Getting Started

1. Install the SDK: `npm install sprite-ai`
2. Set up your OpenAI API credentials
3. Import and use the desired functions in your project

SpriteAI simplifies game asset creation and image processing tasks, making it an invaluable tool for game developers, designers, and creative professionals working with visual assets.

  