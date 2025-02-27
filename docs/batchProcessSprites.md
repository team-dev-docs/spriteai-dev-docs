# batchProcessSprites

## Brief Description

`batchProcessSprites` is a function that processes multiple sprite descriptions concurrently, generating sprite sheets for each description provided.

## Usage

To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { batchProcessSprites } from './path/to/sprite/module';

const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A fantasy elf"
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

1. Generate multiple sprite sheets concurrently:

```javascript
const descriptions = [
  "A steampunk airship",
  "A cyberpunk hacker",
  "A medieval knight"
];

const results = await batchProcessSprites(descriptions);

results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`);
  console.log(result.messages);
  console.log(result.image);
});
```

2. Process sprites with error handling:

```javascript
const descriptions = [
  "A fire elemental",
  "An ice golem",
  "A nature spirit"
];

try {
  const results = await batchProcessSprites(descriptions);
  results.forEach((result, index) => {
    console.log(`Successfully generated sprite ${index + 1}`);
  });
} catch (error) {
  console.error("Error processing sprites:", error);
}
```

## Notes and Considerations

- This function uses `Promise.all` to process multiple sprite descriptions concurrently, which can significantly improve performance when generating multiple sprites.
- The function relies on the `generateSprite` function internally, so all considerations and limitations of `generateSprite` apply to each sprite processed by `batchProcessSprites`.
- Large batches of sprite descriptions may take considerable time to process and could potentially hit rate limits of underlying API services.
- Ensure that your system has sufficient memory to handle the concurrent processing of multiple sprites, especially for large batches.
- The order of the results array corresponds to the order of the input descriptions array.