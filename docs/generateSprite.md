# batchProcessSprites Documentation

## Brief Description
`batchProcessSprites` is a function that processes multiple sprite descriptions in parallel, generating sprite sheets for each description provided.

## Usage
To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { batchProcessSprites } from './path/to/sprite/module';

const results = await batchProcessSprites(descriptions);
```

## Parameters
- `descriptions` (array, required): An array of sprite descriptions. Each description should be a string describing the character or object to generate.

## Return Value
Returns a Promise that resolves to an array of objects, each containing:
- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Process multiple sprite descriptions:
```javascript
const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A medieval knight"
];

const results = await batchProcessSprites(descriptions);
results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`, result.messages);
  console.log(`Image data: ${result.image.substring(0, 50)}...`);
});
```

2. Handle errors for individual sprite generation:
```javascript
const descriptions = [
  "A valid description",
  "An invalid description that might cause an error"
];

try {
  const results = await batchProcessSprites(descriptions);
  results.forEach((result, index) => {
    if (result.error) {
      console.error(`Error generating sprite ${index + 1}:`, result.error);
    } else {
      console.log(`Sprite ${index + 1} generated successfully`);
    }
  });
} catch (error) {
  console.error("Batch processing failed:", error);
}
```

## Notes or Considerations
- The function processes sprite descriptions in parallel, which can significantly improve performance when generating multiple sprites.
- Each sprite is generated independently, so an error in one sprite generation won't affect the others.
- The function uses the same AI models and image processing techniques as the `generateSprite` function.
- Large batches of sprite descriptions may take considerable time to process, depending on the complexity of the descriptions and the available system resources.
- Consider implementing rate limiting or chunking for very large batches to avoid overwhelming the system or exceeding API rate limits.