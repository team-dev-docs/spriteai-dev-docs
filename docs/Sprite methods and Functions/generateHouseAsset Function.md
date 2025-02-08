

  # **generateHouseAsset**

High Level

This is a function that is exported from our Node.js SDK. You can install it from NPM and import it from the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

Use `generateHouseAsset` when you need to programmatically create visual assets of houses. This function is particularly useful for:

- Generating house sprites for games or simulations
- Creating visual content for architectural or real estate applications
- Producing diverse house images for design projects or prototypes

## What parameters or arguments are required?

The `generateHouseAsset` function accepts two parameters:

1. `description` (string): A description of the house you want to generate.
2. `options` (object): An optional configuration object. Currently, it supports:
   - `iterations` (number): The number of house assets to generate.

## Prerequisites

Before using this function, ensure that:

1. You have installed the Sprite SDK in your project.
2. You have properly imported the `sprite` object in your code.
3. Your environment is set up to handle asynchronous operations, as this function returns a Promise.

## How do I use this function?

Here's a step-by-step guide to using `generateHouseAsset`:

1. Import the `sprite` object from the SDK:

   ```javascript
   import { sprite } from 'sprite'
   ```

2. Call the function with a description and options:

   ```javascript
   const description = 'A cozy cottage with a red roof';
   const options = { iterations: 1 };

   try {
     const result = await sprite.generateHouseAsset(description, options);
     console.log(result);
   } catch (error) {
     console.error('Error generating house asset:', error);
   }
   ```

3. The function returns a Promise that resolves to an array of asset objects. Each object in the array represents a generated house asset and contains a `data` property with the asset information.

4. You can then use the generated assets in your application as needed, such as displaying them or further processing the data.

Remember to handle potential errors, as the asset generation process may fail due to various reasons such as network issues or invalid inputs.

  