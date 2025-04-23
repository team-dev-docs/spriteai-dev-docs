# Sprite Generation Wizard

Welcome to the Sprite Generation Wizard! This guide will walk you through the process of generating sprite sheets using AI-powered image generation and analysis. Follow these steps to create your own custom sprites.

## Step 1: Import the Sprite Module

First, make sure you have the sprite module imported in your project:

```javascript
import { sprite } from './path/to/sprite/module';
```

## Step 2: Prepare Your Sprite Description

Think about the character or object you want to create as a sprite. Come up with a clear and detailed description. For example:
- "A pixelated robot with glowing blue eyes"
- "A cartoon cat with orange fur and green eyes"
- "A medieval knight in shining armor"

## Step 3: Choose Your Options

Decide on the following options for your sprite generation:

1. **Iterations**: How many variations of the sprite do you want? (default is 1)
2. **Size**: What size should the sprite sheet be? (default is "1024x1024")
3. **Save**: Do you want to save the generated image to disk? (default is false)

## Step 4: Generate Your Sprite

Now it's time to generate your sprite! Use the `generateSprite` function with your description and options:

```javascript
const description = "Your sprite description here";
const options = {
  iterations: 1, // or more if you want variations
  size: "1024x1024",
  save: false // set to true if you want to save the image
};

const result = await sprite.generateSprite(description, options);
```

## Step 5: Retrieve Your Sprite Data

After generation, you'll receive an object (or array of objects if you requested multiple iterations) containing:

- `messages`: JSON object with frameHeight and frameWidth information
- `image`: Base64-encoded image data URL of the generated sprite sheet

You can access this data like so:

```javascript
console.log(result.messages); // Frame size information
console.log(result.image); // Base64 image data
```

If you generated multiple variations, you can loop through them:

```javascript
result.forEach((variation, index) => {
  console.log(`Variation ${index + 1}:`, variation.messages);
});
```

## Step 6: Use Your Generated Sprite

You can now use the generated sprite in your project! The sprite sheet contains 6 frames in a 2x3 grid, optimized for walking animations.

If you set `save: true` in your options, you'll find the saved image in the 'assets' folder, with a filename based on your description.

## Tips and Considerations

- The AI models may produce varying results for the same input, so don't be afraid to try multiple times if you're not satisfied with the initial output.
- Sprites are converted to grayscale during processing, which may affect the final appearance.
- Be patient! The generation process involves API calls and image processing, so it may take a moment to complete.

Congratulations! You've now learned how to use the Sprite Generation Wizard to create custom sprites for your projects. Happy sprite-making!