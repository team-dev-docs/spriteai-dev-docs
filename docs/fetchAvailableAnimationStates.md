---
title: fetchAvailableAnimationStates Documentation
description: >-
  Learn how to use the `fetchAvailableAnimationStates` function to retrieve the
  list of available animation states for sprite generation.
---

# fetchAvailableAnimationStates Documentation!

## Introduction

The `fetchAvailableAnimationStates` function is a new addition to our SDK, designed to help developers retrieve the list of available animation states that can be used in conjunction with sprite generation functions. This documentation will guide you through the usage and implementation of this function.

## Prerequisites 🔥

Before you dive into the world of epic sprite animation states, make sure you've got your developer toolkit locked and loaded:

- **🚀 A blazing-fast development environment** - No potato computers allowed! Your setup should be smooth enough to handle our lightning-fast sprite generation.
- **⚡ The latest version of our SDK installed** - Don't be that developer stuck in the stone age with outdated packages. Fresh installs only!
- **💪 Node.js powers activated** - Make sure you're running a recent version that won't leave you hanging.
- **🧠 Basic JavaScript kung fu** - You should know your way around async/await and promises like a coding ninja.
- **🎮 Game development mindset** - Ready to bring characters to life with buttery-smooth animations?

Pro tip: If you're missing any of these, stop right here and get your setup dialed in first. Trust us, your future self will thank you when everything just works! 🎯

## Usage

To use `fetchAvailableAnimationStates`, import it from the sprite module and call the function.

### Importing the Function

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';
```

### Calling the Function

The `fetchAvailableAnimationStates` function does not require any parameters. Simply call it to retrieve the list of available animation states.

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates);
```

### Example Output

The function returns an array of available animation states. Here's an example of what the output might look like:

```javascript
[
  'idle',
  'walk',
  'run',
  'attack',
  'jump',
  'fall',
  'hurt',
  'die'
]
```

## Using with Sprite Generation

Once you have the list of available animation states, you can use them when generating sprites. Below is an example of how to use the `generateCharacterSpritesheet` function with a selected animation state.

### Example: Generating a Character Spritesheet

```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateSpriteWithAnimationState() {
  const animationStates = await fetchAvailableAnimationStates();
  const selectedState = animationStates[0]; // 'idle' in this example

  const result = await generateCharacterSpritesheet("A pixelated robot", {
    states: [selectedState],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    direction: 'right'
  });

  console.log(result);
}

generateSpriteWithAnimationState();
```

## Parameters

The `fetchAvailableAnimationStates` function does not accept any parameters.

## Return Value

Returns an array of strings, each representing an available animation state.

## Notes or Considerations

- The list of animation states is predefined and includes common states used in game development.
- Ensure you handle the returned array appropriately in your application to avoid errors.

## Next Steps

- Explore the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet) to learn more about generating sprite sheets.
- Check out the [fetchAvailableSpriteStyles documentation](/docs/fetchAvailableSpriteStyles) to learn about available sprite styles.
