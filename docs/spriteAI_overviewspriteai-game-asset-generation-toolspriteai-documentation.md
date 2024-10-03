

  # SpriteAI Documentation

## Overview

SpriteAI is a powerful tool for game developers and digital artists that leverages AI to generate and manipulate sprite assets for use in game development, particularly with Phaser JS.

## Key Features

1. Sprite Generation
2. House Asset Generation
3. Background Color Removal
4. Unique Color Extraction

## Target Audience

- Game developers
- Digital artists
- Phaser JS users

## Main Functions

### generateSprite(description, options)

Generates sprite sheets based on text descriptions.

- Parameters:
  - description: String describing the desired sprite
  - options: Object containing additional settings

### generateHouseAsset(description, options)

Creates 2D assets for house-like structures in games.

- Parameters:
  - description: String describing the desired house asset
  - options: Object containing additional settings

### removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold, options)

Removes specified background colors from images.

### getUniqueColors(imagePath, options)

Extracts unique colors from an image.

## Technology Stack

- OpenAI API (DALL-E 3, GPT-4 Vision, GPT-3.5 Turbo)
- Sharp for image processing
- Jimp for image manipulation
- Axios for HTTP requests

## Usage Examples

```javascript
const sprite = await SpriteAI.generateSprite("medieval knight");
const houseAsset = await SpriteAI.generateHouseAsset("futuristic skyscraper");
```

## Best Practices

1. Provide clear, detailed descriptions for best results
2. Experiment with different options to fine-tune outputs
3. Use the iteration feature for multiple variations

## Limitations

- Image generation is subject to DALL-E 3's capabilities
- Processing time may vary based on complexity of requests

  