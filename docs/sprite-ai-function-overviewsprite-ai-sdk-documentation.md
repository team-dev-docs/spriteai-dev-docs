

  # Sprite AI SDK Documentation

## Overview
The Sprite AI SDK is a powerful tool for game developers and designers, offering AI-powered functions for image processing, sprite generation, and asset creation. This documentation covers the key functions and their usage.

## Key Functions

### generateSprite
Creates sprite sheets for game characters with AI-generated walking animations.

### generateHouseAsset
Generates 2D assets for houses or buildings in games using DALL-E 3.

### removeBackgroundColor
Removes a specific background color from an image, making it transparent.

### getUniqueColors
Extracts unique colors from an image for palette analysis.

### encodeImage
Converts image files to Base64 encoded strings for easy transmission.

## Installation

```
npm install sprite-ai
```

## Usage Example

```javascript
import { sprite } from 'sprite-ai';

async function createGameAssets() {
  const characterSprite = await sprite.generateSprite("a blue robot");
  const houseAsset = await sprite.generateHouseAsset("medieval stone cottage");
  // Use these assets in your game...
}
```

For detailed usage of each function, refer to the individual function documentation in the docs folder.

  