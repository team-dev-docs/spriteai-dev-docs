

  # **Generate Character Portrait**

High Level

This is an asynchronous function that generates a detailed character portrait using OpenAI's DALL-E 3 model. It's part of our Node.js SDK that you can install from NPM and import from the sprite object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

This function allows you to quickly generate realistic character portraits based on text descriptions. It's particularly useful for:

1. Game developers needing to create character avatars
2. Writers wanting to visualize their characters
3. Content creators looking for unique, AI-generated portraits

The function provides both a base64-encoded image and an image buffer, giving you flexibility in how you use the generated portrait.

## What parameters or arguments are required?

The function takes two parameters:

1. `description` (required): A string describing the character you want to portray.
2. `options` (optional): An object that can include:
   - `size`: The size of the generated image (default is "1024x1024")
   - `save`: A boolean indicating whether to save the image to disk (default is false)

## Prerequisites

To use this function, you need:

1. An OpenAI API key with access to DALL-E 3
2. The following npm packages installed:
   - `openai`
   - `axios`
   - `sharp`

## How do I use this function?

Here's a basic example of how to use the `generateCharacterPortrait` function:

```javascript
import { sprite } from 'sprite'

async function createPortrait() {
  const description = "A young wizard with bright green eyes and a lightning scar on his forehead"
  const options = { size: "1024x1024", save: true }

  try {
    const { image, buffer } = await sprite.generateCharacterPortrait(description, options)
    console.log("Portrait generated successfully!")
    // Use the image (base64 string) or buffer as needed
  } catch (error) {
    console.error("Error generating portrait:", error)
  }
}

createPortrait()
```

This will generate a portrait based on the description, save it to the `assets` folder in your current working directory, and return both a base64-encoded image string and an image buffer.

Remember to handle the asynchronous nature of the function using async/await or promises in your implementation.

  