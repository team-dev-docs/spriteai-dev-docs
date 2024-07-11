
  
  # **generateSprite Method**

High Level

This is a method that is part of our Node.js SDK. You can access it after installing the package from NPM and importing the sprite object:

```javascript
import { sprite } from 'spriteAI'
```

## Why should I use this method?

The `generateSprite` method allows you to create custom sprite sheets for game characters or objects using AI-generated images. It's particularly useful for:

1. Rapidly prototyping game assets
2. Creating unique characters with minimal effort
3. Generating walking animations optimized for 2D games

## What parameters are required?

The method accepts two parameters:

1. `description` (required): A string describing the character or object you want to generate.
2. `options` (optional): An object with additional configuration:
   - `iterations`: Number of sprite variations to generate
   - `size`: Image size (default: "1024x1024")
   - `save`: Boolean to determine if the image should be saved locally

## Prerequisites

- Node.js environment
- OpenAI API key properly configured
- Axios for HTTP requests
- Sharp for image processing

## How do I use this method?

Here's a basic example of how to use the `generateSprite` method:

```javascript
import { sprite } from 'spriteAI'

async function createGameCharacter() {
  const result = await sprite.generateSprite("a pixelated warrior", {
    iterations: 1,
    size: "1024x1024",
    save: true
  });

  console.log(result.messages);
  // Use result.image for your game's spritesheet
}

createGameCharacter();
```

This method will:

1. Generate a 1024x1024 image with 6 frames of a pixelated warrior character.
2. Process the image to ensure it's suitable for use as a sprite sheet.
3. Use AI to determine the optimal frameWidth and frameHeight for the sprite.
4. Return an object containing the processed image data and the AI-suggested frame dimensions.

The returned image is in base64 format, ready to be used in your game engine. The method also provides an option to save the generated image locally in the assets folder.

Note: The AI-generated suggestions for frameWidth and frameHeight should be reviewed and adjusted as needed for your specific game implementation.
  
  