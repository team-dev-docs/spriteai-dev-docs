
  
  # **generateSprite Method**

High Level

This is a method that is part of the sprite object in our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this method?

The `generateSprite` method allows you to create custom sprite sheets for game characters or objects using AI-generated images. It's particularly useful for:

1. Rapidly prototyping game assets
2. Creating unique characters with minimal artistic input
3. Generating walking animations optimized for 2D games

## What parameters are required?

The method accepts two parameters:

1. `description` (required): A string describing the character or object you want to generate.
2. `options` (optional): An object that can include:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default is "1024x1024")
   - `save`: Boolean to determine if the image should be saved locally

## Prerequisites

- Node.js environment
- Installation of the sprite-ai package
- OpenAI API key set up in your environment variables

## How do I use this method?

Here's a basic example of how to use the `generateSprite` method:

```javascript
import { sprite } from 'sprite-ai'

async function createGameCharacter() {
  const result = await sprite.generateSprite("a pixel art knight in armor", {
    iterations: 1,
    size: "1024x1024",
    save: true
  });

  console.log(result.messages); // Log the frame dimensions
  console.log(result.image); // Log the base64 image data
}

createGameCharacter();
```

This method will:

1. Generate a sprite sheet with 6 frames of a knight character
2. Arrange the frames in a 2x3 grid
3. Use DALL-E 3 to create the initial image
4. Process the image to ensure it's grayscale and has an alpha channel
5. Use GPT-4 Vision to analyze the image and determine optimal frame dimensions
6. Return the frame dimensions as JSON and the image as a base64 string

The returned data can be used directly in game engines like Phaser.js to create animated sprites.

Note: The method includes safeguards to ensure consistent output, such as specifying a white background and Super Nintendo-style graphics.
  
  