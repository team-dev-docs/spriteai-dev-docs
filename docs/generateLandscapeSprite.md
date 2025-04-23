---
slug: /generateLandscapeSprite
sidebar_position: 2
---

# generateLandscapeSprite Documentation

## Brief Description
`generateLandscapeSprite` is a function that generates a landscape sprite image based on a given description, using AI-powered image generation. It's designed to create game backgrounds or environmental scenes in various styles and conditions.

## Usage
To use `generateLandscapeSprite`, import it from the sprite module and call it with a description of the landscape you want to generate.

```javascript
import { generateLandscapeSprite } from './path/to/sprite/module';

const result = await generateLandscapeSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the landscape to generate.
- `options` (object, optional):
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `style` (string): Art style of the landscape (default: "pixel-art").
  - `timeOfDay` (string): Time setting for the scene (default: "day").
  - `weather` (string): Weather conditions for the scene (default: "clear").
  - `perspective` (string): Viewing angle of the landscape (default: "side-scrolling").
  - `save` (boolean): Whether to save the generated image to disk (default: false).
  - `removeBackground` (boolean): Whether to remove the background (optional).
  - `backgroundColor` (string): Background color to remove (if removeBackground is true).
  - `colorThreshold` (number): Threshold for color removal (if removeBackground is true).

## Return Value
Returns a Promise that resolves to an object containing:
- `original`: URL of the original generated image.
- `landscape`: Base64-encoded image data URL of the processed landscape sprite.
- `metadata`: Object containing details about the generated image.

## Examples

1. Generate a basic landscape sprite:
```javascript
const result = await generateLandscapeSprite("A lush forest with a flowing river");
console.log(result.landscape);
console.log(result.metadata);
```

2. Generate a landscape with specific options:
```javascript
const options = {
  size: "2048x2048",
  style: "watercolor",
  timeOfDay: "sunset",
  weather: "foggy",
  perspective: "isometric",
  save: true
};
const result = await generateLandscapeSprite("A misty mountain range", options);
console.log(result.metadata);
```

3. Generate a landscape and remove the background:
```javascript
const options = {
  removeBackground: true,
  backgroundColor: "#FFFFFF",
  colorThreshold: 0.1
};
const result = await generateLandscapeSprite("A desert oasis", options);
console.log(result.landscape);
```

## Notes and Considerations
- The function uses OpenAI's DALL-E 3 model to generate images, which may result in varying outputs for the same input.
- Generated landscapes are optimized for use as game backgrounds or environmental scenes.
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- The `removeBackground` option processes the image to remove a specified background color, which can be useful for creating sprites with transparent backgrounds.
- The function may take some time to complete due to API calls and image processing.
- Ensure you have the necessary dependencies installed (OpenAI, axios, sharp, Jimp) to use this function.