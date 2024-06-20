
  
  # **PngJS**

High Level

PngJS is a PNG (Portable Network Graphics) image codec for Node.js that supports synchronous and asynchronous encoding and decoding of PNG images. It is a pure JavaScript implementation of the PNG format, without any native dependencies.

## Why should I use this library?

PngJS is a lightweight and efficient library for working with PNG images in Node.js applications. It provides a simple and straightforward API for encoding and decoding PNG images, making it easy to integrate into your project. Additionally, since it is a pure JavaScript implementation, it does not require any native dependencies, making it more portable and easier to install and use across different platforms.

## Prerequisites

Before using PngJS, make sure you have Node.js installed on your system. You can install PngJS using npm (Node Package Manager) by running the following command:

```
npm install pngjs
```

## How do I use this library?

To use PngJS in your Node.js application, you can import or require it like any other module.

```javascript
const PNG = require('pngjs').PNG;
```

### Encoding a PNG image

To encode an image as a PNG, you can create a new instance of the `PNG` class and pass in the width, height, and an optional set of options. Then, you can set the pixel data and call the `pack()` method to generate the PNG image data.

```javascript
const fs = require('fs');
const PNG = require('pngjs').PNG;

const png = new PNG({
  width: 100,
  height: 100,
  filterType: 4
});

// Set pixel data (assuming a 100x100 image with a red background)
const data = new Uint8Array(100 * 100 * 4);
for (let i = 0; i < data.length; i += 4) {
  data[i] = 255; // Red
  data[i + 1] = 0; // Green
  data[i + 2] = 0; // Blue
  data[i + 3] = 255; // Alpha
}
png.data = data;

// Generate PNG image data
const buffers = [];
png.pack().subscribe(
  (buffer) => buffers.push(buffer),
  (err) => console.error(err),
  () => {
    const imageData = Buffer.concat(buffers);
    fs.writeFileSync('output.png', imageData);
  }
);
```

### Decoding a PNG image

To decode a PNG image, you can create a new instance of the `PNG` class and pass in the image data. Then, you can subscribe to the `parsed` event to access the decoded pixel data.

```javascript
const fs = require('fs');
const PNG = require('pngjs').PNG;

const imageData = fs.readFileSync('input.png');

const png = new PNG();
png.parse(imageData, (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(`Width: ${data.width}`);
  console.log(`Height: ${data.height}`);
  console.log(`Pixel data: ${data.data}`);
});
```

By following these examples and the documentation provided by the PngJS library, you can easily integrate PNG encoding and decoding functionality into your Node.js applications.
  
  