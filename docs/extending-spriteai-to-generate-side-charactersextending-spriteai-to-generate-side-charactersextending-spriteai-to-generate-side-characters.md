

  # Extending SpriteAI to Generate Side Characters

## Step 1: Create a New Function

1. Open the `index.js` file.
2. Add a new function called `generateSideCharacter` to the `sprite` object.

## Step 2: Implement the Function

1. Copy the structure of the `generateSprite` function.
2. Modify the DALL-E prompt to focus on side characters:

```javascript
const response = await dalle3.generate({
  model: "dall-e-3",
  prompt: `Generate 6 frames of a 24-bit side character for ${description}, optimized for idle animations. Instructions:
  - Style should resemble Super Nintendo graphics.
  - The background should be transparent.
  - The frames should be in two rows with 3 columns each.
  - Character should be smaller and simpler than main characters.`,
  n: 1,
  size: options?.size || "1024x1024",
});
```

## Step 3: Adjust Image Processing

1. Modify the image processing to ensure transparency:

```javascript
let processedImageBuffer = await sharp(imgBuffer)
  .ensureAlpha()
  .png()
  .toBuffer();
```

## Step 4: Update Frame Analysis

1. Adjust the GPT-4 Vision prompt to account for side character specifics:

```javascript
const result = await openAiObject.chat.completions.create({
  model: "gpt-4-vision-preview",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: `For this side character sprite sheet, what would be the appropriate frameWidth and frameHeight for use in Phaser.js?`
        },
        {
          type: "image_url",
          image_url: imageDataUrl,
        },
      ],
    },
  ],
});
```

## Step 5: Add Options for Side Character Specifics

1. Include options for side character traits:

```javascript
async generateSideCharacter(description, options = {}) {
  const sideCharacterOptions = {
    size: options.size || "512x512",
    role: options.role || "npc",
    interactivity: options.interactivity || "static",
    ...options
  };
  // ... rest of the function
}
```

## Step 6: Implement Iteration Support

1. Add support for multiple iterations, similar to the main character function:

```javascript
if (sideCharacterOptions.iterations) {
  let iterations = [];
  for (let i = 0; i < sideCharacterOptions.iterations; i++) {
    // Generate and process side character
    // Add result to iterations array
  }
  return iterations;
} else {
  // Single generation logic
}
```

## Step 7: Update Return Format

1. Ensure the function returns consistent data:

```javascript
return {
  messages: jsonFrameResponse.choices[0].message,
  image: imageDataUrl,
  options: sideCharacterOptions
};
```

## Step 8: Add to Sprite Object

1. Include the new function in the `sprite` object:

```javascript
export const sprite = {
  async generateSprite(description, options = {}) {
    // ... existing code
  },
  async generateHouseAsset(description, options) {
    // ... existing code
  },
  async generateSideCharacter(description, options = {}) {
    // ... new function
  }
};
```

## Step 9: Test and Refine

1. Create test cases for the new `generateSideCharacter` function.
2. Run tests and adjust the function as needed.
3. Ensure compatibility with existing Phaser.js implementation.

  