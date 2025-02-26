# batchProcessSprites

## Brief Description
`batchProcessSprites` is a function that processes multiple sprite descriptions in parallel, generating sprite sheets for each description provided.

## Usage
To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { batchProcessSprites } from './path/to/sprite/module';

const results = await batchProcessSprites(descriptions);
```

## Parameters
- `descriptions` (array of strings, required): An array of text descriptions for the sprites to generate.

## Return Value
Returns a Promise that resolves to an array of objects, each containing:
- `messages`: JSON object with frameHeight and frameWidth information for the generated sprite.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Generate multiple sprite sheets:
```javascript
const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A space alien"
];

const results = await batchProcessSprites(descriptions);
results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`, result.messages);
  // Use result.image for the sprite sheet data
});
```

## Notes or Considerations
- This function uses Promise.all to process multiple sprite descriptions in parallel, which can significantly improve performance when generating multiple sprites.
- The function relies on the underlying `sprite.generateSprite` method, so any limitations or considerations for that method also apply here.
- Large numbers of sprite descriptions may require significant processing time and memory.
- Consider implementing rate limiting or batching if processing a very large number of sprites to avoid overwhelming system resources or API rate limits.