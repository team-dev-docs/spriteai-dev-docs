
  
  # **getUniqueColors Utility**

**High Level**

The `getUniqueColors` function is a utility method provided by the `sprite` object in our Node.js SDK. It allows you to extract a list of unique colors present in an image file. This can be useful for various image processing tasks, such as color analysis, palette generation, or image compression.

```javascript
import { sprite } from 'sprite';

const uniqueColors = await sprite.getUniqueColors('path/to/image.jpg');
console.log(uniqueColors);
```

**Why should I use this function?**

The `getUniqueColors` function is particularly beneficial when you need to analyze the color composition of an image or create a color palette based on the colors present in the image. It can help you identify the unique colors used in the image, which can be useful for tasks like color quantization, image compression, or creating color-based filters or effects.

**What parameters or arguments are required?**

The `getUniqueColors` function takes the following parameters:

1. `imagePath` (string, required): The file path or URL of the image you want to analyze.
2. `options` (object, optional): An optional object that can be used to pass additional options or configuration settings to the function. Currently, no options are defined for this function.

**Prerequisites**

To use the `getUniqueColors` function, you need to have the `sprite` package installed and imported into your Node.js project.

**How do I use this function?**

Here's an example of how to use the `getUniqueColors` function:

```javascript
import { sprite } from 'sprite';

async function processImage() {
  const imagePath = 'path/to/image.jpg';
  const uniqueColors = await sprite.getUniqueColors(imagePath);

  console.log('Unique colors in the image:', uniqueColors);
  // Further processing or analysis of the unique colors
}

processImage();
```

1. Import the `sprite` object from the `sprite` package.
2. Call the `getUniqueColors` function, passing the file path or URL of the image you want to analyze as the first argument.
3. Optionally, you can pass an `options` object as the second argument if you need to configure additional settings in the future.
4. The function returns a promise that resolves to an array of unique color values present in the image.
5. You can then process or analyze the unique colors as needed for your specific use case.

The `getUniqueColors` function internally uses the `jimp` library to load and process the image data. It scans through each pixel of the image, extracting the RGB (red, green, blue) and alpha (transparency) values. If the pixel is not fully transparent, it converts the RGB and alpha values to a single integer color value and adds it to a set to ensure uniqueness. Finally, it returns an array of unique color values from the set.
  
  