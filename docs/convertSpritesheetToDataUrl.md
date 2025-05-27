---
title: convertSpritesheetToDataUrl
description: A function to convert a spritesheet image file to a base64-encoded data URL.
---

# convertSpritesheetToDataUrl

## Introduction

The `convertSpritesheetToDataUrl` function is a utility that converts a spritesheet image file to a base64-encoded data URL. This is useful when you need to embed image data directly into your JavaScript code or when you want to send image data over the network without separate file transfers.

## Usage

To use the `convertSpritesheetToDataUrl` function, import it from the module where it's defined and call it with the path to your spritesheet image file.

```javascript
import { convertSpritesheetToDataUrl } from './path/to/module';

const dataUrl = await convertSpritesheetToDataUrl('path/to/your/spritesheet.png');
```

## Parameters

- `filePath` (string, required): The file path to the spritesheet image that you want to convert.

## Return Value

The function returns a Promise that resolves to a string containing the base64-encoded data URL of the image.

## Examples

### Basic Usage

```javascript
import { convertSpritesheetToDataUrl } from './path/to/module';

async function loadSpritesheet() {
  try {
    const dataUrl = await convertSpritesheetToDataUrl('./assets/character_spritesheet.png');
    console.log('Spritesheet data URL:', dataUrl);
    // Use the dataUrl in your application, e.g., set it as the src of an image element
    document.getElementById('spritesheet').src = dataUrl;
  } catch (error) {
    console.error('Error converting spritesheet:', error);
  }
}

loadSpritesheet();
```

## Implementation Details

The `convertSpritesheetToDataUrl` function uses Node.js built-in modules to read the file and convert it to a base64-encoded string. Here's a breakdown of how it works:

1. It uses the `fs.readFile` method to asynchronously read the contents of the specified file.
2. The file contents are converted to a base64 string using `Buffer.from(data).toString('base64')`.
3. The base64 string is then prepended with the appropriate data URL prefix for PNG images: `data:image/png;base64,`.

## Notes and Considerations

- This function is designed to work in a Node.js environment. It may not be suitable for browser-based JavaScript without modification.
- Large image files will result in long data URLs, which may impact performance if used excessively.
- Ensure that the file path provided to the function is correct and that the file exists, otherwise an error will be thrown.
- The function assumes that the input file is a PNG image. If you need to support other image formats, you'll need to modify the data URL prefix accordingly.
- Error handling is implemented using a Promise-based approach, so be sure to use try/catch when calling this function or handle the returned Promise appropriately.

## Related

- [generateSprite](./generateSprite.md): Function to generate sprite sheets using AI.
- [startServer](./startServer.md): Function to start a server that can serve the generated sprite sheets.