

  # **Generate Character Portrait**

High Level

This function is part of our Node.js SDK, which you can install from NPM. To use it, import the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateCharacterPortrait` function allows you to create detailed, realistic character portraits based on text descriptions. It's particularly useful for:

1. Game developers who need to quickly generate character artwork
2. Writers who want to visualize their characters
3. Content creators looking for unique, customized portraits

By leveraging the power of DALL-E 3, this function produces high-quality images tailored to your specific descriptions.

## What parameters or arguments are required?

The function accepts two parameters:

1. `description` (required): A string describing the character you want to portray.
2. `options` (optional): An object with additional configuration:
   - `size`: Image size (default: "1024x1024")
   - `save`: Boolean indicating whether to save the image locally

## Prerequisites

To use this function, you need:

1. An OpenAI API key with access to DALL-E 3
2. The `openai`, `axios`, and `sharp` npm packages installed
3. Proper configuration of the OpenAI client

## How do I use this function?

Here's a step-by-step guide to using the `generateCharacterPortrait` function:

1. Ensure you have the necessary prerequisites set up.

2. Call the function with a description and optional parameters:

   ```javascript
   const result = await generateCharacterPortrait("A wise old wizard with a long white beard and piercing blue eyes", { save: true });
   ```

3. The function returns an object with two properties:
   - `image`: A base64-encoded data URL of the generated image
   - `buffer`: A Buffer object containing the image data

4. You can use the returned image data in your application, for example:

   ```javascript
   // Display the image in an HTML img tag
   document.getElementById('characterImage').src = result.image;

   // Or use the buffer for further processing
   // e.g., resize the image using sharp
   const resizedImage = await sharp(result.buffer).resize(500, 500).toBuffer();
   ```

5. If you set `save: true` in the options, the function will also save the image to your local filesystem in the `assets` folder, using a filename based on the description.

This function simplifies the process of generating unique character portraits, allowing you to focus on your creative process while it handles the image generation and processing.

  