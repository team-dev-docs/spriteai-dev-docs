# Adding Borders to Sprites

## Overview

The `generateSpriteWithBorder` function allows you to add customized borders around your generated sprites. This is useful for creating visual emphasis, separating sprites from backgrounds, or adding decorative elements to your game assets.

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

- **description** `string` - The text description of the sprite you want to generate
- **borderColor** `object` - An RGBA color object with `r`, `g`, `b`, and `alpha` properties (default: black)
- **borderThickness** `number` - The width of the border in pixels (default: 1)
- **options** `object` - Additional options for sprite generation

## Returns

An object containing:
- **original** `string` - The base64-encoded original sprite without borders
- **bordered** `string` - The base64-encoded sprite with borders added

## Example Usage

```javascript
const result = await sprite.generateSpriteWithBorder(
  'small treasure chest', 
  { r: 255, g: 215, b: 0, alpha: 255 },  // Gold color
  2,  // 2px border
  { save: true }
);

// Use the bordered sprite in your game
game.load.image('borderedChest', result.bordered);
```

## Common Border Colors

Here are some commonly used border colors:

```javascript
// Black border (default)
const blackBorder = { r: 0, g: 0, b: 0, alpha: 255 };

// White border
const whiteBorder = { r: 255, g: 255, b: 255, alpha: 255 };

// Gold border
const goldBorder = { r: 255, g: 215, b: 0, alpha: 255 };

// Semitransparent red border
const redBorder = { r: 255, g: 0, b: 0, alpha: 180 };
```

## Tips for Using Borders

1. **Contrast** - Choose a border color that contrasts with your sprite for better visibility
2. **Thickness** - For pixel art, a thickness of 1-2 pixels usually works best
3. **Transparency** - Use partial transparency (alpha < 255) for subtle borders
4. **Matching** - Consider using a color from your game's UI or theme for consistent visuals

## Implementation Details

Under the hood, this function uses Sharp's `extend()` method to add padding around the image with the specified color. This creates a uniform border effect while preserving the original sprite's transparency.
