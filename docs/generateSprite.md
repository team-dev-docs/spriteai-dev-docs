---
slug: /
sidebar_position: 1
---
# generateSprite Documentation, eh?

Well, how's it goin' there, bud? Let's have a look at this `generateSprite` function, shall we?

## Brief Description
`generateSprite` is a real beauty of a function that whips up a sprite sheet image based on a description you give it. It uses some fancy AI-powered image generation and analysis, don'tcha know.

## Usage
To use `generateSprite`, you'll want to import it from the sprite module and give it a holler with a description of the character you're after.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): A text description of the character you want to generate, like "A moose wearing a Maple Leafs jersey".
- `options` (object, optional):
  - `iterations` (number): Number of sprite variations to generate, in case you're feeling indecisive.
  - `size` (string): Size of the generated image (default: "1024x1024"), but don't go too crazy now.
  - `save` (boolean): Whether to save the generated image to disk, eh.

## Return Value
You'll get back an object or array of objects containing:
- `messages`: JSON object with frameHeight and frameWidth information, just the facts.
- `image`: Base64-encoded image data URL of the generated sprite sheet, ready for your viewing pleasure.

## Examples

1. Generate a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated beaver");
console.log(result.messages);
console.log(result.image);
```

2. Generate multiple variations:
```javascript
const variations = await sprite.generateSprite("A cartoon hockey player", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}, eh:`, variation.messages);
});
```

## Notes or Considerations
- The function uses AI models (DALL-E 3 and GPT) to generate and analyze images, so the results might be as unpredictable as Canadian weather.
- Generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid), just like a good ol' hockey play.
- The function converts images to grayscale, which might make things look a bit like a foggy day in Newfoundland.
- When saving images, they're stored in an 'assets' folder with a filename based on the description, neat and tidy like.
- The function might take some time to complete due to API calls and image processing, so maybe grab yourself a double-double while you wait.

Well, there you have it! Give it a go and let us know how she runs for ya!
