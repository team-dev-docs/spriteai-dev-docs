# Generate Robot Sprites

The `generateRobot` function is a convenient method for creating robot character spritesheets using the SpriteAI library. This function allows you to quickly generate pixel-art robot sprites with various animation states.

## Usage

To use the `generateRobot` function, you can call it with optional parameters to customize the output. Here's a basic example:

```javascript
import { generateRobot } from 'spriteAI';

const robotSprites = await generateRobot();
```

## Function Signature

```javascript
generateRobot(options = {})
```

### Parameters

- `options` (optional): An object containing configuration options for the sprite generation.

### Default Options

If no options are provided, the function uses the following default settings:

```javascript
const defaultOptions = {
  states: ['idle', 'walk', 'run', 'attack', 'power-up'],
  style: 'pixel-art',
  framesPerState: 6
};
```

### Customizing Options

You can override the default options by passing an object with your desired settings:

```javascript
const customRobotSprites = await generateRobot({
  states: ['idle', 'walk', 'shoot'],
  framesPerState: 8,
  style: 'vector'
});
```

## Return Value

The `generateRobot` function returns a Promise that resolves to an object containing the generated spritesheet and metadata. The structure is the same as the return value of the `generateCharacterSpritesheet` function.

## Implementation Details

Internally, `generateRobot` uses the `generateCharacterSpritesheet` function with a predefined description and merged options:

```javascript
return generateCharacterSpritesheet('robot character with mechanical limbs and glowing eyes', mergedOptions);
```

## Example

Here's a complete example of how to use the `generateRobot` function and handle the result:

```javascript
import { generateRobot } from 'spriteAI';

async function createRobotSprites() {
  try {
    const robotSprites = await generateRobot({
      states: ['idle', 'walk', 'attack', 'power-up'],
      framesPerState: 8
    });

    console.log('Robot spritesheet URL:', robotSprites.spritesheet);
    console.log('Metadata:', robotSprites.metadata);

    // Use the spritesheet in your game or application
  } catch (error) {
    console.error('Error generating robot sprites:', error);
  }
}

createRobotSprites();
```

## Related Functions

- `generateNinja`: For creating ninja character spritesheets
- `generateSpaceman`: For creating astronaut character spritesheets
- `generateCharacterSpritesheet`: The base function for generating character spritesheets

For more detailed information on sprite generation options and advanced usage, please refer to the main `generateCharacterSpritesheet` documentation.