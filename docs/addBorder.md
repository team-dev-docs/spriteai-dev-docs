# addBorder Function

## Overview

The `generateSpriteWithBorder` function allows you to add a colored border around a sprite. This is useful for highlighting sprites, creating outlined effects, or visually separating a sprite from its background.

## Function Signature

```javascript
async function generateSpriteWithBorder(description, borderColor = { r: 0, g: 0, b: 0, alpha: 255 }, borderThickness = 1, options = {})
```

## Parameters

- `description` (string) - Description of the sprite to generate
- `borderColor` (object) - Object with RGBA values for the border color
  - `r` (number) - Red component (0-255)
  - `g` (number) - Green component (0-255)
  - `b` (number) - Blue component (0-255)
  - `alpha` (number) - Alpha/opacity component (0-255)
- `borderThickness` (number) - Thickness of the border in pixels
- `options` (object) - Additional options passed to the sprite generation function

## Returns

An object containing:
- `original` - Base64 data URL of the original sprite
- `bordered` - Base64 data URL of the sprite with added border

## Example Usage

```javascript
// Generate a sprite with a red border
const result = await sprite.generateSpriteWithBorder(
  'small mushroom',
  { r: 255, g: 0, b: 0, alpha: 255 },
  2
);

// Display the bordered sprite in an HTML image
document.getElementById('sprite').src = result.bordered;
```

## Advanced Examples

### Creating a Thick Black Border

```javascript
const thickBorder = await sprite.generateSpriteWithBorder(
  'wizard character',
  { r: 0, g: 0, b: 0, alpha: 255 },
  4,
  { size: '512x512' }
);
```

### Adding a Semi-Transparent Blue Border

```javascript
const glowBorder = await sprite.generateSpriteWithBorder(
  'energy orb',
  { r: 0, g: 100, b: 255, alpha: 180 },
  3
);
```

## Implementation Details

The function uses Sharp's `extend` operation to add padding around the image with the specified color and thickness. This creates a uniform border around the entire sprite without modifying the original sprite content.

## Notes

- The border is added outside the sprite, increasing its overall dimensions
- For best visual results, use border thickness values between 1-5 pixels
- Semi-transparent borders (alpha < 255) can create subtle highlighting effects
- The function preserves the sprite's original transparency
