
  
  # **bmp-js**

High-Level

The `bmp-js` package is a pure JavaScript BMP encoder and decoder for Node.js. It allows you to read and write BMP image files without relying on native modules or external dependencies.

## Why should I use this package?

The `bmp-js` package is useful when you need to work with BMP image files in your Node.js application. It provides a convenient way to decode BMP files into raw pixel data and encode pixel data back into BMP files.

## What are the parameters or arguments required?

The `bmp-js` package exports two main functions:

1. `decode(data, options)`:
   - `data`: A Buffer or Uint8Array containing the BMP file data.
   - `options` (optional): An object with additional options for decoding.

2. `encode(data, options)`:
   - `data`: An object containing the pixel data and optional metadata.
   - `options` (optional): An object with additional options for encoding.

## Prerequisites

- Node.js installed on your system.
- Basic knowledge of working with binary data in JavaScript.

## How do I use this package?

Here's an example of how to use `bmp-js` to decode a BMP file:

```javascript
const fs = require('fs');
const bmp = require('bmp-js');

// Read the BMP file data
const bmpData = fs.readFileSync('path/to/image.bmp');

// Decode the BMP file
const decoded = bmp.decode(bmpData);

// Access the decoded pixel data
console.log(decoded.data); // Uint8Array containing raw pixel data
console.log(decoded.width); // Width of the image
console.log(decoded.height); // Height of the image
```

And here's an example of how to encode pixel data into a BMP file:

```javascript
const fs = require('fs');
const bmp = require('bmp-js');

// Define the pixel data
const pixelData = new Uint8Array([
  255, 0, 0, 255, // Red pixel
  0, 255, 0, 255, // Green pixel
  0, 0, 255, 255, // Blue pixel
  // ... more pixel data
]);

// Encode the pixel data
const encoded = bmp.encode({
  data: pixelData,
  width: 2, // Width of the image
  height: 2, // Height of the image
});

// Write the encoded BMP data to a file
fs.writeFileSync('path/to/output.bmp', encoded.data);
```

The `bmp-js` package provides a straightforward way to work with BMP image files in Node.js, allowing you to read and write BMP data programmatically.
  
  