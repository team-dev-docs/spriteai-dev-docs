---
slug: /addBorder
sidebar_position: 9
---

# Add Border to Sprite

## Brief Description
`generateSpriteWithBorder` is a function that adds a customizable border around a generated pixel art sprite image.

## Usage
To add a border to a sprite, import the sprite module and call the generateSpriteWithBorder method with your desired parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the character or object to generate.
- `borderColor` (object, optional): An RGBA color object for the border. Default is black `{ r: 0, g: 0, b: 0, alpha: 255 }`.
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is `1`.
- `options` (object, optional): Additional options for sprite generation.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite without border.
- `bordered`: Base64-encoded image data URL of the sprite with the applied border.

## Examples

1. Add a simple black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated mushroom");
console.log(result.original); // Original sprite
console.log(result.bordered); // Sprite with black border
```

2. Add a red border with custom thickness:
```javascript
const redBorder = { r: 255, g: 0, b: 0, alpha: 255 };
const result = await sprite.generateSpriteWithBorder(
  "A cartoon knight", 
  redBorder, 
  3,  // 3 pixel thick border
  { save: true } // Additional options
);
```

3. Add a semi-transparent blue border:
```javascript
const blueBorder = { r: 0, g: 0, b: 255, alpha: 128 }; // Semi-transparent blue
const result = await sprite.generateSpriteWithBorder(
  "A space alien", 
  blueBorder, 
  2
);
```

## How It Works
The function first generates a pixel art sprite based on your description, then extends the image canvas by the specified border thickness on all sides (top, right, bottom, and left), filling the extended area with the specified border color.

## Notes or Considerations
- The border is added uniformly around all sides of the sprite.
- For best results with pixel art, use integer values for the border thickness.
- Semi-transparent borders (alpha < 255) will blend with the background when displayed.
- Border colors can be specified using the RGBA format, providing flexibility for various visual effects.
- This function builds on the base pixel art generation capabilities of the sprite module.
