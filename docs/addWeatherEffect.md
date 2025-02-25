# addWeatherEffect

The `addWeatherEffect` function adds various weather effects to sprites.

## Function Signature

```javascript
async function addWeatherEffect(description, weatherOptions = {}, options = {})
```

## Parameters

- `description` (string): A description of the sprite to generate.
- `weatherOptions` (object, optional): Configuration options for the weather effect.
  - `type` (string, default: 'rain'): Type of weather effect. Options: 'rain', 'snow', 'fog', 'storm', 'sandstorm'.
  - `intensity` (number, default: 0.5): Intensity of the weather effect, ranging from 0 to 1.
  - `frames` (number, default: 10): Number of animation frames to generate.
  - `speed` (number, default: 1.0): Animation speed multiplier.
  - `tint` (object, optional): Color tint for the weather particles.
  - `particleSize` (number, default: 2): Size of weather particles.
- `options` (object, optional): Additional options for sprite generation.

## Returns

An object containing:
- `original` (string): Base64-encoded original sprite image.
- `weatherFrames` (array): Array of Base64-encoded images representing animation frames with the weather effect.
- `settings` (object): Applied weather effect settings.

## Description

This function generates a pixel art sprite based on the given description and applies a specified weather effect to it. The weather effect is animated, creating multiple frames that can be used for game or animation purposes.

## Example Usage

```javascript
const result = await sprite.addWeatherEffect("forest landscape", {
  type: "rain",
  intensity: 0.7,
  frames: 15,
  speed: 1.2
});

console.log(result.original); // Base64 of the original sprite
console.log(result.weatherFrames.length); // Number of animation frames
console.log(result.settings); // Applied weather settings
```

## Notes

- The function uses the `createWeatherEffect` utility to generate the weather animation frames.
- Different weather types have unique visual characteristics and behaviors.
- The intensity parameter affects the density of weather particles.
- The generated frames can be used to create animated weather effects in games or other visual applications.