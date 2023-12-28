
  
   # **Image Processing**

## What does this do?

The `Image Processing` library provides a set of functions to manipulate images. These functions can be used to remove the background color from an image, encode an image to base64, get the unique colors in an image, generate a sprite sheet of a character, and generate a 2D asset of a house.

## Why should I use this?

The `Image Processing` library can be used to improve the quality of your images and to create custom graphics. For example, you can use the `removeBackgroundColor()` function to remove the background from an image so that you can use it in a different project. You can also use the `encodeImage()` function to encode an image to base64 so that you can send it over the internet.

## How to use this

To use the `Image Processing` library, you can import it into your project. The following code shows how to import the library into a JavaScript project:

```javascript
import * as imageProcessing from '@ned/image-processing';
```

Once you have imported the library, you can use the functions provided by the library to manipulate images. The following code shows how to use the `removeBackgroundColor()` function to remove the background from an image:

```javascript
await imageProcessing.removeBackgroundColor('input.png', 'output.png', '#ffffff');
```

The following code shows how to use the `encodeImage()` function to encode an image to base64:

```javascript
const base64Image = imageProcessing.encodeImage('image.png');
```

The following code shows how to use the `getUniqueColors()` function to get the unique colors in an image:

```javascript
const colors = await imageProcessing.getUniqueColors('image.png');
```

The following code shows how to use the `generateSprite()` function to generate a sprite sheet of a character:

```javascript
const spriteSheet = await imageProcessing.generateSprite('knight');
```

The following code shows how to use the `generateHouseAsset()` function to generate a 2D asset of a house:

```javascript
const houseAsset = await imageProcessing.generateHouseAsset('medieval house');
```
  
  