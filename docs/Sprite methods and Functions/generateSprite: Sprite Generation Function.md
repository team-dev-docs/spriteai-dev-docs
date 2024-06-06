
  
  # **Sprite Generation Function**

High Level

This is a function `generateSprite` that is exported from a Node.js SDK. It allows you to generate sprite sheets for use in game development frameworks like Phaser.js. You can install the SDK from NPM and import the `sprite` object like this:

```javascript
import { sprite } from 'sprite'
```

## Why should I use this function?

The `generateSprite` function simplifies the process of creating sprite sheets for your game characters. It leverages the power of the OpenAI API and Dall-E 3 to generate custom sprite frames based on your description. This can save you time and effort compared to manually creating or finding suitable sprite sheets.

## What are the required parameters or arguments?

1. `description` (string): A textual description of the character you want to generate sprite frames for.
2. `options` (object, optional): An object containing additional options for the sprite generation process. It can include the following properties:
   - `iterations` (number): The number of iterations (separate sprite sheet generations) you want to perform.
   - `size` (string): The size of the generated image (e.g., "1024x1024").
   - `save` (boolean): Whether to save the generated image to the local file system or not.

## Prerequisites

To use this function, you need to have the following:

1. An OpenAI API key. You can obtain one by signing up for an account at [OpenAI](https://openai.com/).
2. Node.js and NPM (Node Package Manager) installed on your system.
3. The necessary dependencies installed, including `openai`, `axios`, and `sharp`.

## How do I use this function?

1. Import the `generateSprite` function from the SDK:

```javascript
import { generateSprite } from 'sprite'
```

2. Call the `generateSprite` function with the required `description` parameter and any additional `options` you want to specify:

```javascript
const spriteSheets = await generateSprite('a walking ninja character', { iterations: 3, size: '1024x1024', save: true });
```

In this example, the function will generate 3 separate sprite sheets (iterations) for a walking ninja character, with each image having a size of 1024x1024 pixels. The generated images will also be saved to the local file system in the `assets` directory.

3. The function will return an array of objects (if `iterations` is provided) or a single object (if `iterations` is not provided). Each object contains the following properties:
   - `messages`: The response from the OpenAI API describing the optimal frame width and frame height for the generated sprite sheet.
   - `image`: A data URL representing the generated sprite sheet image.

4. You can then use the generated sprite sheets and the recommended frame dimensions in your game development framework, such as Phaser.js.

The `generateSprite` function leverages the OpenAI API and Dall-E 3 to generate custom sprite frames based on your description. It provides a convenient way to create sprite sheets for your game characters without the need for manual creation or finding suitable pre-existing assets.
  
  