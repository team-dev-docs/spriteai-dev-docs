# batchProcessSprites

## Brief Description

`batchProcessSprites` is an asynchronous function that processes multiple sprite descriptions in parallel. It leverages the `generateSprite` function to create multiple sprite sheets based on the provided descriptions.

## Usage

To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { sprite } from './path/to/sprite/module';

const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A magical wizard"
];

const results = await sprite.batchProcessSprites(descriptions);
```

## Parameters

- `descriptions` (array of strings, required): An array of text descriptions for the characters to generate.

## Return Value

Returns a Promise that resolves to an array of objects, each containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Example

```javascript
const descriptions = [
  "A pixelated robot with glowing eyes",
  "A cartoon cat with a fish in its mouth",
  "A magical wizard casting a spell"
];

const results = await sprite.batchProcessSprites(descriptions);

results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`);
  console.log(result.messages);
  console.log(result.image.substring(0, 50) + '...'); // Display first 50 characters of image data
});
```

## Notes and Considerations

- `batchProcessSprites` uses `Promise.all` to process all sprite descriptions concurrently, which can significantly improve performance when generating multiple sprites.
- The function inherits all the characteristics and limitations of the `generateSprite` function, including the use of AI models for image generation and analysis.
- Processing time may vary depending on the number and complexity of sprite descriptions provided.
- Ensure your system has sufficient resources to handle multiple concurrent sprite generations, especially for large batches.
- Error handling should be implemented when using this function, as any error in processing a single sprite will reject the entire Promise.