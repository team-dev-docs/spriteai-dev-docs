

  # **generateHouseAsset**

High Level

This is a function that is exported from our Node.js SDK that you install from NPM and import from the sprite object `sprite` like below:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use this function when you need to programmatically generate house assets for your game or application. It's particularly useful for creating procedurally generated content or when you need to dynamically create house sprites based on user input or game logic.

## What parameters or arguments are required?

The `generateHouseAsset` function requires two parameters:

1. `description` (string): A description of the house you want to generate.
2. `options` (object): An object containing additional options. Currently, it includes:
   - `iterations` (number): The number of assets to generate.

## Prerequisites

- Ensure you have installed the sprite package from NPM.
- Import the sprite object in your JavaScript/TypeScript file.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function createHouse() {
  const description = 'A cozy cottage with a red roof and white walls';
  const options = { iterations: 1 };
  
  try {
    const result = await sprite.generateHouseAsset(description, options);
    console.log('Generated house asset:', result);
    // Process the generated asset here
  } catch (error) {
    console.error('Error generating house asset:', error);
  }
}

createHouse();
```

The function returns a Promise that resolves to an array of generated assets. Each asset in the array is an object containing a `data` property, which holds the actual asset data (likely in a format suitable for rendering or further processing).

Note that the function is asynchronous, so you should use `await` when calling it or handle the returned Promise appropriately.

  