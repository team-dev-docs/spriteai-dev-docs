# API Reference

This page provides a comprehensive overview of the SpriteAI API, detailing all available methods, their parameters, and return values.

## SpriteAI Class

The main class for interacting with the SpriteAI library.

### Constructor

```javascript
const spriteAI = require('spriteai');
const ai = new spriteAI.SpriteAI();
```

Creates a new instance of the SpriteAI class.

## Methods

### generateSprite(name, width, height)

Generates a new sprite with the specified dimensions.

**Parameters:**
- `name` (string): The name of the sprite.
- `width` (number): The width of the sprite in pixels.
- `height` (number): The height of the sprite in pixels.

**Returns:**
- Promise: A promise that resolves with the generated sprite object.

**Example:**
```javascript
ai.generateSprite('player', 32, 32)
  .then(sprite => {
    console.log('Sprite successfully generated:', sprite);
  })
  .catch(error => {
    console.error('Sprite generation encountered an error:', error);
  });
```

### loadSprite(path)

Loads an existing sprite from a file.

**Parameters:**
- `path` (string): The file path to the sprite image.

**Returns:**
- Promise: A promise that resolves with the loaded sprite object.

**Example:**
```javascript
ai.loadSprite('path/to/sprite.png')
  .then(sprite => {
    console.log('Sprite successfully loaded:', sprite);
  })
  .catch(error => {
    console.error('Sprite loading encountered an error:', error);
  });
```

### saveSprite(sprite, path)

Saves a sprite to a file.

**Parameters:**
- `sprite` (Sprite): The sprite object to save.
- `path` (string): The file path where the sprite should be saved.

**Returns:**
- Promise: A promise that resolves when the sprite is successfully saved.

**Example:**
```javascript
ai.saveSprite(sprite, 'path/to/save/sprite.png')
  .then(() => {
    console.log('Sprite saved successfully');
  })
  .catch(error => {
    console.error('Sprite saving encountered an error:', error);
  });
```

## Sprite Object

The Sprite object represents a single sprite in SpriteAI. While the exact properties and methods of this object are not specified in the provided documentation, it is the return value of `generateSprite()` and `loadSprite()` methods, and is used as an input for the `saveSprite()` method.

For more detailed information about the Sprite object and its capabilities, please refer to the full API documentation or contact the SpriteAI support team.

## Error Handling

All methods in the SpriteAI API return Promises, which allows for proper error handling using `.catch()` or `try/catch` with async/await syntax. Always implement error handling in your code to gracefully manage potential issues during sprite operations.

## Advanced Usage

For information on advanced techniques such as creating complex sprite animations and applying transformations, please refer to the full API documentation and explore our advanced guides and tutorials.

Remember to check for updates regularly, as new features and improvements may be added to the SpriteAI API over time.