# batchProcessSprites

## Brief Description

`batchProcessSprites` is a function that processes multiple sprite descriptions in parallel, generating sprite sheets for each description provided.

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

- `descriptions` (array of strings, required): An array containing text descriptions of the characters to generate.

## Return Value

Returns a Promise that resolves to an array of objects, each containing:

- `messages`: JSON object with frameHeight and frameWidth information.
- `image`: Base64-encoded image data URL of the generated sprite sheet.

## Examples

### Generate multiple sprite sheets at once

```javascript
const descriptions = [
  "A medieval knight in armor",
  "A futuristic cyborg",
  "A cute woodland creature"
];

const spriteSheets = await batchProcessSprites(descriptions);

spriteSheets.forEach((sheet, index) => {
  console.log(`Sprite sheet ${index + 1}:`);
  console.log(sheet.messages);
  console.log(sheet.image);
});
```

## Notes or Considerations

- This function uses `Promise.all` to process multiple sprite descriptions concurrently, which can significantly improve performance when generating multiple sprites.
- The function relies on the `generateSprite` function internally, so all considerations and limitations of `generateSprite` apply to each individual sprite generation.
- Processing time may vary depending on the number and complexity of the sprite descriptions provided.
- Ensure that your system has sufficient resources to handle multiple concurrent sprite generations, especially for large batches.
- As with `generateSprite`, the output may vary due to the AI-powered image generation process.