# SpriteAI V2: Server Setup Guide

## Introduction

Welcome to the SpriteAI V2 server setup guide. This document will walk you through the process of setting up and starting a server for SpriteAI V2, a powerful tool for generating and managing sprite animations.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 12 or higher)
- npm (usually comes with Node.js)

## Installation

1. Clone the SpriteAI V2 repository or download the source code.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies by running:

   ```bash
   npm install
   ```

## Server Configuration

The SpriteAI V2 server is configured in the `index.js` file. Here's an overview of the main components:

- The server uses the `http` module to create an HTTP server.
- It serves static files (HTML, CSS, JavaScript) from the project directory.
- The server provides an endpoint to fetch image file information.

## Starting the Server

To start the SpriteAI V2 server, follow these steps:

1. Open your terminal and navigate to the project directory.
2. Run the following command:

   ```bash
   node index.js
   ```

   By default, the server will start on port 3000.

3. You should see a message in the console:

   ```
   Server running at http://localhost:3000/
   ```

4. Open a web browser and visit `http://localhost:3000` to access the SpriteAI V2 interface.

## Customizing Server Settings

You can customize the server settings by modifying the `startServer` function in `index.js`:

```javascript
startServer(port = 3000, imageFile = 'sprite.png', frameCount = 12)
```

- `port`: The port number on which the server will run (default: 3000)
- `imageFile`: The name of the sprite image file (default: 'sprite.png')
- `frameCount`: The number of frames in the sprite animation (default: 12)

To use custom settings, modify the function call at the end of `index.js`.

## Server Endpoints

The server provides the following endpoints:

- `/`: Serves the main HTML file (index.html)
- `/imageFile`: Returns JSON with image file information (name and frame count)
- Any other path: Attempts to serve static files from the project directory

## Generating Sprites

SpriteAI V2 includes a `generateSprite` function that uses OpenAI's image generation capabilities. To use this feature:

1. Ensure you have set up your OpenAI API key in a `.env` file.
2. Call the `generateSprite` function with the required parameters:

   ```javascript
   const result = await generateSprite({
     subject: 'character',
     action: 'walking',
     frameNumber: 8
   });
   ```

## Troubleshooting

If you encounter any issues while starting the server:

1. Check that all dependencies are installed correctly.
2. Ensure no other process is using the specified port.
3. Verify that your OpenAI API key is correctly set in the `.env` file if you're using sprite generation features.

## Next Steps

Now that your SpriteAI V2 server is up and running, you can:

- Explore the API documentation for more advanced usage
- Experiment with generating different types of sprites
- Integrate SpriteAI V2 into your game development workflow

For more information on using SpriteAI V2's features, please refer to our other documentation pages.