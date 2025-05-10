# Add Border

## Overview

The `generateSpriteWithBorder` function allows you to add a colored border around a generated sprite. This is useful for highlighting sprites, creating visual separation, or adding decorative elements to your game assets.

## Usage

```javascript
const result = await sprite.generateSpriteWithBorder(
  description,
  borderColor,
  borderThickness,
  options
);
```

## Parameters

- **description** (`string`, required): Text description of the sprite to generate.
- **borderColor** (`object`, optional): Color of the border specified as an RGBA object. Defaults to `{ r: 0, g: 0, b: 0, alpha: 255 }` (black).
- **borderThickness** (`number`, optional): Thickness of the border in pixels. Defaults to `1`.
- **options** (`object`, optional): Additional options for sprite generation.

## Returns

An object containing:
- **original** (`string`): Base64-encoded data URL of the original sprite.
- **bordered** (`string`): Base64-encoded data URL of the sprite with the added border.

## Example

```javascript
const result = await sprite.generateSpriteWithBorder(
  'a small cactus',
  { r: 255, g: 0, b: 0, alpha: 255 },  // Red border
  2,  // 2px thickness
  { save: true }
);

console.log(result.original);  // Original sprite as data URL
console.log(result.bordered);  // Bordered sprite as data URL
```

## How It Works

The function uses the `sharp` image processing library to extend the image dimensions by the specified border thickness on all sides (top, right, bottom, and left), filling the extended area with the specified border color.

## Notes

- The border is added outside the original sprite, increasing its dimensions by twice the border thickness (once on each side).
- You can use any valid RGBA color for the border, including transparent colors by adjusting the alpha value.
- The function preserves the original sprite's transparency.
