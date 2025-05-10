# addBorder Function

## Overview

The `addBorder` function (or `generateSpriteWithBorder`) allows you to add a customizable border around your sprites. This is useful for highlighting sprites, creating selections, or adding visual separation between sprite elements.

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

- **description** (`string`, required): Text description of the sprite to generate
- **borderColor** (`object`, optional): Color of the border in RGBA format
  - Default: `{ r: 0, g: 0, b: 0, alpha: 255 }` (solid black)
- **borderThickness** (`number`, optional): Width of the border in pixels
  - Default: `1`
- **options** (`object`, optional): Additional options for sprite generation

## Return Value

The function returns a Promise that resolves to an object with the following properties:

- **original** (`string`): Base64-encoded data URL of the original sprite
- **bordered** (`string`): Base64-encoded data URL of the sprite with border

## Examples

### Basic Usage

```javascript
const sprite = require('spriteai');

// Create a sprite of a cat with a default black border
const result = await sprite.generateSpriteWithBorder('cat', {}, 1);
console.log(result.bordered); // Use this data URL in your application
```

### Custom Border

```javascript
// Red border with 3px thickness
const redBorder = await sprite.generateSpriteWithBorder(
  'treasure chest',
  { r: 255, g: 0, b: 0, alpha: 255 },
  3
);
```

### Semi-transparent Border

```javascript
// Purple semi-transparent border
const glowBorder = await sprite.generateSpriteWithBorder(
  'magic wand', 
  { r: 128, g: 0, b: 255, alpha: 128 },
  2
);
```

## How It Works

The function works by:

1. Generating a pixel art sprite based on the provided description
2. Extending the dimensions of the sprite by the border thickness amount
3. Filling the extended area with the specified border color
4. Returning both the original and bordered versions as data URLs

## Tips

- For a glowing effect, use a semi-transparent border with a bright color
- Keep border thickness proportional to your sprite size (1-2px for small sprites)
- For multiple borders, you can call the function multiple times with different settings

## Related Functions

- `addOutline`: Creates an outline that follows the contours of the sprite
- `addShadow`: Adds a drop shadow to a sprite
