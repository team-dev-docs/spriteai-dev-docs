---
slug: /addBorder
sidebar_position: 8
---

# Add Border to Sprites

## Brief Description
`generateSpriteWithBorder` adds a solid color border around a sprite or image, enhancing its visibility and creating visual separation from backgrounds.

## Usage
To add a border to a sprite, import the sprite module and call the `generateSpriteWithBorder` method with the desired parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate.
- `borderColor` (object, optional): The color of the border in RGBA format.
  - Default: `{ r: 0, g: 0, b: 0, alpha: 255 }` (solid black)
  - Example: `{ r: 255, g: 0, b: 0, alpha: 255 }` (solid red)
- `borderThickness` (number, optional): The thickness of the border in pixels.
  - Default: `1`
- `options` (object, optional): Additional options for sprite generation.
  - See the [generatePixelArt documentation](./generatePixelArt) for available options.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite before adding the border.
- `bordered`: Base64-encoded image data URL of the sprite with the applied border.

## Examples

1. Create a sprite with a default black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A small mushroom");
console.log(result.original);  // Original sprite without border
console.log(result.bordered);  // Sprite with black border
```

2. Create a sprite with a custom red border of 3 pixels:
```javascript
const redBorder = { r: 255, g: 0, b: 0, alpha: 255 };
const result = await sprite.generateSpriteWithBorder(
  "A treasure chest", 
  redBorder, 
  3
);
```

3. Create a sprite with a semi-transparent blue border:
```javascript
const blueBorder = { r: 0, g: 0, b: 255, alpha: 128 };
const result = await sprite.generateSpriteWithBorder(
  "A glowing crystal", 
  blueBorder, 
  2,
  { save: true }
);
```

## How It Works
The `generateSpriteWithBorder` function first generates a pixel art sprite based on the description using the `generatePixelArt` method. It then extends the image by the specified border thickness in all directions (top, right, bottom, left) using the provided border color.

## Notes
- The border is added outside the original sprite, increasing its overall dimensions.
- For best results with pixel art, use border thickness values that maintain the pixel grid (1, 2, 4, etc.).
- Semi-transparent borders (alpha < 255) can create interesting overlay effects.
- The function works well for highlighting sprites in game UIs or for selection indicators.
