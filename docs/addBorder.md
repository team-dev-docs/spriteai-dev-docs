---
slug: /addBorder
sidebar_position: 7
---

# Add Border to Sprites

## Brief Description
`generateSpriteWithBorder` is a function that adds a customizable border around a sprite image, enhancing its visibility or creating visual effects.

## Usage
To add a border to a sprite, import the sprite module and call the `generateSpriteWithBorder` method with your desired parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(
  description, 
  borderColor, 
  borderThickness, 
  options
);
```

## Parameters
- `description` (string, required): A text description of the character for the sprite to be generated.
- `borderColor` (object, optional): An RGBA color object for the border. Default is `{ r: 0, g: 0, b: 0, alpha: 255 }` (black).
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is `1`.
- `options` (object, optional): Additional options for sprite generation.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite without border.
- `bordered`: Base64-encoded image data URL of the sprite with the applied border.

## Examples

### Basic Usage with Default Border
```javascript
const result = await sprite.generateSpriteWithBorder("A cute cat");
console.log(result.bordered); // Use this image with the default black border
```

### Custom Border Color and Thickness
```javascript
const result = await sprite.generateSpriteWithBorder(
  "A medieval knight",
  { r: 255, g: 0, b: 0, alpha: 255 }, // Red border
  3 // 3px thickness
);
```

### With Additional Sprite Generation Options
```javascript
const result = await sprite.generateSpriteWithBorder(
  "A space alien",
  { r: 0, g: 255, b: 0, alpha: 200 }, // Semi-transparent green
  2, // 2px thickness
  { save: true } // Save the sprite to disk
);
```

## Notes and Considerations
- The border is added by extending the image on all sides by the specified thickness.
- For partially transparent borders, adjust the `alpha` value in the `borderColor` object (0-255).
- The function first generates a pixel art sprite using the provided description and then applies the border.
- This function is useful for creating outlines that make sprites stand out against backgrounds or for creating decorative frames.
- The border is applied uniformly on all sides (top, right, bottom, and left).