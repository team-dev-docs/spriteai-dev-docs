# Adding Borders to Sprites

## Overview

The `generateSpriteWithBorder` function allows you to add a colored border around your generated pixel art sprites. This is useful for highlighting sprites, creating visual separation between sprites and backgrounds, or adding decorative elements to your game assets.

## Function Signature

```javascript
async generateSpriteWithBorder(description, borderColor = { r: 0, g: 0, b: 0, alpha: 255 }, borderThickness = 1, options = {})
```

## Parameters

- `description` (string): A text description of the sprite you want to generate
- `borderColor` (object): The color of the border defined as an RGBA object
  - Default: `{ r: 0, g: 0, b: 0, alpha: 255 }` (solid black)
- `borderThickness` (number): The thickness of the border in pixels
  - Default: `1`
- `options` (object): Additional options that are passed to the `generatePixelArt` function

## Return Value

Returns a Promise that resolves to an object containing:

- `original`: The original sprite as a base64 data URL
- `bordered`: The sprite with an added border as a base64 data URL

## Example Usage

### Basic Usage

```javascript
// Generate a pixel art cat with a default black border
const result = await sprite.generateSpriteWithBorder('cat');
console.log(result.bordered); // Data URL for bordered sprite
```

### Custom Border Color and Thickness

```javascript
// Generate a pixel art dragon with a thick red border
const redBorder = { r: 255, g: 0, b: 0, alpha: 255 };
const borderThickness = 3;
const dragon = await sprite.generateSpriteWithBorder('dragon', redBorder, borderThickness);
```

### With Additional Options

```javascript
// Generate a pixel art tree with a green border and save the result
const greenBorder = { r: 0, g: 255, b: 0, alpha: 255 };
const options = { save: true };
const tree = await sprite.generateSpriteWithBorder('tree', greenBorder, 2, options);
```

## How It Works

The function first generates a pixel art sprite based on your description using the `generatePixelArt` method. It then uses the Sharp library's `extend` method to add a border of the specified color and thickness around the image.

## Tips

- For a semi-transparent border, adjust the `alpha` value in the `borderColor` object (0-255)
- Keep border thickness proportional to your sprite size (1-3 pixels usually works well for small sprites)
- Consider using contrasting colors for borders to make sprites stand out
- For a glowing effect, try using a bright border color with partial transparency

## Related Functions

- `generatePixelArt()`: Creates the base pixel art sprite
- `addOutline()`: Creates an outline that follows the sprite's shape rather than adding a rectangular border
