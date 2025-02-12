# generateSpriteWithBorder

## Brief Description
`generateSpriteWithBorder` is a function that generates a sprite image with a customizable border based on a given description, using AI-powered image generation and processing.

## Usage
To use `generateSpriteWithBorder`, import it from the sprite module and call it with a description of the character you want to generate, along with border options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpriteWithBorder(description, borderColor, borderThickness, options);
```

## Parameters
- `description` (string, required): A text description of the character to generate.
- `borderColor` (object, optional): An object specifying the border color with `r`, `g`, `b`, and `alpha` properties. Default is black (`{ r: 0, g: 0, b: 0, alpha: 255 }`).
- `borderThickness` (number, optional): The thickness of the border in pixels. Default is 1.
- `options` (object, optional): Additional options for sprite generation (same as `generateSprite` function).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original generated sprite.
- `bordered`: Base64-encoded image data URL of the sprite with the added border.

## Examples

1. Generate a sprite with a default black border:
```javascript
const result = await sprite.generateSpriteWithBorder("A pixelated robot");
console.log(result.original);
console.log(result.bordered);
```

2. Generate a sprite with a custom red border:
```javascript
const borderColor = { r: 255, g: 0, b: 0, alpha: 255 };
const borderThickness = 2;
const result = await sprite.generateSpriteWithBorder("A cartoon cat", borderColor, borderThickness);
console.log(result.bordered);
```

## Notes and Considerations
- The function uses the `generatePixelArt` method internally, so it inherits its AI-powered image generation capabilities.
- The border is added as an extension to the original image, increasing its dimensions by twice the border thickness.
- The function uses the Sharp library for image processing, ensuring high-quality results and efficient performance.
- You can combine this function with other sprite manipulation functions to create more complex effects.
- Remember that AI-generated content may vary, so results might differ slightly for the same input.