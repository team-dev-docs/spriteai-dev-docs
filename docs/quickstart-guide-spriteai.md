# Quickstart Guide: Getting Started with SpriteAI

This guide will walk you through the initial setup steps and demonstrate how to use the `downloadData()` function to retrieve processed data from the SpriteAI API.

## Initial Setup

1. Clone the repository:
   ```
   git clone https://github.com/your-repo/spriteai.git
   cd spriteai
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up your development environment:
   - Ensure you have Node.js and npm installed
   - Use a modern web browser (Chrome, Firefox, or Safari)

4. Configure your API key:
   - Create a `.env` file in the project root
   - Add your API key:
     ```
     SPRITEAI_API_KEY=your_api_key_here
     ```

## Running the Application

1. Start the development server:
   ```
   npm run start
   ```

2. Open your browser and navigate to `http://localhost:8080` (or the port specified in your console output).

## Using the `downloadData()` Function

The `downloadData()` function allows you to retrieve processed data from the SpriteAI API. Here's how to use it:

1. First, import the function in your JavaScript file:
   ```javascript
   import { downloadData } from './api/spriteAI';
   ```

2. Call the function with the required parameters:
   ```javascript
   async function fetchData() {
     try {
       const data = await downloadData({
         type: 'sprite',
         format: 'png',
         size: '64x64'
       });
       console.log('Downloaded data:', data);
       // Process the data as needed
     } catch (error) {
       console.error('Error downloading data:', error);
     }
   }

   fetchData();
   ```

3. The `downloadData()` function returns a Promise that resolves with the processed data. You can then use this data to update your game state, display sprites, or perform other actions as needed.

## Example: Displaying a Sprite

Here's a simple example of how to use the downloaded data to display a sprite in your Phaser game:

```javascript
class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: 'MainScene' });
  }

  preload() {
    // Preload other assets
  }

  async create() {
    const spriteData = await downloadData({
      type: 'sprite',
      format: 'png',
      size: '64x64'
    });

    // Create a data URL from the downloaded sprite data
    const dataUrl = URL.createObjectURL(new Blob([spriteData], { type: 'image/png' }));

    // Load the sprite into Phaser
    this.load.image('downloadedSprite', dataUrl);
    this.load.once('complete', () => {
      // Add the sprite to the scene
      this.add.image(400, 300, 'downloadedSprite');
    });
    this.load.start();
  }

  update() {
    // Game logic
  }
}
```

This example demonstrates how to download a sprite using the `downloadData()` function, create a data URL from the response, and display it in your Phaser game.

Remember to handle errors and edge cases in your production code, and consider implementing caching mechanisms to avoid unnecessary API calls.

For more detailed information on the SpriteAI API and additional features, please refer to the full documentation.