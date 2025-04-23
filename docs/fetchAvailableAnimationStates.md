---
sidebar_position: 2
---

# fetchAvailableAnimationStates

## Brief Description

`fetchAvailableAnimationStates` is a function that retrieves a list of available animation states for character sprites. This function is part of the sprite generation module and provides developers with a predefined set of common animation states that can be used when creating character spritesheets.

## Usage

To use `fetchAvailableAnimationStates`, import it from the sprite module and call it as an asynchronous function.

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

## Notes and Considerations

- The list of available animation states is predefined and may be updated in future versions of the module.
- This function is useful when you want to provide users with a list of standard animation states to choose from when generating character spritesheets.
- You can use the returned states as input for the `generateCharacterSpritesheet` function's `states` option.
- The function is asynchronous to allow for potential future implementations that might fetch this data from an external source or configuration file.

## Related Functions

- `generateCharacterSpritesheet`: Uses the animation states to generate a complete character spritesheet.
- `fetchAvailableSpriteStyles`: Retrieves a list of available sprite styles that can be used in conjunction with the animation states.

Remember to check the documentation for these related functions to understand how they can be used together in your sprite generation workflow.