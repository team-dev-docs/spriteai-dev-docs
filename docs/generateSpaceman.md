# generateSpaceman

## Brief Description
`generateSpaceman` is a function that generates a sprite of a spaceman character using AI-powered image generation. It creates a 6-frame spritesheet suitable for animations in games and applications.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with optional customization parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(options);
```

## Parameters
- `options` (object, optional):
  - `save` (boolean): Whether to save the generated image to disk.
  - `helmet` (string): Helmet style or color customization.
  - `suit` (string): Suit style or color customization.
  - `pose` (string): Specific pose for the spaceman.
  - `background` (string): Background description or 'transparent'.
  - `iterations` (number): Number of different variations to generate.
  - Other options inherited from the base generate function.

## Return Value
Returns an object containing:
- `image`: Base64-encoded image data URL of the generated spaceman sprite.
- `url`: Direct URL to the generated image.
- `frameDimensions`: JSON object containing frame dimensions for animation use in game engines.

## Examples

1. Generate a basic spaceman sprite:
```javascript
const result = await sprite.generateSpaceman();
console.log(result.image);
console.log(result.frameDimensions);
```

2. Generate a customized spaceman:
```javascript
const result = await sprite.generateSpaceman({
  helmet: "blue tinted visor",
  suit: "red with white stripes",
  pose: "floating in space",
  background: "transparent",
  save: true
});
```

3. Generate multiple variations:
```javascript
const results = await sprite.generateSpaceman({
  iterations: 3,
  suit: "metallic gold"
});
// results will be an array of sprite objects
```

## Integration with Game Engines
The returned `frameDimensions` property can be directly used in game engines like Phaser.js to set up sprite animations:

```javascript
// In a Phaser game
const result = await sprite.generateSpaceman();
const spaceman = this.load.spritesheet('spaceman', result.image, result.frameDimensions);

// Then create animations
this.anims.create({
  key: 'float',
  frames: this.anims.generateFrameNumbers('spaceman', { start: 0, end: 5 }),
  frameRate: 10,
  repeat: -1
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3) to generate the spaceman images.
- Generated sprites include 6 frames by default for a smooth animation cycle.
- The spritesheet is optimized for game development use, particularly with Phaser.js.
- When `background: "transparent"` is specified, the background will be removed from the generated image.
- Each frame is analyzed for optimal dimensions using AI vision models.
- Generating multiple iterations with the `iterations` option allows you to choose from different visual styles.
- Processing time may vary based on complexity of the requested customizations.