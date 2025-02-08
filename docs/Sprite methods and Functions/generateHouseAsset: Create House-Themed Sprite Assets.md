

  # **generateHouseAsset Function**

High Level

This function is part of the Sprite AI SDK, which you can install from NPM and import from the `sprite` object like this:

```javascript
import { sprite } from 'sprite-ai'
```

## Why should I use this function?

Use `generateHouseAsset` when you need to programmatically create house-themed sprite assets for your game or application. It's particularly useful for generating unique, AI-powered house designs based on textual descriptions.

## What parameters or arguments are required?

The `generateHouseAsset` function requires two parameters:

1. `description` (string): A textual description of the house you want to generate.
2. `options` (object): An object containing additional configuration options. Currently, it includes:
   - `iterations` (number): The number of house assets to generate.

## Prerequisites

- Node.js environment
- Sprite AI SDK installed in your project

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite-ai'

async function createHouseSprite() {
  const description = 'A cozy two-story cottage with a red roof';
  const options = { iterations: 1 };

  try {
    const result = await sprite.generateHouseAsset(description, options);
    console.log('Generated house asset:', result[0].data);
  } catch (error) {
    console.error('Error generating house asset:', error);
  }
}

createHouseSprite();
```

This function returns a Promise that resolves to an array of generated assets. Each asset in the array has a `data` property containing the actual sprite data. The length of the array corresponds to the number of iterations specified in the options.

Note that the function is asynchronous, so you should use `await` or `.then()` to handle the results.

  