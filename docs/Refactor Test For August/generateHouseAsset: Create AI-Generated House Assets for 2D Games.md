

  # **generateHouse3DModel Function**

High Level

This function is part of our Node.js SDK, which you can install from NPM. It's accessible through the `sprite3D` object:

```javascript
import { sprite3D } from 'sprite3D'
```

## Why should I use this function?

The `generateHouse3DModel` function allows you to create 3D models for houses or buildings using AI-generated designs. It's particularly useful for developers working with Three.js or other 3D game engines who need quick, customizable house models for their 3D environments.

## What parameters or arguments are required?

1. `description` (string): A description of the 3D house or building you want to generate.
2. `options` (object): 
   - `iterations` (number, optional): Number of 3D models to generate.
   - `format` (string, optional): 3D model format (default: "glTF").

## Prerequisites

- An API key with access to a 3D model generation service
- The `sprite3D` package installed in your project

## How do I use this function?

Here's an example of how to use the `generateHouse3DModel` function:

```javascript
import { sprite3D } from 'sprite3D'

async function createHouse3DModel() {
  const description = "modern two-story house with a red roof and large windows"
  const options = { iterations: 2, format: "OBJ" }

  try {
    const result = await sprite3D.generateHouse3DModel(description, options)
    console.log(result)
  } catch (error) {
    console.error("Error generating 3D house model:", error)
  }
}

createHouse3DModel()
```

This function utilizes advanced 3D modeling AI to generate 3D models based on your description. If you specify `iterations` in the options, it will create multiple 3D models. Otherwise, it generates a single model.

The function returns either an array of 3D model responses (if iterations > 1) or a single 3D model response object, which you can then import and use in your Three.js or other 3D game engine.

Remember to handle the asynchronous nature of this function using async/await or promises in your code. The resulting 3D models can be easily integrated into your 3D game environments, providing realistic and customizable house structures.

  