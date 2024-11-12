

  # **generateHouseAsset**

High Level

This is a function that is exported from our Node.js SDK. You can install it from NPM and import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to programmatically create house asset images based on a given description. This is particularly useful when you need to generate multiple house assets for games, simulations, or any application that requires dynamic house imagery.

## What parameters or arguments are required?

The function requires two parameters:

1. `description`: A string that describes the house you want to generate.
2. `options`: An object that contains additional configuration. Currently, it includes:
   - `iterations`: The number of assets to generate (default is 1).

## Prerequisites

- You must have the Sprite SDK installed in your project.
- Ensure you have the necessary permissions and API keys set up to use the Sprite services.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function createHouse() {
  const description = 'A cozy cottage with a red roof and white walls';
  const options = { iterations: 1 };

  try {
    const result = await sprite.generateHouseAsset(description, options);
    console.log('Generated house asset:', result[0].data);
  } catch (error) {
    console.error('Error generating house asset:', error);
  }
}

createHouse();
```

The function returns a promise that resolves to an array of asset objects. Each asset object contains a `data` property with the generated image data.

Note that the function is asynchronous, so you should use `await` or `.then()` to handle the result.

You can adjust the `iterations` option to generate multiple house assets in a single call. The function will return an array with the specified number of asset objects.

  