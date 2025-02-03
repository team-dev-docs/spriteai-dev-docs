# addWeatherEffect

## Brief Description
`addWeatherEffect` is a method of the sprite object that adds weather effects to a generated pixel art sprite. It creates animated frames with various weather conditions like rain, snow, fog, storm, or sandstorm.

## Usage
To use `addWeatherEffect`, first import the sprite object, then call the method with a description of the sprite and weather options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.addWeatherEffect(description, weatherOptions, options);
```

## Parameters
- `description` (string, required): A text description of the sprite to generate.
- `weatherOptions` (object, optional):
  - `type` (string): Type of weather effect ('rain', 'snow', 'fog', 'storm', 'sandstorm'). Default: 'rain'.
  - `intensity` (number): Intensity of the weather effect (0-1). Default: 0.5.
  - `frames` (number): Number of animation frames. Default: 10.
  - `speed` (number): Animation speed multiplier. Default: 1.0.
  - `tint` (object): Optional color tint for the weather effect.
  - `particleSize` (number): Size of weather particles. Default: 2.
- `options` (object, optional): Additional options for sprite generation.

## Return Value
Returns a Promise that resolves to an object containing:
- `original`: Base64-encoded image data URL of the original sprite.
- `weatherFrames`: Array of Base64-encoded image data URLs for each weather effect frame.
- `settings`: Object containing the applied weather effect settings.

## Examples

1. Add a rain effect to a sprite:
```javascript
const result = await sprite.addWeatherEffect("A pixelated tree", {
  type: 'rain',
  intensity: 0.7,
  frames: 15
});
console.log(result.original);
console.log(result.weatherFrames.length);
console.log(result.settings);
```

2. Create a snowy scene:
```javascript
const snowySprite = await sprite.addWeatherEffect("A winter landscape", {
  type: 'snow',
  intensity: 0.8,
  frames: 20,
  speed: 0.5,
  particleSize: 3
});
```

## Notes and Considerations
- The weather effect is applied on top of the generated sprite, so the original sprite remains unchanged.
- Higher intensity values result in more dense weather particles.
- Increasing the number of frames will create smoother animations but may increase processing time and result size.
- The `tint` option can be used to create colored weather effects, such as golden sunlight or ethereal fog.
- Weather effects are randomly generated, so each call to `addWeatherEffect` may produce slightly different results.
- This method uses the `createWeatherEffect` function internally, which processes image data to create the weather animation frames.