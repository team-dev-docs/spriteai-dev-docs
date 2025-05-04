---
slug: /
sidebar_position: 1
---

# generateSprite Documentation

## Brief Description
`generateSprite` is a function that generates a sprite sheet image based on a given description, using AI-powered image generation and analysis.

## Usage
To use `generateSprite`, import it from the sprite module and call it with a description of the character you want to generate.

```javascript
import { generateSprite } from './path/to/sprite/module';

const result = await generateSprite({subject, action, frameNumber});
```

## Parameters
- `subject` (string, required): The subject of the sprite (e.g., "cat", "robot").
- `action` (string, required): The action the subject is performing (e.g., "walking", "running").
- `frameNumber` (number, required): The number of frames in the sprite sheet.

## Return Value
Returns a promise that resolves to an object containing:
- `created`: The creation timestamp.
- `data`: An array of image objects, each containing:
  - `url`: The URL of the generated image.
  - `b64_json`: The base64-encoded image data.

## Examples

1. Generate a sprite sheet:
```javascript
const result = await generateSprite({
  subject: "robot",
  action: "walking",
  frameNumber: 6
});
console.log(result.data[0].url);
```

2. Generate and use the sprite sheet:
```javascript
const { generateSprite, convertSpritesheetToDataUrl } = require('./sprite-module');

async function createAndUseSprite() {
  const spriteResult = await generateSprite({
    subject: "cat",
    action: "running",
    frameNumber: 8
  });
  
  const imageUrl = spriteResult.data[0].url;
  const dataUrl = await convertSpritesheetToDataUrl(imageUrl);
  
  // Use the dataUrl in your application
  console.log(dataUrl);
}

createAndUseSprite();
```

## Notes or Considerations
- The function uses AI models (GPT-Image-1) to generate images, which may result in varying outputs for the same input.
- Generated sprites are optimized for side-scrolling platformer games with transparent backgrounds.
- The function generates a 64x64 pixel spritesheet with the specified number of frames.
- The actual image size returned is 1024x1024, which can be scaled down as needed.
- The function may take some time to complete due to API calls and image processing.

## Related Functions

### convertSpritesheetToDataUrl

This function converts a spritesheet image file to a base64-encoded data URL.

#### Usage

```javascript
import { convertSpritesheetToDataUrl } from './path/to/sprite/module';

const dataUrl = await convertSpritesheetToDataUrl(filePath);
```

#### Parameters
- `filePath` (string, required): The file path of the spritesheet image to convert.

#### Return Value
Returns a promise that resolves to a string containing the base64-encoded data URL of the image.

#### Example

```javascript
const filePath = 'path/to/your/sprite.png';
const dataUrl = await convertSpritesheetToDataUrl(filePath);
console.log(dataUrl);
// Output: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA...
```

#### Notes
- This function is useful for embedding spritesheet images directly in HTML or CSS without requiring separate image files.
- The resulting data URL can be used as the `src` attribute of an `<img>` tag or in CSS `background-image` properties.
- Be cautious when using this with large images, as the resulting data URL can be quite long.
