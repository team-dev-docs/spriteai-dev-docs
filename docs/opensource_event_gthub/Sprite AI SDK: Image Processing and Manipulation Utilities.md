
  
  # **Sprite AI Developer Docs**

## High-Level Overview

This is a collection of utility functions and classes provided by the Sprite AI Node.js SDK. These functions and classes are designed to assist with various image processing and manipulation tasks. The SDK is available through npm and can be imported into your project like this:

```javascript
import { sprite } from 'sprite-ai';
```

## Why Use These Functions?

The Sprite AI SDK offers a convenient and efficient way to perform common image-related operations, such as removing background colors, encoding images, extracting unique colors, and more. By utilizing these functions, you can streamline your development process and avoid the need to implement these functionalities from scratch.

## Available Functions and Classes

### 1. `removeBackgroundColor`

This function removes a specific background color from an image. It can be useful for creating transparent backgrounds or isolating foreground elements.

**Arguments:**
- `imagePath` (string): The path to the input image file.
- `backgroundColor` (string or object): The background color to be removed, specified as a hexadecimal string or an object containing RGB values.

**Prerequisites:**
- The input image file must be accessible and in a supported format (e.g., JPEG, PNG).

**Usage:**

```javascript
import { sprite } from 'sprite-ai';

const imagePath = '/path/to/image.jpg';
const backgroundColor = '#ffffff'; // or { r: 255, g: 255, b: 255 }

sprite.removeBackgroundColor(imagePath, backgroundColor)
  .then(processedImagePath => {
    console.log('Image processed successfully:', processedImagePath);
  })
  .catch(error => {
    console.error('Error processing image:', error);
  });
```

### 2. `imageTransparencyFunction`

This function modifies the transparency (alpha channel) of an image based on a specified color or range of colors.

**Arguments:**
- `imagePath` (string): The path to the input image file.
- `color` (string or object): The color to be made transparent, specified as a hexadecimal string or an object containing RGB values.
- `tolerance` (number, optional): The tolerance level for color matching, where a higher value includes a broader range of colors.

**Prerequisites:**
- The input image file must be accessible and in a supported format (e.g., JPEG, PNG).

**Usage:**

```javascript
import { sprite } from 'sprite-ai';

const imagePath = '/path/to/image.png';
const color = '#00ff00'; // or { r: 0, g: 255, b: 0 }
const tolerance = 10;

sprite.imageTransparencyFunction(imagePath, color, tolerance)
  .then(processedImagePath => {
    console.log('Image processed successfully:', processedImagePath);
  })
  .catch(error => {
    console.error('Error processing image:', error);
  });
```

### 3. `encodeImageUtility`

This function encodes an image into a Base64 string or other supported encoding formats.

**Arguments:**
- `imagePath` (string): The path to the input image file.
- `encoding` (string, optional): The desired encoding format (e.g., 'base64', 'binary'). Default is 'base64'.

**Prerequisites:**
- The input image file must be accessible and in a supported format (e.g., JPEG, PNG).

**Usage:**

```javascript
import { sprite } from 'sprite-ai';

const imagePath = '/path/to/image.jpg';
const encoding = 'base64';

sprite.encodeImageUtility(imagePath, encoding)
  .then(encodedImage => {
    console.log('Encoded image:', encodedImage);
  })
  .catch(error => {
    console.error('Error encoding image:', error);
  });
```

### 4. `getUniqueColors`

This function extracts and returns a list of unique colors present in an image.

**Arguments:**
- `imagePath` (string): The path to the input image file.
- `options` (object, optional): Additional options for color extraction, such as color format (e.g., 'hex', 'rgb') and color sorting.

**Prerequisites:**
- The input image file must be accessible and in a supported format (e.g., JPEG, PNG).

**Usage:**

```javascript
import { sprite } from 'sprite-ai';

const imagePath = '/path/to/image.png';
const options = { format: 'hex', sort: true };

sprite.getUniqueColors(imagePath, options)
  .then(uniqueColors => {
    console.log('Unique colors:', uniqueColors);
  })
  .catch(error => {
    console.error('Error getting unique colors:', error);
  });
```

These functions cover various aspects of image processing and manipulation, allowing you to perform tasks such as background color removal, transparency modification, image encoding, and color extraction. By leveraging the Sprite AI SDK, you can streamline your development workflow and focus on the core functionality of your application.
  
  