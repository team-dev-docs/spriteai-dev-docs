---
slug: /generatespaceman
sidebar_position: 3
---

# generateSpaceman Documentation

## Brief Description
`generateSpaceman` is a function that generates a space-themed character sprite sheet using AI-powered image generation and analysis. It's specifically designed to create astronaut, alien, or other space-themed character sprites for use in games or applications.

## Usage
To use `generateSpaceman`, import it from the sprite module and call it with a description of the space character you want to generate.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSpaceman(description, options);
```

## Parameters
- `description` (string, required): A text description of the space character to generate.
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate.
  - `size` (string): Size of the generated image (default: "1024x1024").
  - `save` (boolean): Whether to save the generated image to disk.
  - `rotate` (object): Options for rotating the sprite sheet.
    - `degrees` (number): Degrees to rotate the sprite.
  - `tint` (string): Hex color value to tint the sprite.

## Return Value
Returns an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate a single space character sprite sheet:
```javascript
const result = await sprite.generateSpaceman("A cute alien with a bubble helmet");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations of a space character:
```javascript
const variations = await sprite.generateSpaceman("An astronaut with a jetpack", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

3. Generate a tinted space character:
```javascript
const blueAlien = await sprite.generateSpaceman("A floating alien entity", { tint: "#00BFFF" });
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, which may result in varying outputs for the same input.
- Generated sprites are optimized for walking/floating animations and follow a specific layout (6 frames in a 2x3 grid).
- When saving images, they are stored in an 'assets' folder with a filename based on the description.
- Space characters are specifically designed with space-themed elements like helmets, space suits, or alien features.
- The function enhances descriptions with space-related terms to improve the quality of the generated sprites.
- For best results, include specific details about the character's appearance in your description.