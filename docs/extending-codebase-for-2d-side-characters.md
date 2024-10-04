

  # Extending the Codebase to Support Generating 2D Side Characters

## Step 1: Create a New Function

Add a new function called `generateSideCharacter` to the `sprite` object:

```javascript
async generateSideCharacter(description, options = {}) {
  // Implementation will go here
}
```

## Step 2: Modify the DALL-E Prompt

Adjust the prompt to specifically request side characters:

```javascript
const prompt = `Generate a 2D side character sprite for a game, based on this description: ${description}. The character should be facing sideways and be suitable for a side-scrolling game. Include 4 frames of animation for idle stance.`;
```

## Step 3: Implement the Function

Fill in the `generateSideCharacter` function:

```javascript
async generateSideCharacter(description, options = {}) {
  const openAiObject = new OpenAI();
  const dalle3 = openAiObject.images;

  const response = await dalle3.generate({
    model: "dall-e-3",
    prompt: `Generate a 2D side character sprite for a game, based on this description: ${description}. The character should be facing sideways and be suitable for a side-scrolling game. Include 4 frames of animation for idle stance.`,
    n: 1,
    size: options?.size || "1024x1024",
  });

  // Process the image
  const res = await axios.get(response.data[0].url, { responseType: 'arraybuffer' });
  const imgBuffer = Buffer.from(res.data);

  // Save the image if required
  if(options?.save) {
    const currentWorkingDirectory = process.cwd();
    let pictureName = `sideCharacter_${description.replace(/\s+/g, '')}`;
    let pictureFilename = `${currentWorkingDirectory}${path.sep}assets${path.sep}${pictureName}.png`;
    await sharp(imgBuffer).ensureAlpha().toFile(pictureFilename);
  }

  // Convert to base64
  let imageBuffer = await sharp(imgBuffer).ensureAlpha().toBuffer();
  let base64Image = imageBuffer.toString('base64');
  let imageDataUrl = `data:image/png;base64,${base64Image}`;

  return {image: imageDataUrl};
}
```

## Step 4: Add Frame Analysis

Implement frame analysis for side characters:

```javascript
const frameAnalysis = await openAiObject.chat.completions.create({
  model: "gpt-4-vision-preview",
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: [
        {
          type: "text",
          text: `Analyze this side character sprite sheet. How many frames are there? What would be the ideal frameWidth and frameHeight for use in a Phaser.js game?`
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

## Step 5: Process Frame Analysis

Extract the frame information:

```javascript
const jsonFrameResponse = await openAiObject.chat.completions.create({
  model: "gpt-3.5-turbo-1106",
  response_format: { type: "json_object" },
  max_tokens: 1000,
  messages: [
    {
      role: "user",
      content: `Return a JSON with the number of frames, frameWidth, and frameHeight from this analysis: ${frameAnalysis.choices[0].message.content}`
    },
  ],
});

const frameInfo = JSON.parse(jsonFrameResponse.choices[0].message.content);
```

## Step 6: Return Results

Combine all the information and return:

```javascript
return {
  image: imageDataUrl,
  frameInfo: frameInfo
};
```

## Step 7: Update Main Interface

Add the new function to the main `sprite` object:

```javascript
export const sprite = {
  // ... existing methods ...
  generateSideCharacter: async function(description, options = {}) {
    // ... implementation from steps 3-6 ...
  }
};
```

## Step 8: Testing

Create a test script to verify the new functionality:

```javascript
import { sprite } from './index.js';

async function testSideCharacterGeneration() {
  try {
    const result = await sprite.generateSideCharacter("A cute robot sidekick", { save: true });
    console.log("Side Character Generation Result:", result);
  } catch (error) {
    console.error("Error generating side character:", error);
  }
}

testSideCharacterGeneration();
```

## Step 9: Documentation

Update the project documentation to include information about the new `generateSideCharacter` function, its parameters, and expected output.

  