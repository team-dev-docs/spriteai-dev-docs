# Usage Guide for SpriteAI

Welcome to the SpriteAI Usage Guide. This document will provide you with detailed information on how to use the SpriteAI package effectively in your projects.

## Table of Contents

1. [Basic Usage](#basic-usage)
2. [Creating Sprites](#creating-sprites)
3. [Loading Sprites](#loading-sprites)
4. [Saving Sprites](#saving-sprites)
5. [Error Handling](#error-handling)
6. [Best Practices](#best-practices)

## Basic Usage

To start using SpriteAI in your project, first import the package and create a new instance:

```javascript
const spriteAI = require('spriteai');
const ai = new spriteAI.SpriteAI();
```

This instance will be used to access all the functionalities provided by SpriteAI.

## Creating Sprites

To generate a new sprite, use the `generateSprite` method:

```javascript
ai.generateSprite('player', 32, 32)
  .then(sprite => {
    console.log('Sprite successfully generated:', sprite);
  })
  .catch(error => {
    console.error('Sprite generation encountered an error:', error);
  });
```

The `generateSprite` method takes three parameters:
- `name`: A string representing the name of the sprite
- `width`: The width of the sprite in pixels
- `height`: The height of the sprite in pixels

This method returns a Promise that resolves with the generated sprite object.

## Loading Sprites

To load an existing sprite from a file, use the `loadSprite` method:

```javascript
ai.loadSprite('path/to/sprite.png')
  .then(sprite => {
    console.log('Sprite successfully loaded:', sprite);
  })
  .catch(error => {
    console.error('Sprite loading encountered an error:', error);
  });
```

The `loadSprite` method takes one parameter:
- `path`: A string representing the file path to the sprite image

This method returns a Promise that resolves with the loaded sprite object.

## Saving Sprites

To save a sprite to a file, use the `saveSprite` method:

```javascript
ai.saveSprite(sprite, 'path/to/save/sprite.png')
  .then(() => {
    console.log('Sprite saved successfully');
  })
  .catch(error => {
    console.error('Sprite saving encountered an error:', error);
  });
```

The `saveSprite` method takes two parameters:
- `sprite`: The sprite object to be saved
- `path`: A string representing the file path where the sprite should be saved

This method returns a Promise that resolves when the sprite is successfully saved.

## Error Handling

As shown in the examples above, it's important to use proper error handling when working with SpriteAI. All methods return Promises, so you can use `.catch()` to handle any errors that may occur during sprite operations.

## Best Practices

1. Always handle errors using `.catch()` or try/catch blocks with async/await syntax.
2. Use descriptive names for your sprites to easily identify them in your project.
3. When generating sprites, consider the dimensions carefully to ensure they fit well in your game or application.
4. Regularly save your work to prevent loss of progress.
5. When loading sprites, ensure the file paths are correct and the files exist.

For more advanced usage and a complete list of available methods, please refer to the API Reference documentation.

Happy sprite creating with SpriteAI!