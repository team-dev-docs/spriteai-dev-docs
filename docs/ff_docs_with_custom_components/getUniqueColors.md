
  
  ```mdx
import InterestingText from '@site/src/components/interesting-text';

# **Get Unique Colors From Image**

**High Level**

This function is part of a Node.js SDK that allows you to retrieve a list of unique colors present in an image. It can be imported from the `sprite` object after installing the SDK from NPM.

```javascript
import { sprite } from 'sprite';
```

**Why should I use this function?**

This function can be useful in various scenarios, such as:

1. **Color Analysis**: Analyzing the color composition of an image can provide insights into its visual characteristics, which can be valuable for applications like image editing, color palette generation, or image similarity comparison.

2. **Image Processing**: Identifying unique colors in an image can be a preliminary step for further image processing tasks, such as color quantization, color reduction, or color-based segmentation.

3. **Data Visualization**: The unique color information can be used to generate color palettes or color schemes for data visualization purposes, ensuring that the chosen colors are representative of the image.

**What are the required parameters or arguments?**

The `getUniqueColors` function takes two parameters:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional configuration options for image processing. Currently, the provided code does not specify any options.

**Prerequisites**

To use this function, you'll need to have the following prerequisites:

1. A Node.js environment set up on your machine.
2. The `sprite` SDK installed and imported in your project.
3. The `jimp` library, which is used internally for image processing operations.

**How do I use this function?**

Here's an example of how you can use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

const imagePath = 'path/to/your/image.jpg';

sprite.getUniqueColors(imagePath)
  .then(uniqueColors => {
    console.log(`Unique colors in the image: ${uniqueColors}`);
    // Further processing or analysis with the unique colors
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

1. Import the `sprite` object from the SDK.
2. Specify the file path or URL of the image you want to analyze using the `imagePath` variable.
3. Call the `getUniqueColors` function, passing the `imagePath` as an argument.
4. The function returns a Promise that resolves with an array of unique color integers. Each integer represents an RGBA color value.
5. In the Promise's `.then` callback, you can access the unique color array and perform further processing or analysis as needed.
6. If an error occurs during the operation, it will be caught in the Promise's `.catch` callback.

By using this function, you can easily retrieve the unique colors present in an image, which can be a valuable input for various image processing and data visualization tasks.

## Copy the Code into Your Components Folder

<InterestingText text="Color is the keyboard, the eyes are the harmonies, the soul is the piano with many strings. The artist is the hand that plays, touching one key or another, to cause vibrations in the soul." - Wassily Kandinsky />

<InterestingText text="Kandinsky's quote beautifully illustrates the profound connection between color and the human experience. Just as a pianist's touch on the keys resonates through the strings, colors have the power to evoke vibrations within our very souls. This function, by revealing the unique colors within an image, opens the door to understanding the symphony of hues that each visual composition contains, allowing us to appreciate the artistry and emotion woven into every brushstroke or pixel." />

```
  
  