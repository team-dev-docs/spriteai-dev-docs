
  
  # **getUniqueColors Function**

High Level

This is an asynchronous function that extracts unique colors from an image. It's part of the sprite AI toolkit, which you can install from NPM and import like this:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

Use `getUniqueColors` when you need to analyze the color palette of an image. It's particularly useful for:

- Sprite and pixel art analysis
- Color scheme extraction
- Image optimization tasks

## What parameters or arguments are required?

The function requires:

1. `imagePath` (string): The path to the image file you want to analyze.
2. `options` (object, optional): An empty object by default, reserved for future customization.

## Prerequisites

- Node.js environment
- Jimp library (it's used internally for image processing)
- The image file you want to analyze should be accessible via the provided path

## How do I use this function?

Here's a basic example of how to use `getUniqueColors`:

```javascript
import { sprite } from 'sprite-ai'

async function analyzeImage() {
  const imagePath = './path/to/your/image.png'
  try {
    const uniqueColors = await sprite.getUniqueColors(imagePath)
    console.log('Unique colors found:', uniqueColors.length)
    console.log('Color values:', uniqueColors)
  } catch (error) {
    console.error('Error analyzing image:', error)
  }
}

analyzeImage()
```

The function returns an array of unique color values as integers. Each integer represents an RGBA color. You can convert these back to RGBA values using Jimp's `intToRGBA` method if needed.

Note that fully transparent pixels (alpha = 0) are ignored in the color extraction process.
  
  