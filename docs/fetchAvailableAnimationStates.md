---
slug: /fetchAvailableAnimationStates
sidebar_position: 2
---

# fetchAvailableAnimationStates

## Brief Description
`fetchAvailableAnimationStates` is an asynchronous function that retrieves a list of available animation states for character sprites.

## Usage
To use `fetchAvailableAnimationStates`, import it from the sprite module and call it as an async function.

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

const states = await fetchAvailableAnimationStates();
```

## Parameters
This function does not take any parameters.

## Return Value
Returns a Promise that resolves to an array of strings, where each string represents an available animation state.

## Example

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';

async function getAnimationStates() {
  try {
    const states = await fetchAvailableAnimationStates();
    console.log('Available animation states:', states);
  } catch (error) {
    console.error('Error fetching animation states:', error);
  }
}

getAnimationStates();
```

## Available Animation States
The function currently returns the following animation states:

- 'idle'
- 'walk'
- 'run'
- 'attack'
- 'jump'
- 'fall'
- 'hurt'
- 'die'

## Notes or Considerations
- This function is useful for developers who want to programmatically access the list of available animation states for character sprites.
- The list of animation states is predefined and may be updated in future versions of the SDK.
- Consider using this function in conjunction with `generateCharacterSpritesheet` to ensure you're using valid animation states when generating sprite sheets.
- The function is asynchronous to allow for potential future implementations that might fetch this data from a remote source or perform more complex operations.

## Related Functions
- `generateCharacterSpritesheet`: Uses these animation states to generate character sprite sheets.
- `fetchAvailableSpriteStyles`: Retrieves available sprite styles, which can be used alongside animation states.