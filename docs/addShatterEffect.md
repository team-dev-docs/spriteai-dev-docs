# addShatterEffect

## Brief Description
`addShatterEffect` is a method of the sprite object that applies a shatter effect to a generated pixel art sprite. This effect creates an animation of the sprite breaking into pieces and scattering.

## Usage
To use `addShatterEffect`, first import the sprite object, then call the method with a description of the sprite and optional shatter effect parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.addShatterEffect(description, shatterOptions, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate and apply the shatter effect to.
- `shatterOptions` (object, optional):
  - `pieces` (number): Number of shatter pieces (default: 12).
  - `spread` (number): How far pieces spread (default: 100).
  - `rotation` (boolean): Whether pieces should rotate (default: true).
  - `gravity` (number): Gravity effect on pieces (default: 0.5).
  - `frames` (number): Number of animation frames (default: 15).
  - `pattern` (string): 'radial' or 'grid' shatter pattern (default: 'radial').
- `options` (object, optional): Additional options for sprite generation (see `generatePixelArt` documentation).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite.
- `shatterFrames`: Array of Base64-encoded image data URLs representing each frame of the shatter animation.
- `settings`: Object containing the applied shatter effect settings.

## Examples

### Basic Usage
```javascript
const result = await sprite.addShatterEffect("A pixelated treasure chest");
console.log(result.original); // Original sprite image
console.log(result.shatterFrames.length); // Number of animation frames
console.log(result.settings); // Applied shatter effect settings
```

### Custom Shatter Effect
```javascript
const shatterOptions = {
  pieces: 20,
  spread: 150,
  frames: 30,
  pattern: 'grid'
};
const result = await sprite.addShatterEffect("A pixel art volcano", shatterOptions);
```

## Notes and Considerations
- The shatter effect is applied to a pixel art sprite generated based on the provided description.
- The quality and appearance of the effect may vary depending on the complexity of the generated sprite.
- Increasing the number of pieces or frames will result in a more detailed animation but may increase processing time.
- The shatter effect animation can be used to create dynamic destruction or transformation effects in games or interactive applications.
- Experiment with different `shatterOptions` to achieve the desired visual effect for your specific use case.