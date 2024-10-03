

  # Extending SpriteAI to Generate Side Characters

## Step 1: Create a New Function

Add a new function called `generateSideCharacter` to the `sprite` object:

```javascript
async generateSideCharacter(description, options = {}) {
  // Implementation will go here
}
```

## Step 2: Modify the DALL-E Prompt

Inside the new function, use a modified version of the existing DALL-E prompt:

```javascript
const prompt = `I NEED to test how the tool works with extremely simple prompts. DO NOT add any detail, just use it AS-IS. Generate 6 frames of a 24-bit side character described as ${description}, optimized for idle animations. Other Instructions: -The top half of the image should be the frames and the bottom half should be a blank white background with nothing in it. -Style should resemble Super Nintendo graphics. -The background of the image, and frame should just be the color white, with no extra items, lines, text, or grids. -The frames should be two rows with 3 columns each, so a 2 by 3 table.`;
```

## Step 3: Implement the Function Logic

Use the existing `generateSprite` function as a template:

1. Create an OpenAI instance
2. Generate the image using DALL-E 3
3. Process the image (convert to grayscale, save if required)
4. Generate frame dimensions using GPT-4 Vision
5. Create a JSON response with GPT-3.5 Turbo

## Step 4: Add Iteration Support

Include the option for multiple iterations, similar to the `generateSprite` function:

```javascript
if (options.iterations) {
  // Implement iteration logic
} else {
  // Single generation logic
}
```

## Step 5: Return the Result

Return the generated image data and frame information.

## Step 6: Update Error Handling

Ensure proper error handling is in place for the new function.

## Step 7: Add Options for Customization

Include options for customizing the side character generation, such as:
- Size of the generated image
- Style variations
- Animation type (idle, walking, etc.)

## Step 8: Documentation

Update the documentation to include information about the new `generateSideCharacter` function and its usage.

## Step 9: Testing

Create test cases for the new function to ensure it works as expected.

## Step 10: Integration

Integrate the new function into the existing API or interface of the SpriteAI system.

  