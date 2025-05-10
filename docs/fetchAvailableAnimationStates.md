# fetchAvailableAnimationStates

## Overview

The `fetchAvailableAnimationStates` function is part of the SpriteAI module and is used to retrieve a list of available animation states for character sprites. This function provides developers with a consistent set of animation states that can be used when generating character spritesheets.

## Usage

To use the `fetchAvailableAnimationStates` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

async function getAnimationStates() {
  const states = await fetchAvailableAnimationStates();
  console.log(states);
}
```

## Parameters

This function does not take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings, where each string represents an available animation state. The current set of animation states includes:

- 'idle'
- 'walk'
- 'run'
- 'attack'
- 'jump'
- 'fall'
- 'hurt'
- 'die'

## Example

```javascript
import { fetchAvailableAnimationStates } from 'spriteAI';

async function displayAvailableStates() {
  try {
    const states = await fetchAvailableAnimationStates();
    console.log('Available animation states:', states);
    // Use the states in your application logic
    states.forEach(state => {
      console.log(`Preparing ${state} animation...`);
    });
  } catch (error) {
    console.error('Error fetching animation states:', error);
  }
}

displayAvailableStates();
```

## Notes

- The list of available animation states is predefined and may be updated in future versions of the SpriteAI module.
- This function is useful for ensuring consistency when working with the `generateCharacterSpritesheet` function, as it provides the standard set of animation states that can be used.
- While the function is asynchronous, it currently returns a static list. This design allows for potential future expansions, such as fetching the list from a remote server or database.