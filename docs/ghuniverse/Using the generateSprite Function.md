

  # **generateSprite Function**

High Level

The `generateSprite` function is a part of our Node.js SDK, which you can install from NPM. You can import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite-ai';
```

## Why should I use this function?

The `generateSprite` function allows you to programmatically generate sprite images based on a given description. This is particularly useful for game developers, designers, or anyone who needs to create custom sprite assets dynamically. It leverages AI to interpret your description and produce a suitable sprite image.

## What parameters or arguments are required?

The `generateSprite` function requires two parameters:

1. `description` (string): A text description of the sprite you want to generate.
2. `options` (object): An object containing additional configuration options. Currently, it includes:
   - `iterations` (number): The number of sprite variations to generate.

## Prerequisites

To use this function, you need to:

1. Have Node.js installed in your environment.
2. Install the sprite-ai package from NPM.
3. Have a valid API key or authentication set up (refer to the SDK documentation for authentication details).

## How do I use this function?

Here's an example of how to use the `generateSprite` function:

```javascript
import { sprite } from 'sprite-ai';

async function createSprite() {
  const description = 'knight';
  const options = { iterations: 1 };

  try {
    const result = await sprite.generateSprite(description, options);
    console.log('Sprite generated:', result);
    // Process the generated sprite(s) as needed
  } catch (error) {
    console.error('Error generating sprite:', error);
  }
}

createSprite();
```

The function returns a promise that resolves to an array of objects. Each object in the array represents a generated sprite and contains:

- `messages`: An object with sprite metadata, including `frameWidth` and `frameHeight`.
- `image`: A base64-encoded string of the sprite image.

You can then use this data to display the sprite in your application or save it to a file.

Note: The generated sprite images are 1024x1024 pixels in size, as verified by the test case. You may need to resize or process these images further depending on your specific use case.

  