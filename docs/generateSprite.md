# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a pixel art sprite based on a given description, with options for customization and animation frames.

## Usage
To use `generateSprite`, import it from the sprite object and call it with a description and optional parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the sprite you want to generate.
- `options` (object, optional): An object containing additional configuration options.
  - `size` (string, optional): The size of the output image (default: "1024x1024").
  - `save` (boolean, optional): Whether to save the generated sprite to a file.
  - `iterations` (number, optional): Number of sprite variations to generate.
  - `rotate` (number, optional): Rotation angle in degrees.
  - `tint` (object, optional): Color tint to apply to the sprite.
  - `scale` (number, optional): Scale factor for the sprite.
  - `generateMetadata` (boolean, optional): Whether to generate additional metadata.

## Return Value
The function returns an object containing:
- `messages`: Information about the generated sprite, including frame dimensions.
- `image`: The generated sprite as a base64-encoded data URL.
- `metadata` (if `generateMetadata` is true): Additional information about the sprite.

## Examples

1. Generate a basic sprite:
```javascript
const result = await sprite.generateSprite('A cute cat');
console.log(result.image); // Displays the base64-encoded image data
```

2. Generate a sprite with custom options:
```javascript
const result = await sprite.generateSprite('A fierce dragon', {
  size: '512x512',
  save: true,
  rotate: 45,
  tint: { r: 255, g: 0, b: 0 }
});
```

3. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite('A magical wand', {
  iterations: 3,
  generateMetadata: true
});
variations.forEach((variant, index) => {
  console.log(`Variation ${index + 1}:`, variant.metadata);
});
```

## Notes or Considerations
- The function uses AI image generation, so results may vary based on the description provided.
- Generated sprites are optimized for walking animations by default.
- The output is in pixel art style, suitable for retro-style games or applications.
- When using `save` option, ensure you have write permissions in the target directory.
- The function is asynchronous and should be used with `await` or `.then()`.
- Performance may depend on the complexity of the description and the number of iterations requested.