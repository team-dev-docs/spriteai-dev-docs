# API Reference

This API reference provides detailed information about the classes, methods, and functions available in the SpriteAI package.

## SpriteAI Class

The main class for interacting with the SpriteAI package.

### Constructor

```javascript
const spriteAI = require('spriteai');
const ai = new spriteAI.SpriteAI();
```

Creates a new instance of the SpriteAI class.

### Methods

#### generateSprite(name, width, height)

Generates a new sprite with the specified name, width, and height.

**Parameters:**
- `name` (string): The name of the sprite.
- `width` (number): The width of the sprite in pixels.
- `height` (number): The height of the sprite in pixels.

**Returns:**
- A Promise that resolves with the generated sprite object.

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

#### loadSprite(path)

Loads an existing sprite from the specified file path.

**Parameters:**
- `path` (string): The file path of the sprite to load.

**Returns:**
- A Promise that resolves with the loaded sprite object.

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

#### saveSprite(sprite, path)

Saves a sprite to the specified file path.

**Parameters:**
- `sprite` (object): The sprite object to save.
- `path` (string): The file path where the sprite should be saved.

**Returns:**
- A Promise that resolves when the sprite is successfully saved.

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

## Error Handling

All methods in the SpriteAI class return Promises. It's recommended to use try-catch blocks or .catch() methods to handle potential errors.

## Advanced Usage

For more advanced usage scenarios and additional features, please refer to the main documentation and usage guide.

