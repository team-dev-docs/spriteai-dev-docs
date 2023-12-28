
  
   # **Tutorials/Creating a Sprite Sheet**

## What does this do?

This tutorial will show you how to use the `sprite` module to generate a sprite sheet of a character walking.

## Why should I use this?

Sprite sheets are a great way to optimize the performance of your game by reducing the number of draw calls that need to be made. By using a sprite sheet, you can draw multiple images at once, which can significantly improve the performance of your game.

## Prequsites

To complete this tutorial, you will need the following:

* A copy of the `sprite` module
* A text editor
* A basic understanding of JavaScript

## How to use this

To generate a sprite sheet, you will need to use the `generateSprite` function. This function takes two parameters:

* The name of the character you want to generate a sprite sheet for
* An object containing the following options:
    * `save`: A boolean value that determines whether or not to save the sprite sheet to a file
    * `width`: The width of the sprite sheet in pixels
    * `height`: The height of the sprite sheet in pixels
    * `frames`: The number of frames in the sprite sheet

The following example shows how to use the `generateSprite` function to generate a sprite sheet of a character walking:

```javascript
const { sprite } = require("./index.js");

const main = async function() {
    const result = await sprite.generateSprite("a robot samurai cat", {save: true})
    console.log('this is the finished result', result)
}

main()
```

This example will generate a sprite sheet of a character walking that is 500 pixels wide and 300 pixels high. The sprite sheet will contain 10 frames.

## Generating a 2D Asset of a House

To generate a 2D asset of a house, you will need to use the `generateHouseAsset` function. This function takes two parameters:

* The type of house you want to generate
* An object containing the following options:
    * `save`: A boolean value that determines whether or not to save the house asset to a file
    * `width`: The width of the house asset in pixels
    * `height`: The height of the house asset in pixels

The following example shows how to use the `generateHouseAsset` function to generate a 2D asset of a small cottage:

```javascript
const { sprite } = require("./index.js");

const main = async function() {
    const result = await sprite.generateHouseAsset("a small cottage", {save: true})
    console.log('this is the finished result', result)
}

main()
```

This example will generate a 2D asset of a small cottage that is 200 pixels wide and 150 pixels high.
  
  