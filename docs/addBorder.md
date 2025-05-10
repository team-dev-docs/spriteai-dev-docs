# generateSpriteWithBorder Documentation

## Brief Description
`generateSpriteWithBorder` is a function that generates a pixel art sprite with a customizable border around it. This function first generates the sprite using AI-powered image generation, then adds a border with specified color and thickness.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the sprite you want to generate, along with border customization parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the pixel art sprite to generate.
- `borderColor` (object, optional): An object specifying the RGBA color of the border.
  - Default: `{ r: 0, g: 0, b: 0, alpha: 255 }` (solid black)
  - Format: `{ r: , g: , b: , alpha:  }`
- `borderThickness` (number, optional): The thickness of the border in pixels.
  - Default: `1`
- `options` (object, optional): Additional options passed to the sprite generation function.
  - `save` (boolean): Whether to save the generated image to disk.
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the generated sprite without border.
- `bordered`: Base64-encoded image data URL of the sprite with the added border.

## Examples

1. Generate a sprite with default black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.original);  // Original sprite without border
console.log(result.bordered);  // Sprite with border
```

2. Generate a sprite with a custom red border of 2 pixels:
```javascript
const redBorder = { r: 255, g: 0, b: 0, alpha: 255 };
const result = await sprite.generateSpriteWithBorder(
  "A pixel art cat", 
  redBorder, 
  2, 
  { save: true }
);
console.log("Bordered sprite:", result.bordered);
```

3. Generate a sprite with a semi-transparent blue border:
```javascript
const blueBorder = { r: 0, g: 0, b: 255, alpha: 128 };
const result = await sprite.generateSpriteWithBorder("A magical potion", blueBorder, 3);
```

## Notes or Considerations
- The border is added by extending the image on all sides with the specified color and thickness.
- For pixel art sprites, a border thickness of 1-3 pixels typically works best for visual clarity.
- The border is added after the sprite generation process, preserving the original pixel art style.
- The function returns both the original sprite and the bordered version for comparison or alternate use.
- Using a semi-transparent border (alpha < 255) can create interesting visual effects.
- The generated sprites use transparent backgrounds, making the borders visible on any background color.