# Adding Borders to Sprites

## Overview
The `generateSpriteWithBorder` function allows you to add a colored border around your sprites. This is useful for highlighting sprites, creating visual separation between elements, or adding decorative frames around your pixel art.

## Function Signature
```javascript
async function generateSpriteWithBorder(description, borderColor = { r: 0, g: 0, b: 0, alpha: 255 }, borderThickness = 1, options = {})
```

## Parameters
- `description` (string): Description of the sprite to generate
- `borderColor` (object): The color for the border with RGBA components
  - `r` (number): Red channel (0-255)
  - `g` (number): Green channel (0-255)
  - `b` (number): Blue channel (0-255)
  - `alpha` (number): Alpha/transparency channel (0-255)
- `borderThickness` (number): The thickness of the border in pixels (default: 1)
- `options` (object): Additional options for sprite generation

## Returns
Promise that resolves to an object with:
- `original`: Base64 data URL of the original sprite
- `bordered`: Base64 data URL of the sprite with added border

## Examples

### Basic Usage
```javascript
// Create a sprite with a default black border
const spriteBordered = await sprite.generateSpriteWithBorder('simple mushroom');
```

### Customizing Border Color and Thickness
```javascript
// Create a sprite with a red border that's 3 pixels thick
const spriteBordered = await sprite.generateSpriteWithBorder(
  'simple mushroom',
  { r: 255, g: 0, b: 0, alpha: 255 },
  3
);
```

### Semi-Transparent Border
```javascript
// Create a sprite with a semi-transparent blue border
const spriteBordered = await sprite.generateSpriteWithBorder(
  'simple mushroom',
  { r: 0, g: 0, b: 255, alpha: 128 },
  2
);
```

### With Additional Options
```javascript
// Generate a sprite with custom options and add a border
const spriteBordered = await sprite.generateSpriteWithBorder(
  'simple mushroom',
  { r: 255, g: 215, b: 0, alpha: 255 }, // Gold color
  2,
  { save: true } // Additional options for sprite generation
);
```

## How It Works
The function first generates a pixel art sprite based on your description, then uses Sharp's `extend` method to add a border of the specified color and thickness around all edges of the image.

## Common Use Cases
- Highlighting active sprites in a game UI
- Creating frames around character portraits
- Enhancing visibility of sprites against similar background colors
- Creating visual separation between sprite elements
- Adding decorative borders to achievement icons or collectibles