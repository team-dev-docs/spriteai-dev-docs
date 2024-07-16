
  
  # **Remove Background Color**

High Level

This function is part of our Node.js SDK that you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `removeBackgroundColor` function is useful when you need to remove a specific background color from an image, creating transparency where that color was present. This is particularly helpful in image processing tasks such as:

- Preparing sprites for game development
- Creating transparent PNG images for web design
- Isolating objects in images by removing uniform backgrounds

## What parameters are required?

The function takes the following parameters:

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js installed on your system
- The `sprite` package installed in your project
- The `jimp` library, which is used internally for image processing

## How do I use this function?

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { sprite } from 'sprite'

async function processImage() {
  try {
    await sprite.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      10
    )
    console.log('Background removed successfully!')
  } catch (error) {
    console.error('Error processing image:', error)
  }
}

processImage()
```

In this example, the function will remove white backgrounds from 'input.png', with a color threshold of 10, and save the result as 'output.png'.

The function returns a Promise, so you should use `async/await` or `.then()` to handle the asynchronous operation.

Remember to adjust the color threshold as needed. A higher threshold will remove colors that are similar to the target color, which can be useful for dealing with slight color variations in the background.
  
  