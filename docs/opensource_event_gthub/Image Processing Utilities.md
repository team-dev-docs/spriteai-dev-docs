
  
  # **Image Processing Utilities**

High Level

These are a set of utility functions exported from our Node.js SDK, designed to aid in various image processing tasks. You can install the SDK from NPM and import the required functions from the `sprite` object, like this:

```javascript
import { removeBackgroundColor, makeTransparent, encodeImage, getUniqueColors } from 'sprite';
```

## Why should I use these functions?

These utility functions provide a convenient way to perform common image processing tasks, such as removing background colors, making images transparent, encoding images, and getting unique colors from an image. By using these pre-built utilities, you can save time and effort compared to writing custom code for these tasks from scratch.

## What are the parameters or arguments required?

Each function has its own set of required parameters or arguments, which will vary based on the specific operation being performed. However, most of these functions will likely require an input image or image data as a parameter.

## Prerequisites

To use these functions, you'll need to have the `sprite` package installed in your Node.js project. Additionally, some functions may require additional dependencies or libraries, such as `jimp` for image manipulation.

## How do I use these functions?

The usage of each function will depend on its specific purpose and the parameters it requires. Here's a general overview of how you might use some of these functions:

1. **removeBackgroundColor**
   This function is designed to remove a specific background color from an image. You'll need to provide the input image or image data, as well as the color you want to remove as a hexadecimal value or RGB values.

2. **makeTransparent**
   This utility function allows you to make an image transparent by removing the specified background color. You'll need to provide the input image or image data, as well as the color you want to make transparent.

3. **encodeImage**
   The `encodeImage` function is used to encode an image into a specific format, such as PNG, JPEG, or GIF. You'll need to provide the input image or image data, as well as the desired output format.

4. **getUniqueColors**
   This function retrieves a list of unique colors present in an image. You'll need to provide the input image or image data, and the function will return an array of unique color values.

Each function may have additional optional parameters or configurations that you can utilize to customize the behavior or output. It's recommended to refer to the documentation or source code for detailed information on the available parameters and usage examples for each specific function.
  
  