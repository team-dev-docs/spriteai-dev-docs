
  
  # **getUniqueColors**

**High-Level Overview**

This is a function exported from the sprite Node.js SDK that allows you to retrieve a list of unique colors from an image file. It can be imported and used like this:

```javascript
import { sprite } from 'sprite';

const uniqueColors = await sprite.getUniqueColors('/path/to/image.jpg');
console.log(uniqueColors);
```

**Why Should I Use This Function?**

You might want to use this function if you need to analyze the color palette of an image or if you're building an application that requires information about the unique colors present in an image. This function can be useful in various scenarios, such as image processing, color analysis, or generating color palettes.

**Parameters/Arguments Required**

The `getUniqueColors` function accepts a single argument:

- `filePath` (string): The path to the image file you want to analyze. This can be either an absolute or relative path.

**Prerequisites**

Before using this function, make sure you have the following:

1. The sprite Node.js SDK installed in your project. You can install it using npm:

```
npm install sprite
```

2. An image file that you want to analyze for unique colors.

**How to Use This Function**

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

async function analyzeImageColors() {
  try {
    const filePath = '/path/to/image.jpg';
    const uniqueColors = await sprite.getUniqueColors(filePath);
    console.log('Unique colors in the image:', uniqueColors);
  } catch (error) {
    console.error('Error retrieving unique colors:', error);
  }
}

analyzeImageColors();
```

In this example, we first import the `sprite` object from the SDK. Then, we define an async function `analyzeImageColors` where we call the `getUniqueColors` function with the path to the image file we want to analyze.

The function returns a promise that resolves to an array of unique color values present in the image. Each color value is represented as a hexadecimal string (e.g., `#ff0000` for red).

If there's an error during the color extraction process, the promise will be rejected, and you can handle the error in the catch block.

Please note that the `getUniqueColors` function is designed to work with various image formats supported by the sprite SDK, such as JPEG, PNG, and others.
  
  