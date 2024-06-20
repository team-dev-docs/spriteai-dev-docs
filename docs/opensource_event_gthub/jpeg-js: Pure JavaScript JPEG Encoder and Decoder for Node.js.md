
  
  # **jpeg-js**

High Level

`jpeg-js` is a pure JavaScript JPEG encoder and decoder for Node.js. It allows you to encode and decode JPEG images without relying on native libraries or external dependencies.

## Why should I use this library?

You may want to use `jpeg-js` in situations where you need to manipulate JPEG images programmatically in a Node.js environment. This library provides a lightweight and efficient way to encode, decode, and modify JPEG data directly in JavaScript, without the need for external libraries or dependencies.

## What are the parameters or arguments required?

The `jpeg-js` library exposes several methods for encoding and decoding JPEG data. The most commonly used methods are:

1. `encode(data, quality)`:
   - `data`: An object containing the raw pixel data and dimensions of the image to be encoded.
   - `quality` (optional): An integer value between 0 and 100 that specifies the quality level of the JPEG compression (higher values result in better quality but larger file sizes).

2. `decode(jpegData, [useTArray])`:
   - `jpegData`: A Buffer or Uint8Array containing the JPEG data to be decoded.
   - `useTArray` (optional): A boolean flag indicating whether to use a typed array for the decoded pixel data or not.

## Prerequisites

- Node.js installed on your system.
- Knowledge of JavaScript and familiarity with handling binary data.

## How do I use this library?

1. Install the `jpeg-js` library in your Node.js project:

```bash
npm install jpeg-js
```

2. Import the library in your JavaScript file:

```javascript
const jpeg = require('jpeg-js');
```

3. Use the `encode` and `decode` methods as needed:

```javascript
// Encoding an image
const rawImageData = { data, width, height }; // Replace with your image data
const encodedJpegData = jpeg.encode(rawImageData, 80); // Specify the quality level (0-100)

// Decoding a JPEG image
const jpegBuffer = ...; // Obtain the JPEG data (e.g., from a file or network request)
const decodedImage = jpeg.decode(jpegBuffer, true); // Decode the JPEG data, using typed arrays
```

The `encode` function returns a `Buffer` containing the encoded JPEG data, while the `decode` function returns an object with properties such as `data` (a typed array or buffer containing the decoded pixel data), `width`, `height`, and other metadata about the decoded image.

By using the `jpeg-js` library, you can easily integrate JPEG encoding and decoding capabilities into your Node.js applications, enabling you to process and manipulate image data programmatically without relying on external dependencies or native libraries.
  
  