
  
  # **Generate House Asset**

**High Level**

The `generateHouseAsset` function is an asynchronous method that generates 2D assets representing a house or building that can be used in a Phaser JS game. It utilizes the DALL-E 3 model from OpenAI to generate the images based on the provided description and options.

```js
import { sprite } from 'sprite';

const options = { iterations: 3, size: '512x512' };
const description = 'a modern house with a red roof';

const houseAssets = await sprite.generateHouseAsset(description, options);
```

**Why should I use this function?**

This function simplifies the process of generating custom 2D assets for use in a Phaser JS game. Instead of manually creating or sourcing assets, you can leverage the power of DALL-E 3 to generate unique and tailored images based on your description. This can save time and effort, especially when working on game projects with specific visual requirements.

**What are the parameters or arguments required?**

1. `description` (string): A textual description of the house or building you want to generate. This description will guide the DALL-E 3 model in generating the asset.

2. `options` (object, optional):
   - `iterations` (number, optional): The number of iterations or variations of the asset to generate. If not provided, a single asset will be generated.
   - `size` (string, optional): The desired size of the generated asset in the format "widthxheight". If not provided, the default size of "1024x1024" will be used.

**Prerequisites**

- You must have the `sprite` package installed and imported in your project.
- You need to have an OpenAI API key set up and configured within the `sprite` package to authenticate with the DALL-E 3 model.

**How do I use this function?**

1. Import the `sprite` package in your project.
2. Provide a textual description of the house or building you want to generate as the first argument to the `generateHouseAsset` function.
3. Optionally, you can provide an `options` object as the second argument with the desired number of iterations and size for the generated assets.
4. Call the `generateHouseAsset` function with the provided arguments and await the result.
5. The function will return either a single asset or an array of assets (depending on the `iterations` option) representing the generated house or building.
6. You can then use these generated assets in your Phaser JS game, either by displaying them directly or using them as sprites or textures.

By using this function, you can easily generate custom 2D assets for your game without the need for manual creation or sourcing, saving time and effort in the development process.
  
  