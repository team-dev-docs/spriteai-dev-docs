

  # Extending the Codebase to Support Generating 2D Side Characters

## Step 1: Create a New Function

Add a new function called `generateSideCharacter` to the `sprite` object:

```javascript
async generateSideCharacter(description, options = {}) {
  // Implementation will go here
}
```

## Step 2: Modify the DALL-E Prompt

Adjust the prompt to generate side characters:

```javascript
const prompt = `Generate a 2D side character sprite for a video game based on this description: ${description}. The character should be:
- Facing sideways
- Full body visible
- In a neutral pose
- On a transparent background
- Pixel art style, similar to 16-bit era games`;
```

## Step 3: Generate the Image

Use the DALL-E API to create the image:

```javascript
const openAiObject = new OpenAI();
const dalle3 = openAiObject.images;
const response = await dalle3.generate({
  model: "dall-e-3",
  prompt: prompt,
  n: 1,
  size: options?.size || "1024x1024",
});
```

## Step 4: Process the Image

Process the generated image to ensure it's suitable for use as a side character:

```javascript
const res = await axios.get(response.data[0].url, { responseType: 'arraybuffer' });
const imgBuffer = Buffer.from(res.data);
let processedBuffer = await sharp(imgBuffer)
  .ensureAlpha()
  .trim()
  .toBuffer();
```

## Step 5: Save the Image (Optional)

If the `save` option is provided, save the processed image:

```javascript
if(options?.save) {
  const currentWorkingDirectory = process.cwd();
  let pictureName = description.replace(/\s+/g, '');
  let pictureFilename = `${currentWorkingDirectory}${path.sep}assets${path.sep}sideCharacters${path.sep}${pictureName}.png`;
  await sharp(processedBuffer).toFile(pictureFilename);
}
```

## Step 6: Return the Result

Return the processed image as a base64 string and its dimensions:

```javascript
let base64Image = processedBuffer.toString('base64');
let imageDataUrl = `data:image/png;base64,${base64Image}`;
const metadata = await sharp(processedBuffer).metadata();

return {
  image: imageDataUrl,
  width: metadata.width,
  height: metadata.height
};
```

## Step 7: Update the Main Export

Add the new function to the `sprite` object export:

```javascript
export const sprite = {
  // ... existing functions ...
  generateSideCharacter
};
```

## Step 8: Test the New Function

Create a test script to ensure the new function works as expected:

```javascript
import { sprite } from './index.js';

async function testGenerateSideCharacter() {
  const result = await sprite.generateSideCharacter('A brave knight with shining armor', { save: true });
  console.log('Side character generated:', result);
}

testGenerateSideCharacter();
```

## Step 9: Implement Error Handling

Add try-catch blocks to handle potential errors:

```javascript
try {
  // ... existing code ...
} catch (error) {
  console.error('Error generating side character:', error);
  throw error;
}
```

## Step 10: Add Documentation

Create documentation for the new function, explaining its parameters and return value:

```javascript
/**
 * Generates a 2D side character sprite based on the given description.
 * @param {string} description - A description of the character to generate.
 * @param {Object} options - Optional parameters.
 * @param {boolean} options.save - Whether to save the generated image to disk.
 * @param {string} options.size - The size of the image to generate (default: "1024x1024").
 * @returns {Promise<Object>} An object containing the base64 image data, width, and height.
 */
async generateSideCharacter(description, options = {}) {
  // ... implementation ...
}
```

  