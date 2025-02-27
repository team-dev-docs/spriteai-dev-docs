# batchProcessSprites

## Brief Description
`batchProcessSprites` is an asynchronous function that processes multiple sprite descriptions in parallel, generating sprite sheets for each description provided.

## Usage
To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { batchProcessSprites } from './path/to/sprite/module';

const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A space ship"
];

const results = await batchProcessSprites(descriptions);
```

## Parameters
- `descriptions` (array of strings, required): An array containing text descriptions of the characters or objects to generate as sprites.

## Return Value
Returns a Promise that resolves to an array of objects. Each object in the array corresponds to a sprite generated from the input descriptions and contains:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate multiple sprite sheets in parallel:
```javascript
const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A space ship"
];

const results = await batchProcessSprites(descriptions);

results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`, result.messages);
  // Use result.image for the Base64-encoded sprite sheet
});
```

2. Process sprites with error handling:
```javascript
const descriptions = [
  "A magical wizard",
  "A fierce dragon",
  "An enchanted forest"
];

try {
  const results = await batchProcessSprites(descriptions);
  results.forEach((result, index) => {
    console.log(`Generated sprite for "${descriptions[index]}"`);
  });
} catch (error) {
  console.error("Error processing sprites:", error);
}
```

## Notes or Considerations
- This function uses `Promise.all` to process multiple sprite descriptions concurrently, which can significantly improve performance when generating multiple sprites.
- The function internally calls `sprite.generateSprite` for each description, so all considerations for `generateSprite` apply to each individual sprite generation.
- If any individual sprite generation fails, it will cause the entire batch process to reject. Consider implementing your own error handling if you need to process partial results.
- The performance of this function depends on the number of descriptions provided and the complexity of each sprite. Be mindful of resource usage when processing large batches.
- As with `generateSprite`, the generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The function uses AI models for image generation and analysis, so results may vary even for identical descriptions.