

  # **generateHouseAsset Function**

High Level

This is an asynchronous function that is exported from our Node.js SDK. You can install it from NPM and import it from the sprite object `sprite` like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseAsset` function allows you to create 3D models for use in modern game engines. It leverages the DALL-E 3 model to generate detailed 3D assets based on your descriptions, making it easy to quickly produce custom game assets without the need for manual 3D modeling.

## What parameters or arguments are required?

The function takes two parameters:

1. `description` (string): A description of the 3D house model you want to generate.
2. `options` (object): An optional configuration object with the following properties:
   - `iterations` (number): The number of 3D models to generate.
   - `polygonCount` (string): The level of detail for the 3D model. Options include "low", "medium", and "high".

## Prerequisites

- You must have the Sprite SDK installed in your project.
- An OpenAI API key is required, as this function uses the DALL-E 3 model.

## How do I use this function?

Here's an example of how to use the `generateHouseAsset` function:

```javascript
import { sprite } from 'sprite'

async function create3DGameAsset() {
  const description = "futuristic glass and steel skyscraper with floating platforms"
  const options = {
    iterations: 2,
    polygonCount: "medium"
  }

  try {
    const assets = await sprite.generateHouseAsset(description, options)
    console.log(`Generated ${assets.length} 3D house models`)
    // Process the generated 3D models here
  } catch (error) {
    console.error("Error generating 3D house model:", error)
  }
}

create3DGameAsset()
```

This function is particularly useful when you need to quickly generate multiple variations of a 3D game asset. By specifying the `iterations` option, you can create several versions of the same 3D model in a single call, allowing you to choose the best one for your game.

The function returns an array of responses from the DALL-E 3 API, each containing the generated 3D model data. If no `iterations` are specified, it returns a single response object.

The `polygonCount` option allows you to control the level of detail in your 3D models, balancing between visual fidelity and performance requirements for your game.

Remember to handle the asynchronous nature of this function using async/await or promises in your implementation. The generated 3D models can be easily imported into popular game engines like Unity or Unreal Engine for further customization and integration into your game world.

  