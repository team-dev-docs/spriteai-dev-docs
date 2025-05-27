# Overview of SpriteAI V2

## Introduction

This documentation provides an overview of the SpriteAI V2 project, which is designed to generate and display sprite animations for game development. The main functionality is implemented in the `index.js` file, which includes features for generating sprite images, converting them to data URLs, and serving them via a local web server.

## Key Components

### OpenAI Integration

The project uses the OpenAI API to generate sprite images. This is accomplished through the `generateSprite` function, which takes parameters for the subject, action, and number of frames to create a customized sprite sheet.

```javascript
import OpenAI from "openai";
const openai = new OpenAI();

export const generateSprite = async function({subject, action, frameNumber}) {
    // Function implementation...
}
```

### Sprite Generation

The `generateSprite` function constructs a prompt for the OpenAI image generation model, specifying details such as image size, frame count, and style. It's designed to create sprite sheets suitable for side-scrolling platformer games.

### Image Processing

The `convertSpritesheetToDataUrl` function reads an image file and converts it to a base64-encoded data URL. This allows for easy integration of the generated sprites into web applications.

```javascript
export const convertSpritesheetToDataUrl = (filePath) => {
    // Function implementation...
};
```

### Web Server

The project includes a simple HTTP server implemented in the `startServer` function. This server can serve the generated sprite images and associated HTML/JavaScript files for viewing and testing the animations.

```javascript
export const startServer = (port = 3000, imageFile = 'sprite.png', frameCount = 12) => {
    // Server implementation...
};
```

## Usage

To use the SpriteAI V2 system:

1. Generate a sprite using the `generateSprite` function, providing the necessary parameters.
2. Convert the generated sprite sheet to a data URL using `convertSpritesheetToDataUrl`.
3. Start the local server using `startServer` to view and test the animation.

## Conclusion

SpriteAI V2 provides a streamlined workflow for generating and testing sprite animations, leveraging AI-powered image generation and a built-in web server for rapid prototyping and development of game assets.