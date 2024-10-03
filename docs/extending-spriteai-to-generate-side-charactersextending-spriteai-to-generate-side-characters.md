

  # Extending SpriteAI to Generate Side Characters

## Step 1: Create a New Function

1. In the `sprite` object, add a new async function called `generateSideCharacter`.

```javascript
async generateSideCharacter(description, options = {}) {
  // Implementation will go here
}
```

## Step 2: Modify the DALL-E Prompt

2. Adapt the prompt to focus on side character generation:

```javascript
const prompt = `Generate a 24-bit side character sprite for a game based on this description: ${description}. Instructions:
- Create 4 frames optimized for idle animations
- Style should resemble Super Nintendo graphics
- Character should be smaller and less detailed than main characters
- Background should be transparent
- Frames should be in a single row`;
```

## Step 3: Implement the Generation Logic

3. Use the DALL-E API to generate the image:

```javascript
const openAiObject = new OpenAI();
const dalle3 = openAiObject.images;
const response = await dalle3.generate({
  model: "dall-e-3",
  prompt: prompt,
  n: 1,
  size: options?.size || "512x512",
});
```

## Step 4: Process the Generated Image

4. Add image processing similar to the main character generation:

```javascript
const res = await axios.get(response.data[0].url, { responseType: 'arraybuffer' });
const imgBuffer = Buffer.from(res.data);

if(options?.save) {
  const currentWorkingDirectory = process.cwd();
  let pictureName = `sideCharacter_${description.replace(/\s+/g, '')}`;
  let pictureFilename = `${currentWorkingDirectory}${path.sep}assets${path.sep}${pictureName}.png`;
  await sharp(imgBuffer).ensureAlpha().toFile(pictureFilename);
}
```

## Step 5: Analyze Frame Dimensions

5. Use GPT-4 Vision to analyze the frame dimensions:

```javascript
let base64Image = imgBuffer.toString('base64');
let imageDataUrl = `data:image/png;base64,${base64Image}`;

const result = await openAiObject.chat.completions.create({
  model: "gpt-4-vision-preview",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: [
        { type: "text", text: `For this side character sprite sheet, what would be the appropriate frameWidth and frameHeight for use in Phaser JS?` },
        { type: "image_url", image_url: imageDataUrl },
      ],
    },
  ],
});
```

## Step 6: Format and Return Results

6. Format the response and return the results:

```javascript
const jsonFrameResponse = await openAiObject.chat.completions.create({
  model: "gpt-3.5-turbo-1106",
  response_format: { type: "json_object" },
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: `Return a JSON with the best frameHeight and frameWidth from this description: ${result.choices[0].message.content}`,
    },
  ],
});

return {
  messages: jsonFrameResponse.choices[0].message,
  image: imageDataUrl
};
```

## Step 7: Add Iteration Support (Optional)

7. If you want to support multiple iterations, wrap the core logic in a loop similar to the `generateSprite` function.

## Step 8: Update Export

8. Ensure the new function is included in the exported `sprite` object:

```javascript
export const sprite = {
  generateSprite,
  generateHouseAsset,
  generateSideCharacter
};
```

## Step 9: Testing

9. Test the new function with various descriptions and options to ensure it generates appropriate side character sprites.

## Step 10: Documentation

10. Update any existing documentation to include information about the new `generateSideCharacter` function and its usage.

  