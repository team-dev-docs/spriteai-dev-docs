
  
  # **Sprite Image Upload**

High Level

This is a function exported from our Node.js SDK that allows you to upload an image to the Sprite platform. You can install the SDK from NPM and import the required function from the `sprite` object as follows:

```javascript
import { uploadImage } from 'sprite';
```

## Why should I use this function?

The `uploadImage` function is a convenient way to send image data to the Sprite platform for further processing or analysis. It simplifies the process of uploading images by handling the necessary HTTP requests and data formatting.

## What are the parameters or arguments required?

The `uploadImage` function takes an object as its argument with the following properties:

- `image_url` (required): A string representing the data URL of the image to be uploaded. This can be obtained by converting the image file to a base64-encoded string.

## Prerequisites

Before using the `uploadImage` function, you need to:

1. Install the Sprite SDK by running `npm install sprite` or `yarn add sprite` in your project.
2. Import the required function from the SDK in your code file.
3. Ensure that you have the necessary permissions and authentication credentials to interact with the Sprite platform.

## How do I use this function?

Here's an example of how you can use the `uploadImage` function:

```javascript
import { uploadImage } from 'sprite';

const imageFile = /* get image file from input or other source */;
const imageDataUrl = convertToDataUrl(imageFile); // convert to data URL

const uploadResult = await uploadImage({ image_url: imageDataUrl });
console.log(uploadResult);
```

In this example, we first obtain the image file from an input or other source. We then convert the image file to a data URL using a helper function `convertToDataUrl`. Finally, we call the `uploadImage` function, passing an object with the `image_url` property set to the data URL of the image.

The `uploadImage` function returns a Promise that resolves with the result of the image upload operation. You can handle the result as needed in your application.
  
  