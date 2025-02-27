# batchProcessSprites

## Brief Description

`batchProcessSprites` is an asynchronous function that processes multiple sprite descriptions simultaneously, generating sprite sheets for each description provided.

## Usage

To use `batchProcessSprites`, import it from the sprite module and call it with an array of sprite descriptions.

```javascript
import { batchProcessSprites } from './path/to/sprite/module';

const descriptions = [
  "A pixelated robot",
  "A cartoon cat",
  "A space alien"
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

1. Generate multiple sprite sheets at once:

```javascript
const descriptions = [
  "A medieval knight in armor",
  "A futuristic cyborg",
  "A cute forest animal"
];

const results = await batchProcessSprites(descriptions);

results.forEach((result, index) => {
  console.log(`Sprite ${index + 1}:`);
  console.log(result.messages);
  console.log(result.image);
});
```

2. Process sprites and save them:

```javascript
import { writeFile } from 'fs/promises';

const descriptions = [
  "A fire-breathing dragon",
  "An underwater mermaid"
];

const results = await batchProcessSprites(descriptions);

for (let i = 0; i < results.length; i++) {
  const { image } = results[i];
  const base64Data = image.replace(/^data:image\/png;base64,/, "");
  await writeFile(`sprite_${i + 1}.png`, base64Data, 'base64');
}
```

## Notes and Considerations

- This function uses the `generateSprite` function internally to create each sprite sheet.
- Processing multiple sprites simultaneously can be more efficient than generating them one by one, especially for larger batches.
- The function uses `Promise.all` to parallelize the sprite generation, which may consume significant computational resources for large batches.
- As with `generateSprite`, the generated sprites are optimized for walking animations and follow a specific layout (6 frames in a 2x3 grid).
- The time required to process the batch will depend on the number and complexity of the descriptions provided.
- Error handling should be implemented when using this function, as any issue with a single sprite generation could potentially reject the entire Promise.