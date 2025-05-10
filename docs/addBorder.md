# Add Border Function

## Overview
The `generateSpriteWithBorder` function adds a colored border around a sprite image. This is useful for highlighting sprites, creating frames around game assets, or defining sprite boundaries for visual clarity.

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

- `description` (string) - Description of the sprite to be generated
- `borderColor` (object, optional) - Border color in RGBA format
  - Default: `{ r: 0, g: 0, b: 0, alpha: 255 }` (solid black)
- `borderThickness` (number, optional) - Border thickness in pixels
  - Default: `1`
- `options` (object, optional) - Additional options for sprite generation

## Returns

An object containing:
- `original` - Base64 data URL of the original sprite image
- `bordered` - Base64 data URL of the sprite with added border

## Example

```javascript
// Generate a character sprite with a red border
const result = await sprite.generateSpriteWithBorder(
  'fantasy warrior character',
  { r: 255, g: 0, b: 0, alpha: 255 },  // Red border
  2,  // 2-pixel thickness
  { size: '512x512' }
);

// Use the bordered sprite
console.log(result.bordered);
// => data:image/png;base64,...

// Both original and bordered versions are available
console.log(result.original);
// => data:image/png;base64,...
```

## Implementation Details

The function works by:
1. Generating a pixel art sprite based on the provided description
2. Using Sharp's `extend` method to add a border with the specified color and thickness
3. Converting the result to a base64-encoded data URL

Under the hood, the implementation uses the Sharp image processing library to efficiently add the border by extending the image dimensions in all four directions.

## Related Functions

- `generatePixelArt` - Creates the base sprite image
- `addOutline` - Adds an outline around the sprite content rather than extending the canvas
