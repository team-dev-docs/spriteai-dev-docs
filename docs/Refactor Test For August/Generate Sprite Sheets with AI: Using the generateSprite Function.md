

  # **generate3DModel Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM and import from the model object as follows:

```javascript
import { model } from '3d-model-ai'
```

## Why should I use this function?

The `generate3DModel` function is a powerful tool for creating 3D models programmatically. It leverages AI to generate detailed 3D models for characters or objects, specifically optimized for use in 3D games and applications. This function is particularly useful when you need to:

1. Quickly prototype 3D character designs for games or applications.
2. Generate multiple variations of a 3D model.
3. Create 3D assets that are compatible with game engines like Unity or Unreal Engine.

## What parameters or arguments are required?

The `generate3DModel` function accepts two parameters:

1. `description` (required): A string describing the 3D model you want to generate.
2. `options` (optional): An object with the following properties:
   - `iterations`: Number of variations to generate (if not specified, generates a single 3D model).
   - `format`: Output format of the 3D model (e.g., "obj", "fbx", "gltf").
   - `save`: Boolean indicating whether to save the generated model to disk.

## Prerequisites

To use this function, you need to have:

1. Node.js installed on your system.
2. The 3d-model-ai package installed in your project.
3. An AI model generation API key set up in your environment variables.
4. The `three.js` library installed for 3D model processing.

## How do I use this function?

Here's a step-by-step guide on how to use the `generate3DModel` function:

1. Import the function into your project:

   ```javascript
   import { model } from '3d-model-ai'
   ```

2. Call the function with a description of the 3D model you want to generate:

   ```javascript
   const result = await model.generate3DModel("A futuristic robot character", {
     iterations: 2,
     format: "gltf",
     save: true
   });
   ```

3. The function will return either:
   - An array of objects (if iterations > 1), each containing:
     - `metadata`: JSON object with model information.
     - `modelData`: Binary data or URL to the generated 3D model.
   - A single object with the same structure (if iterations is not specified).

4. You can then use the returned information to load the 3D model in your game engine:

   ```javascript
   const loader = new THREE.GLTFLoader();
   loader.load(result.modelData, (gltf) => {
     scene.add(gltf.scene);
   });
   ```

The function handles the entire process of generating the 3D model, including:
- Creating the model using advanced AI algorithms
- Processing the model (optimizing polygons, UV mapping)
- Analyzing the model to ensure it meets specified requirements
- Optionally saving the model to disk in the specified format

This automated process saves significant time in 3D asset creation and ensures high-quality, consistent 3D models for your projects.

  