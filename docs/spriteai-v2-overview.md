# SpriteAI v2 Overview!! Now this is part of the docs repo

## Introduction

SpriteAI v2 is a powerful tool for generating sprite sheets using AI technology. It allows developers to quickly create animated sprites for use in game development, particularly for classic side-scrolling platformer games. This document provides an overview of SpriteAI v2's capabilities and how to use it in your projects.

## Features

* Generate sprite sheets with customizable subjects and actions

* Create transparent background sprites

* Adjustable frame count for animations

* Built-in server for easy testing and integration

## Core Functionality

### Sprite Generation

SpriteAI v2 uses OpenAI's image generation capabilities to create sprite sheets. The main function for this is `generateSprite`:

```javascript
export const generateSprite = async function({subject, action, frameNumber}) {
    let prompt = `A 64x64 pixel spritesheet of a ${subject} walking with ${frameNumber} frames, each frame depicting a different stage of the ${subject}'s ${action} motion. The background is transparent. The spritesheet is designed for a classic side-scrolling platformer game`
    const result = await openai.images.generate({
        model: "gpt-image-1",
        prompt,
        size: "1024x1024",
        background: "transparent",
        quality: "high",
    });
    return result
}
```

This function takes three parameters:

* `subject`: The main character or object of the sprite (e.g., "character", "monster")

* `action`: The action the subject is performing (e.g., "walking", "jumping")

* `frameNumber`: The number of frames in the animation

### Utility Functions

SpriteAI v2 includes utility functions to help work with the generated sprites:

1. `convertSpritesheetToDataUrl`: Converts a sprite sheet file to a data URL for easy use in web applications.

2. `startServer`: Starts a local server to serve the generated sprite sheets and provide a simple interface for viewing them.

## Getting Started

To use SpriteAI v2 in your project:

1. Ensure you have the necessary dependencies installed, including OpenAI and dotenv.

2. Set up your OpenAI API key in your environment variables.

3. Import the required functions from the SpriteAI v2 module.

4. Use the `generateSprite` function to create your sprite sheets.

5. Optionally, use the `startServer` function to view your sprites in a web browser.

## Example Usage

Here's a basic example of how to generate a sprite and start the server:

```javascript
import { generateSprite, startServer } from './spriteai-v2';

// Generate a sprite
const sprite = await generateSprite({
  subject: 'hero',
  action: 'running',
  frameNumber: 8
});

// Save the sprite (implementation not shown in provided code)
// ...

// Start the server to view the sprite
startServer(3000, 'hero-running.png', 8);
```

## Conclusion

SpriteAI v2 provides a streamlined way to generate high-quality sprite sheets for game development. By leveraging AI technology, it significantly reduces the time and effort required to create animated sprites, allowing developers to focus on other aspects of game creation.

For more detailed information on specific functions and advanced usage, please refer to the API reference documentation.
