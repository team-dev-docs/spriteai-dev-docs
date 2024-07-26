
  
  # **Sprite Generation with AI**

## What does this do?

This module provides functionality to generate sprite sheets and game assets using AI-powered image generation. It offers two main methods:

1. `generateSprite`: Creates a sprite sheet with walking animations.
2. `generateHouseAsset`: Produces 2D assets for use in Phaser JS games.

## Why should I use this?

Using this module allows you to:

1. Quickly generate custom sprite sheets for game characters.
2. Create unique 2D assets for game environments.
3. Leverage AI to streamline the asset creation process for game development.
4. Iterate and experiment with different designs by generating multiple versions.

## Prerequisites

- Node.js environment
- OpenAI API key
- Axios for HTTP requests
- Sharp for image processing

## How to use this

### Generating a Sprite Sheet

```javascript
const result = await sprite.generateSprite("knight", {
  iterations: 3,
  size: "1024x1024",
  save: true
});
```

This will generate 3 iterations of a knight sprite sheet, each 1024x1024 pixels, and save the images.

### Creating a 2D Game Asset

```javascript
const asset = await sprite.generateHouseAsset("medieval castle", {
  size: "1024x1024"
});
```

This generates a 2D asset of a medieval castle for use in a Phaser JS game.

The module uses DALL-E 3 for image generation and GPT-4 Vision for analyzing the generated images. It can produce grayscale images and provide frame dimensions for use in Phaser JS sprite sheets.

Note: The actual frame dimensions are determined by AI analysis of the generated image, ensuring optimal sizing for game development use.
  
  