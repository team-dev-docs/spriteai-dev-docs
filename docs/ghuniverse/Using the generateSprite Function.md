

  # **generateSprite Function**

High Level

The `generateSprite` function is a powerful tool exported from our Node.js SDK. It allows you to create sprite images programmatically based on textual descriptions. You can access this function by importing it from the `sprite` object as shown below:

```javascript
import { sprite } from 'sprite';
```

## Why should I use this function?

The `generateSprite` function is ideal for developers who need to create dynamic sprite images for games, animations, or interactive applications. It simplifies the process of sprite creation by allowing you to generate images based on textual descriptions, saving time and effort in manual sprite design.

## What parameters or arguments are required?

The `generateSprite` function requires two parameters:

1. `description` (string): A textual description of the sprite you want to generate (e.g., "knight").
2. `options` (object): An object containing additional configuration options. Currently, it includes:
   - `iterations` (number): The number of sprite variations to generate.

## Prerequisites

To use the `generateSprite` function, ensure you have:

1. Installed the sprite SDK via npm
2. Proper authentication set up (if required by the SDK)
3. The `sharp` library installed for image processing

## How do I use this function?

Here's a step-by-step guide on how to use the `generateSprite` function:

1. Import the sprite object from the SDK:
   ```javascript
   import { sprite } from 'sprite';
   ```

2. Call the `generateSprite` function with a description and options:
   ```javascript
   const description = 'knight';
   const options = { iterations: 1 };
   
   const result = await sprite.generateSprite(description, options);
   ```

3. The function returns a Promise that resolves to an array of objects. Each object contains:
   - `messages`: An object with a `content` property containing frame information in JSON format.
   - `image`: A base64-encoded string representing the generated sprite image.

4. You can then process or display the generated sprite as needed. For example, to save the image:
   ```javascript
   const { image } = result[0];
   const buffer = Buffer.from(image.split(',')[1], 'base64');
   await sharp(buffer).toFile('generated_sprite.png');
   ```

The generated sprite will be a 1024x1024 pixel image, which you can further process or resize as needed for your specific application.

  