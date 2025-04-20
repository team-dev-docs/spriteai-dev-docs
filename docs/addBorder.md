# addBorder Function Documentation

## Brief Description
`generateSpriteWithBorder` is a function that adds a customizable border around a pixel art sprite, enhancing its visual appearance or improving its visibility against different backgrounds.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the pixel art sprite you want to generate with a border.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the pixel art sprite to generate.
- `borderColor` (object, optional): An object specifying the border color with RGBA values. Default is black: `{ r: 0, g: 0, b: 0, alpha: 255 }`.
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is 1.
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - Other options inherited from the base generatePixelArt function.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the generated pixel art sprite without border.
- `bordered`: Base64-encoded image data URL of the generated pixel art sprite with border.

## Examples

1. Generate a pixel art sprite with a default black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.bordered);
```

2. Generate a pixel art sprite with a red border of 2 pixels thickness:
```javascript
const redBorder = { r: 255, g: 0, b: 0, alpha: 255 };
const result = await sprite.generateSpriteWithBorder("A pixel art cat", redBorder, 2);
console.log("Pixel art with red border:", result.bordered);
```

3. Generate a pixel art sprite with a semi-transparent blue border and save it:
```javascript
const blueBorder = { r: 0, g: 0, b: 255, alpha: 128 };
const result = await sprite.generateSpriteWithBorder(
  "A pixel art spaceship", 
  blueBorder, 
  3, 
  { save: true }
);
```

## Implementation Details
The function works by first generating a pixel art sprite using the `generatePixelArt` function, then adds a border around it using the Sharp image processing library's `extend` method. The border is added equally on all sides (top, right, bottom, and left) with the specified thickness and color.

## Notes or Considerations
- The function maintains the transparency of the original sprite, only adding the border around visible portions.
- For best visual results, consider using border colors that complement or contrast with your sprite's color scheme.
- Thick borders may change the visual proportions of small pixel art sprites.
- When selecting a border color, remember that the alpha channel (0-255) controls transparency, where 0 is fully transparent and 255 is fully opaque.