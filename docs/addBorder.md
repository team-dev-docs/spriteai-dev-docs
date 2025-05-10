# Adding Borders to Sprites

`generateSpriteWithBorder` is a utility function that allows you to add customizable borders around sprites generated with SpriteAI.

## Overview

This function applies a border of specified color and thickness around a pixel art sprite. This can be useful for:
- Creating visual emphasis around game characters or items
- Adding outlines to make sprites more visible against backgrounds
- Creating different visual styles for your game assets

## Function Signature

```javascript
async function generateSpriteWithBorder(
  description, 
  borderColor = { r: 0, g: 0, b: 0, alpha: 255 }, 
  borderThickness = 1, 
  options = {}
)
```

## Parameters

- `description` (String): Description of the sprite you want to generate
- `borderColor` (Object): Color of the border specified as an RGBA object
  - Default: Black `{ r: 0, g: 0, b: 0, alpha: 255 }`
- `borderThickness` (Number): The width of the border in pixels
  - Default: `1`
- `options` (Object): Additional options passed to `generatePixelArt`

## Return Value

The function returns a Promise that resolves to an object with these properties:
- `original`: Base64 data URL of the original sprite without border
- `bordered`: Base64 data URL of the sprite with the added border

## Examples

### Adding a simple black border

```javascript
const result = await sprite.generateSpriteWithBorder('small mushroom');
displayImage(result.bordered);
```

### Adding a custom colored border

```javascript
const result = await sprite.generateSpriteWithBorder(
  'gold coin',
  { r: 255, g: 215, b: 0, alpha: 255 }, // Gold color
  2 // 2px border
);
displayImage(result.bordered);
```

### Adding a semi-transparent border

```javascript
const result = await sprite.generateSpriteWithBorder(
  'healing potion',
  { r: 255, g: 0, b: 0, alpha: 128 }, // Semi-transparent red
  3 // 3px border
);
displayImage(result.bordered);
```

## How It Works

Under the hood, this function:
1. Generates a pixel art sprite based on your description
2. Uses Sharp's `extend` function to add padding around the image
3. Fills the padding with the specified border color
4. Returns both the original and bordered versions of the sprite

## Related Functions

- `generateOutline`: Creates an outline around a sprite using a different technique
- `addOutline`: Higher-level wrapper that accepts a description instead of an image buffer
