# generateSprite

## High Level

This function is exported from our Node.js SDK that you install from NPM and import from the `sprite` object like below:

```javascript
import { sprite } from 'sprite'
```

The `generateSprite` function creates a character spritesheet based on a given description, optimized for walking animations in a style resembling Super Nintendo graphics.

## Why should I use this function?

Use this function when you need to:
- Quickly generate character spritesheets for game development
- Create consistent, SNES-style pixel art characters
- Obtain walking animation frames for your game sprites
- Experiment with different character designs using AI-generated art

## What parameters or arguments are required?

The `generateSprite` function takes two parameters:

1. `description` (string): A description of the character you want to generate.
2. `options` (object, optional): Configuration options for the sprite generation.

Available options include:
- `iterations` (number): Number of generation attempts (if not specified, only one attempt is made)
- `size` (string): Size of the output image (default: '1024x1024')
- `save` (boolean): Whether to save the generated image to disk

## Prerequisites

- Node.js environment
- OpenAI API key set up in your environment variables
- Required npm packages installed (OpenAI, axios, sharp)

## How do I use this function?

Here's a basic example of how to use the `generateSprite` function:

```javascript
import { sprite } from 'sprite';

async function generateCharacter() {
  const description = 'a cute robot';
  const options = {
    size: '1024x1024',
    save: true
  };

  try {
    const result = await sprite.generateSprite(description, options);
    console.log('Sprite generated:', result);
  } catch (error) {
    console.error('Error generating sprite:', error);
  }
}

generateCharacter();
```

This function will:
1. Generate a 1024x1024 image containing 6 frames of a walking animation for the described character.
2. Arrange the frames in two rows with 3 columns each.
3. Apply a white background to the image.
4. Save the image to the 'assets' folder if the `save` option is true.
5. Return an object containing the base64-encoded image data and frame size information.

The returned object includes:
- `image`: A base64-encoded data URL of the generated sprite image
- `messages`: Frame size information (frameWidth and frameHeight) for use in game engines like Phaser.js

Note: The function uses AI models to generate and analyze images, so results may vary. You might need to run multiple iterations to get the desired output.
