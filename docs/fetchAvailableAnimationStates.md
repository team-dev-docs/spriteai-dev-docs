# fetchAvailableAnimationStates Documentation

## Brief Description
`fetchAvailableAnimationStates` is a utility function that retrieves all available animation states from a character spritesheet's metadata.

## Usage
To use `fetchAvailableAnimationStates`, import it from the spriteAI module and call it with the metadata returned from the `generateCharacterSpritesheet` function.

```javascript
import { fetchAvailableAnimationStates } from './path/to/spriteAI/module';

// After generating a character spritesheet
const spritesheet = await generateCharacterSpritesheet(description, options);
const animationStates = fetchAvailableAnimationStates(spritesheet.metadata);
```

## Parameters
- `metadata` (object, required): The metadata object returned from the `generateCharacterSpritesheet` function.

## Return Value
Returns an array of strings representing the available animation states in the spritesheet (e.g., `['idle', 'walk', 'run', 'attack']`).

## Examples

1. Fetch animation states from a generated spritesheet:
```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates } from './spriteAI';

async function createCharacter() {
  const spritesheet = await generateCharacterSpritesheet('fantasy warrior');
  const states = fetchAvailableAnimationStates(spritesheet.metadata);
  console.log('Available animation states:', states);
  // Output: Available animation states: ['idle', 'walk', 'run', 'attack']
}
```

2. Use animation states with a game engine:
```javascript
import { generateCharacterSpritesheet, fetchAvailableAnimationStates } from './spriteAI';

async function setupPlayerCharacter(gameEngine) {
  const spritesheet = await generateCharacterSpritesheet('robot character', {
    states: ['idle', 'walk', 'jump', 'shoot']
  });
  
  const states = fetchAvailableAnimationStates(spritesheet.metadata);
  
  // Set up animations in game engine
  states.forEach(state => {
    gameEngine.addAnimation('player', state, spritesheet.metadata.frameData[state]);
  });
}
```

## Related Functions
- [`generateCharacterSpritesheet`](./generateCharacterSpritesheet.md): Creates a character spritesheet with multiple animation states.
- [`generateLandscapeSprite`](./generateLandscapeSprite.md): Creates a landscape sprite for backgrounds.

## Notes or Considerations
- The returned animation states correspond directly to those used when generating the spritesheet.
- Default animation states are typically ['idle', 'walk', 'run', 'attack'] if not specified in the options when creating the spritesheet.
- This function is useful for programmatically accessing all available animations without having to manually track which states were generated.