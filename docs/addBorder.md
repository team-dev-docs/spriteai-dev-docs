# Add Border Function

## Overview

The `generateSpriteWithBorder` function adds a customizable border around a sprite image. This is useful for creating visual distinction, highlighting sprites, or creating frame effects for your game assets.

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

| Parameter | Type | Default | Description |
|---|---|---|---|
| `description` | string | (required) | Description of the pixel art to generate |
| `borderColor` | object | `{ r: 0, g: 0, b: 0, alpha: 255 }` | RGB color object with alpha value for the border |
| `borderThickness` | number | `1` | Thickness of the border in pixels |
| `options` | object | `{}` | Additional options for pixel art generation |

## Return Value

The function returns a Promise that resolves to an object with the following properties:

| Property | Type | Description |
|---|---|---|
| `original` | string | Base64-encoded data URL of the original sprite |
| `bordered` | string | Base64-encoded data URL of the sprite with the border applied |

## Example

```javascript
// Generate a sprite with a red border
const result = await sprite.generateSpriteWithBorder(
  'simple cartoon cat',
  { r: 255, g: 0, b: 0, alpha: 255 },
  2,
  { save: true }
);

// Use the bordered sprite in your application
document.getElementById('sprite').src = result.bordered;
```

## Implementation Details

Under the hood, this function first generates a pixel art sprite using `generatePixelArt()`, then applies a border using Sharp's `extend()` function with the specified color and thickness parameters.

## Related Functions

- `generatePixelArt()`: Creates the base sprite
- `addOutline()`: Adds an outline to a sprite that follows the sprite's contours instead of creating a rectangular border
