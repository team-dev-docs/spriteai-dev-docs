---
slug: /fetchAvailableAnimationStates
sidebar_position: 5
---

# fetchAvailableAnimationStates Documentation

## Brief Description
`fetchAvailableAnimationStates` is a utility function that returns a list of available animation states that can be used when generating character spritesheets. This function helps developers discover what animation options are supported by the sprite generation system.

## Usage
To use `fetchAvailableAnimationStates`, import it from the spriteAI module and call it to get the list of supported animation states.

```javascript
import { fetchAvailableAnimationStates } from './path/to/spriteAI';

const availableStates = await fetchAvailableAnimationStates();
```

## Parameters
This function takes no parameters.

## Return Value
Returns a Promise that resolves to an array of strings, where each string represents an available animation state that can be used with the `generateCharacterSpritesheet` function.

The current list of available animation states includes:
- `'idle'` - Character standing still
- `'walk'` - Character walking animation
- `'run'` - Character running animation
- `'attack'` - Character attacking animation
- `'jump'` - Character jumping animation
- `'fall'` - Character falling animation
- `'hurt'` - Character taking damage animation
- `'die'` - Character death animation

## Examples

### Basic Usage
```javascript
import { fetchAvailableAnimationStates } from './spriteAI';

const states = await fetchAvailableAnimationStates();
console.log('Available animation states:', states);
// Output: ['idle', 'walk', 'run', 'attack', 'jump', 'fall', 'hurt', 'die']
```

### Using with generateCharacterSpritesheet
```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './spriteAI';

// Get available states
const availableStates = await fetchAvailableAnimationStates();

// Use a subset of available states for sprite generation
const selectedStates = availableStates.slice(0, 4); // First 4 states
const spriteResult = await generateCharacterSpritesheet('warrior knight', {
  states: selectedStates,
  framesPerState: 6,
  style: 'pixel-art'
});
```

### Building a Dynamic UI
```javascript
import { fetchAvailableAnimationStates } from './spriteAI';

async function createAnimationSelector() {
  const states = await fetchAvailableAnimationStates();
  
  // Create checkboxes for each available state
  const checkboxes = states.map(state => `
    <label>
      <input type="checkbox" value="${state}" name="animations">
      ${state.charAt(0).toUpperCase() + state.slice(1)}
    </label>
  `).join('');
  
  document.getElementById('animation-selector').innerHTML = checkboxes;
}
```

## Notes or Considerations
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- The returned array represents the currently supported animation states. This list may be expanded in future versions of the SDK.
- Use this function in combination with `generateCharacterSpritesheet` to ensure you're only using valid animation state names.
- The animation states are returned in a consistent order, making it suitable for creating predictable UI elements.
- This function is useful for building dynamic interfaces where users can select which animations to include in their generated spritesheets.

## Related Functions
- [`generateCharacterSpritesheet`](/generateSprite) - Uses animation states to generate character spritesheets
- [`fetchAvailableSpriteStyles`](#) - Returns available art styles for sprite generation