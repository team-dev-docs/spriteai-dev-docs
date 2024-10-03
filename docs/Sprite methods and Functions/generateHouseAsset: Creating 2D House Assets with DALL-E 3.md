

  # **generateHouseModel Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the `sprite` object as follows:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateHouseModel` function allows you to create 3D models for use in Three.js or other 3D game engines, specifically depicting houses or building-like structures. It leverages advanced AI technology to generate these 3D assets based on your description, saving time and effort in asset creation for 3D game development.

## What parameters or arguments are required?

1. `description` (string): A description of the house or building you want to generate as a 3D model.
2. `options` (object): 
   - `iterations` (number, optional): The number of times to generate the 3D model.
   - `format` (string, optional): The file format of the generated 3D model (default: "glTF").

## Prerequisites

- An active API key with access to our 3D model generation service.
- The `modelGeneratorObject` must be properly configured with your API credentials.

## How do I use this function?

Here's an example of how to use the `generateHouseModel` function:

```javascript
const houseDescription = "futuristic skyscraper with glass facades and flying cars docking stations";
const options = { iterations: 2, format: "FBX" };

try {
  const generatedModels = await sprite.generateHouseModel(houseDescription, options);
  console.log("Generated 3D models:", generatedModels);
} catch (error) {
  console.error("Error generating 3D house model:", error);
}
```

This function will generate the specified number of iterations of the 3D house model based on your description. If no `iterations` are specified, it will generate a single model. The function returns an array of responses from the 3D model generation API if multiple iterations are requested, or a single response object for a single generation.

Each response object contains information about the generated 3D model, including its download URL and metadata, which you can use to import and manipulate the asset in your 3D game engine or application.

Remember to handle the asynchronous nature of this function using `async/await` or promises in your implementation. Also, note that generating 3D models may take longer than 2D assets due to the complexity of the task.

  