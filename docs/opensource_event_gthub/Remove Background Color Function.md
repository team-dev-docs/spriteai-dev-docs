
  
  # **Remove Background Color**

High Level

This is a function that allows you to remove the background color from an image. It is part of the SpriteAI Node.js SDK, which you can install from NPM and import using the following code:

```
import { sprite } from 'spriteai'
```

## Why should I use this function?

Removing the background color from an image can be a useful preprocessing step for various computer vision tasks, such as object detection, image segmentation, or image editing. This function simplifies the process of removing the background color, allowing you to focus on the main task at hand.

## What are the parameters or arguments required?

This function likely takes the following parameters:

1. **imagePath** (string): The path to the input image file.
2. **outputPath** (string, optional): The path to save the processed image with the background color removed. If not provided, the function may return the processed image data directly.
3. **backgroundColor** (string or array, optional): The background color to be removed, specified as an RGB or hexadecimal value. If not provided, the function may attempt to automatically detect and remove the dominant background color.

## Prerequisites

Before using this function, make sure you have:

1. Installed the SpriteAI Node.js SDK by running `npm install spriteai` or `yarn add spriteai`.
2. Imported the `sprite` object from the SDK, as shown in the example above.

## How do I use this function?

Here's an example of how you might use this function:

```javascript
import { sprite } from 'spriteai'

const inputImagePath = '/path/to/your/image.jpg'
const outputImagePath = '/path/to/output/image.jpg'

// Remove background color with default settings
sprite.removeBackgroundColor(inputImagePath, outputImagePath)
  .then(() => {
    console.log('Background color removed successfully!')
  })
  .catch((error) => {
    console.error('Error removing background color:', error)
  })

// Remove a specific background color (e.g., white)
sprite.removeBackgroundColor(inputImagePath, outputImagePath, '#FFFFFF')
  .then(() => {
    console.log('White background color removed successfully!')
  })
  .catch((error) => {
    console.error('Error removing background color:', error)
  })
```

In this example, the `removeBackgroundColor` function is called with the input image path and an optional output path. If a specific background color needs to be removed, it can be provided as the third argument (e.g., `'#FFFFFF'` for white).

Remember to handle the Promise returned by the function appropriately, either using the `.then` and `.catch` methods or `async/await` syntax.
  
  