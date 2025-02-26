# batchProcessSprites

## Brief Description
`batchProcessSprites` is a function that allows for the batch processing of multiple sprite descriptions, generating multiple sprite sheets in a single operation.

## Usage
To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { sprite } from './path/to/sprite/module';

const results = await sprite.batchProcessSprites(descriptions);
```

## Parameters
- `descriptions` (array of strings, required): An array of text descriptions for the characters to generate.

## Return Value
Returns a Promise that resolves to an array of objects, each containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate multiple sprite sheets in a batch:
```javascript
const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A medieval knight"
];

const results = await sprite.batchProcessSprites(descriptions);
results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`, result.messages);
  console.log(`Image data:`, result.image);
});
```

## Notes or Considerations
- This function uses the same AI models and processing as the `generateSprite` function, but allows for more efficient batch processing.
- Processing time may increase with the number of descriptions provided.
- Each sprite in the batch is generated independently, so variations in output may occur even with similar descriptions.
- Consider implementing error handling to manage potential failures in individual sprite generations within the batch.

## Related Functions
- `generateSprite`: For generating single sprite sheets.
- `resizeSprite`: For resizing generated sprites if needed after batch processing.