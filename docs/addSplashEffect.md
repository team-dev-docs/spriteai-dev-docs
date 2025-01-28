# addSplashEffect Documentation

## Brief Description
The `addSplashEffect` method is part of the sprite object and creates a splash effect animation for a given sprite. This effect simulates a ripple or water splash, making it useful for various visual effects in games or interactive applications.

## Usage
To use `addSplashEffect`, import the sprite object and call the method with a description of the sprite and optional parameters.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.addSplashEffect(description, splashOptions, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate and apply the splash effect to.
- `splashOptions` (object, optional):
  - `intensity` (number): The intensity of the splash distortion (default: 30).
  - `rippleCount` (number): The number of ripple rings in the effect (default: 3).
  - `frames` (number): The number of animation frames to generate (default: 10).
  - `speed` (number): The speed of ripple expansion (default: 1).
- `options` (object, optional): Additional options for sprite generation (same as in `generatePixelArt`).

## Return Value
Returns an object containing:
- `original`: Base64-encoded image data URL of the original sprite.
- `splashFrames`: An array of Base64-encoded image data URLs representing each frame of the splash animation.
- `settings`: An object containing the applied splash effect settings.

## Examples

1. Generate a splash effect with default settings:
```javascript
const result = await sprite.addSplashEffect("A water droplet");
console.log(result.original);
console.log(result.splashFrames.length);
console.log(result.settings);
```

2. Generate a splash effect with custom settings:
```javascript
const splashOptions = {
  intensity: 40,
  rippleCount: 5,
  frames: 15,
  speed: 1.5
};
const result = await sprite.addSplashEffect("A pebble falling into water", splashOptions);
console.log(result.splashFrames);
```

## Notes or Considerations
- The splash effect is generated using AI-powered image processing, which may result in variations in the output.
- The method first generates a pixel art sprite based on the provided description before applying the splash effect.
- The intensity and appearance of the splash effect can be fine-tuned using the `splashOptions` parameter.
- Higher frame counts and intensities may increase processing time and result in larger data sizes.
- The splash effect is particularly useful for water-related sprites or impact animations in games.