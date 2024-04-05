
  
  import InterestingText from '@site/src/components/interesting-text';

# **Remove Background Color**

**High Level**

This is a function that is part of our Node.js SDK, designed to remove a specific background color from an image. It utilizes the popular image manipulation library, Jimp, to perform the task. You can install the SDK from NPM and import the `removeBackgroundColor` function from the `sprite` object.

```javascript
import { removeBackgroundColor } from 'sprite';
```

**Why should I use this function?**

You should use this function when you need to remove a specific background color from an image. This can be useful in various scenarios, such as removing a solid-colored background from product images, logos, or any other image where you want to extract the foreground content.

**What are the required parameters or arguments?**

1. `inputPath` (string): The file path of the input image.
2. `outputPath` (string): The file path where the processed image should be saved.
3. `targetColor` (string): The color you want to remove from the background, specified in a CSS color format (e.g., '#FFFFFF' for white, '#0000FF' for blue).
4. `colorThreshold` (number, optional): The maximum color difference threshold for determining whether a pixel should be made transparent. Default value is 0.
5. `options` (object, optional): Additional options for the image processing operation. Currently, no options are implemented.

**Prerequisites**

Before using this function, make sure you have the following prerequisites:

1. Node.js installed on your system.
2. The `sprite` package installed in your project via NPM or Yarn.

**How do I use this function?**

Here's an example of how to use the `removeBackgroundColor` function:

```javascript
import { removeBackgroundColor } from 'sprite';

const inputPath = '/path/to/input/image.jpg';
const outputPath = '/path/to/output/image.png';
const targetColor = '#FFFFFF'; // White color

removeBackgroundColor(inputPath, outputPath, targetColor)
  .then(() => {
    console.log('Background color removal successful!');
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

In this example, we import the `removeBackgroundColor` function from the `sprite` package. Then, we provide the necessary arguments:

- `inputPath`: The file path of the input image.
- `outputPath`: The file path where the processed image should be saved.
- `targetColor`: The color you want to remove from the background, in this case, white (`#FFFFFF`).

The function returns a Promise that resolves when the background color removal is successful, or rejects with an error if something goes wrong.

You can also provide additional arguments, such as `colorThreshold` and `options`, if needed. For example, if you want to adjust the color difference threshold for determining whether a pixel should be made transparent, you can pass the `colorThreshold` argument:

```javascript
removeBackgroundColor(inputPath, outputPath, targetColor, 10)
  .then(() => {
    console.log('Background color removal successful!');
  })
  .catch((error) => {
    console.error('Error removing background color:', error);
  });
```

In this case, the `colorThreshold` is set to 10, which means that pixels with a color difference of 10 or less from the `targetColor` will be made transparent.

## Copy the Code into Your Components Folder

<InterestingText text="The ability to manipulate images programmatically is a powerful tool that opens up countless possibilities. It's like having a digital canvas where you can shape and transform the visual world according to your imagination. Embrace this power, and let your creativity soar!" />
  
  