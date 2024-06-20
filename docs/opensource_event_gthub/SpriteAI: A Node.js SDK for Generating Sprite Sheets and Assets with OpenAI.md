
  
  # **SpriteAI Documentation**

## High Level

SpriteAI is a Node.js SDK that allows you to generate sprite sheets and assets for your Phaser.js games using OpenAI's models. It provides two main methods: `generateSprite` and `generateHouseAsset`.

To use SpriteAI, you need to install it from NPM and import the `sprite` object like this:

```
import { sprite } from 'spriteai'
```

## Why should I use this function?

The `generateSprite` method is designed to create sprite sheets for your Phaser.js game characters. It generates a 1024x1024 image with 6 frames arranged in a 2x3 grid, suitable for walking animations. The generated sprite sheet follows specific instructions, such as having a Super Nintendo graphics style, a white background, and no extra items or text.

The `generateHouseAsset` method allows you to generate 2D assets that can be used in your Phaser.js game. It takes a description of the asset you want to generate and creates a 1024x1024 image based on that description.

## What are the required parameters or arguments?

Both methods require a `description` parameter, which is a string describing the character or asset you want to generate.

The `generateSprite` method also accepts an optional `options` object, which can have the following properties:

- `iterations` (number): The number of iterations (variations) of the sprite sheet you want to generate.
- `size` (string): The size of the generated image (e.g., `"1024x1024"`).
- `save` (boolean): If set to `true`, the generated image will be saved to the `assets` folder in your current working directory.

The `generateHouseAsset` method accepts an optional `options` object as well, with the following properties:

- `iterations` (number): The number of iterations (variations) of the asset you want to generate.
- `size` (string): The size of the generated image (e.g., `"1024x1024"`).

## Prerequisites

Before using SpriteAI, make sure you have the following:

1. Node.js installed on your system.
2. An OpenAI API key (you'll need to provide this key when creating a new instance of the `OpenAI` class).

## How do I use this function?

Here's an example of how to use the `generateSprite` method:

```javascript
import { sprite } from 'spriteai'

const description = 'a superhero'
const options = {
  iterations: 3, // Generate 3 variations
  size: '512x512', // Generate 512x512 images
  save: true // Save the generated images to the assets folder
}

const iterations = await sprite.generateSprite(description, options)

// iterations will be an array of objects, each containing the generated image data and frame dimensions
```

And here's an example of using the `generateHouseAsset` method:

```javascript
import { sprite } from 'spriteai'

const description = 'a haunted house'
const options = {
  iterations: 2 // Generate 2 variations
}

const assets = await sprite.generateHouseAsset(description, options)

// assets will be an array of generated asset images (if iterations is provided) or a single image (if no iterations)
```

The main purpose of using these functions is to leverage OpenAI's powerful models to generate high-quality sprite sheets and assets for your Phaser.js games, without the need for manual drawing or image editing. This can save you significant time and effort, especially when working on complex game projects.
  
  