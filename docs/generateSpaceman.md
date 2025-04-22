# Generate Spaceman Sprite

The `generateSpaceman` function is part of the sprite generation module that creates sprites with a space/astronaut theme using AI image generation. This function uses OpenAI's DALL-E 3 model to generate space-themed character sprites based on the provided description and options.

## Usage

```javascript
const result = await sprite.generateSpaceman(description, options);
```

### Parameters

- **description** (`string`): A textual description of the spaceman/astronaut character you want to generate.
- **options** (`object`, optional): Configuration options for the sprite generation.
  - **iterations** (`number`, optional): Number of sprite variations to generate. Defaults to 1.
  - **save** (`boolean`, optional): Whether to save the generated sprite to the local filesystem. Defaults to false.
  - **grayscale** (`boolean`, optional): Whether to convert the sprite to grayscale. Defaults to true.
  - **rotate** (`number`, optional): Degrees to rotate the sprite. Defaults to 0.
  - **tint** (`string`, optional): Color to tint the sprite (e.g., "#FF0000" for red).

### Returns

Returns a Promise that resolves to an object with the following properties:

- **image** (`string`): Base64-encoded data URL of the generated sprite image.
- **url** (`string`): The original URL of the generated image from OpenAI.
- **frameDimensions** (`object`): Suggested frame dimensions for animation.
  - **width** (`number`): Width of each frame in pixels.
  - **height** (`number`): Height of each frame in pixels.
  - **columns** (`number`): Number of columns in the spritesheet.
  - **rows** (`number`): Number of rows in the spritesheet.
  - **frameCount** (`number`): Total number of frames.

If `iterations` is greater than 1, returns an array of such objects.

## Example

```javascript
// Generate a single spaceman sprite
const result = await sprite.generateSpaceman("A cute pixel art astronaut with a blue spacesuit", {
  save: true,
  grayscale: false
});

console.log(result.image); // Base64 data URL of the image
console.log(result.frameDimensions); // Frame dimensions for animation

// Generate multiple variations
const variations = await sprite.generateSpaceman("A pixel art astronaut explorer", {
  iterations: 3
});

// Loop through variations
variations.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.frameDimensions);
});
```

## How It Works

The function creates a specialized prompt for the DALL-E 3 model that emphasizes creating a space-themed character with appropriate animation frames. The prompt is designed to generate a spritesheet with multiple frames showing the character in different animation poses.

After generation, the image is processed to meet the requirements (grayscale conversion if specified, rotation, tinting, etc.) and analyzed using GPT-4 Vision to determine optimal frame dimensions for animation.

## Notes

- The generated sprite is returned as a base64-encoded data URL, which can be directly used in HTML or passed to image processing functions.
- For best results, provide a clear and specific description of the character's appearance and style.
- The function works best with pixel art style descriptions.
- If saved to the filesystem, images will be stored in the `assets` directory with a timestamp-based filename.