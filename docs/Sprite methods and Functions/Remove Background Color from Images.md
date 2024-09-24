

  # **Remove Background Color**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `2dmodel` object as follows:

```javascript
import { 2dmodel } from '2dmodel'
```

## Why should I use this function?

The `removeBackgroundColor` function is designed to remove a specific background color from a 2D model, making it transparent. This is particularly useful when working with 2D models or images that need to be integrated into various backgrounds or scenes without carrying their original background.

## What parameters are required?

The function accepts the following parameters:

1. `inputPath` (string): The path to the input 2D model file.
2. `outputPath` (string): The path where the processed 2D model will be saved.
3. `targetColor` (string): The color to be removed, specified as a CSS color string (e.g., '#FFFFFF' for white).
4. `colorThreshold` (number, optional): The tolerance for color matching. Default is 0.
5. `options` (object, optional): Additional options (currently unused in the provided code).

## Prerequisites

- Node.js environment
- Jimp library installed (`npm install jimp`)

## How do I use this function?

To use the `removeBackgroundColor` function, follow these steps:

1. Import the function from the 2D model SDK:

```javascript
import { 2dmodel } from '2dmodel'
```

2. Call the function with the required parameters:

```javascript
async function process2DModel() {
  try {
    await 2dmodel.removeBackgroundColor(
      'input.png',
      'output.png',
      '#FFFFFF',
      10
    );
    console.log('Background removed successfully!');
  } catch (error) {
    console.error('Error removing background:', error);
  }
}

process2DModel();
```

This example removes the white background from 'input.png', saves the result to 'output.png', and uses a color threshold of 10 for more flexible color matching.

The function uses the Jimp library to process the 2D model, scanning each pixel and comparing it to the target color. If a pixel's color is within the specified threshold, it's made transparent. The resulting 2D model is then saved to the specified output path.

## Advanced Usage

For more complex 2D models, you may need to adjust the `colorThreshold` parameter to achieve the desired result. A higher threshold allows for more variation in the background color, which can be useful for models with slight color variations or antialiasing effects.

```javascript
await 2dmodel.removeBackgroundColor(
  'complex_model.png',
  'transparent_model.png',
  '#F0F0F0',
  20
);
```

This example uses a light gray background color (#F0F0F0) and a higher threshold of 20, which can help in removing backgrounds with subtle gradients or noise.

  