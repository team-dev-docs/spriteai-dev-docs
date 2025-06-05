---
title: fetchAvailableAnimationStates Documentation
description: >-
  Learn how to use the `fetchAvailableAnimationStates` function to retrieve the
  list of available animation states for sprite generation.
---

# 🎮 fetchAvailableAnimationStates Documentation

## 🚀 Introduction

The `fetchAvailableAnimationStates` function is your gateway to discovering all the incredible animation states available for sprite generation! This powerful function helps developers unlock the full potential of character animations by providing a comprehensive list of states that can breathe life into your sprites.

## 🔧 Prerequisites

Before diving into the animation magic, ensure you have:

- ✅ A working development environment set up
- ✅ The latest version of our SDK installed
- ✅ Basic knowledge of JavaScript and async/await patterns
- ✅ An adventurous spirit for creating amazing sprites! 🎨

## 💡 Usage

Using `fetchAvailableAnimationStates` is as easy as pie! Import it from the sprite module and let the animation possibilities unfold.

### 📦 Importing the Function

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';
```

### 🔥 Calling the Function

The `fetchAvailableAnimationStates` function is beautifully simple - no parameters needed! Just call it and watch the magic happen:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log('🎭 Available Animation States:', animationStates);
```

### ✨ Example Output

The function returns an array of animation states that'll make your sprites come alive! Here's what you can expect:

```javascript
[
  'idle',      // 😴 Peaceful standing
  'walk',      // 🚶 Casual stroll
  'run',       // 🏃 Full speed ahead!
  'attack',    // ⚔️ Battle ready
  'jump',      // 🦘 Defying gravity
  'fall',      // 🍂 Coming back down
  'hurt',      // 😵 Ouch moment
  'die'        // 💀 The final act
]
```

## 🎯 Using with Sprite Generation

Once you've got your animation states, it's time to create some spectacular sprites! Here's how to combine the power of `fetchAvailableAnimationStates` with sprite generation:

### 🤖 Example: Generating an Epic Character Spritesheet

```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './path/to/sprite/module';

async function createAwesomeSprite() {
  // 🎪 Get all available animation states
  const animationStates = await fetchAvailableAnimationStates();
  console.log('🎭 Animation arsenal loaded:', animationStates);
  
  // 🎯 Pick your favorite state (or go wild with multiple!)
  const epicState = animationStates[0]; // Starting with 'idle' - classic choice!

  // 🚀 Generate the most amazing sprite you've ever seen
  const result = await generateCharacterSpritesheet("A legendary pixelated robot warrior", {
    states: [epicState],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    direction: 'right'
  });

  console.log('🎨 Masterpiece created:', result);
  return result;
}

// 🔥 Fire it up!
createAwesomeSprite();
```

### 🌟 Pro Tips for Animation State Selection

```javascript
// 💪 Create a dynamic character with multiple states
async function createDynamicCharacter() {
  const states = await fetchAvailableAnimationStates();
  
  // 🔥 Filter for action-packed states
  const actionStates = states.filter(state => 
    ['run', 'attack', 'jump'].includes(state)
  );
  
  // 🎮 Generate an action hero!
  const actionHero = await generateCharacterSpritesheet("Ninja cat assassin", {
    states: actionStates,
    framesPerState: 8,
    style: 'pixel-art',
    direction: 'right'
  });
  
  return actionHero;
}
```

## 📋 Parameters

**Simple and Sweet:** The `fetchAvailableAnimationStates` function doesn't need any parameters - it's that user-friendly! 🎉

## 🎁 Return Value

Returns a **Promise** that resolves to an **array of strings**, each representing a powerful animation state ready to bring your sprites to life!

**Type:** `Promise<string[]>`

## 💎 Notes & Pro Considerations

- 🎯 **Predefined Excellence**: The animation states are carefully curated and include the most common states used in professional game development
- 🛡️ **Error Handling**: Always wrap your calls in try-catch blocks for robust applications
- 🚀 **Performance**: This function is lightweight and fast - perfect for real-time applications
- 🎨 **Creative Freedom**: Mix and match states to create unique character personalities!

### 🔒 Error Handling Example

```javascript
try {
  const states = await fetchAvailableAnimationStates();
  console.log('🎭 States loaded successfully:', states);
} catch (error) {
  console.error('😱 Oops! Something went wrong:', error);
  // Handle the error gracefully
}
```

## 🚀 Next Steps

Ready to take your sprite game to the next level? Check out these amazing resources:

- 🎯 Explore the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet) to master sprite sheet creation
- 🎨 Discover the [fetchAvailableSpriteStyles documentation](/docs/fetchAvailableSpriteStyles) to unlock incredible visual styles
- 🌟 Dive into [generateEnvironmentSprites](/docs/generateEnvironmentSprites) for world-building magic
- ⚡ Master [generateItemSprites](/docs/generateItemSprites) for epic loot creation

---

**Happy Sprite Creating! 🎮✨**
