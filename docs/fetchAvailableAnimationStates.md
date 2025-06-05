---
title: fetchAvailableAnimationStates Documentation
description: >-
  Learn how to use the `fetchAvailableAnimationStates` function to retrieve the
  list of available animation states for sprite generation.
---

# 🎮 fetchAvailableAnimationStates Documentation

## 🔥 Introduction

The `fetchAvailableAnimationStates` function is a **game-changing** addition to our SDK, designed to supercharge your sprite generation workflow! This powerhouse function helps developers retrieve the complete arsenal of available animation states that can be used in conjunction with our sprite generation functions. Get ready to unleash some seriously **spicy** sprite animations! 🌶️

## 🚀 Prerequisites

Before you dive into this **epic** journey, ensure you have the following:

- A working development environment set up 💻
- The latest version of our SDK installed 📦
- Basic JavaScript knowledge (you got this!) 🧠
- A burning desire to create **amazing** sprites 🔥

## 🎯 Usage

To use `fetchAvailableAnimationStates`, import it from the sprite module and call the function. It's that **simple**!

### 📥 Importing the Function

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';
```

### 🎬 Calling the Function

The `fetchAvailableAnimationStates` function doesn't require any parameters - it's **zero-config awesome**! Simply call it to retrieve the list of available animation states.

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates);
```

### 🎨 Example Output

The function returns an array of available animation states. Check out this **sweet** output:

```javascript
[
  'idle',      // 😴 Chilling and waiting
  'walk',      // 🚶 Casual strolling
  'run',       // 🏃 Full speed ahead!
  'attack',    // ⚔️ Battle mode activated
  'jump',      // 🦘 Defying gravity
  'fall',      // 🍂 Coming back down
  'hurt',      // 😵 Ouch, that stings!
  'die'        // 💀 Game over, man!
]
```

## 🎮 Using with Sprite Generation

Once you have the list of available animation states, you can use them when generating sprites like a **total boss**! Below is an example of how to use the `generateCharacterSpritesheet` function with a selected animation state.

### 🔥 Example: Generating a Character Spritesheet

```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './path/to/sprite/module';

async function generateSpriteWithAnimationState() {
  // 🎯 Fetch all the spicy animation states
  const animationStates = await fetchAvailableAnimationStates();
  const selectedState = animationStates[0]; // 'idle' in this example - keeping it chill! 😎

  // 🚀 Generate that epic spritesheet!
  const result = await generateCharacterSpritesheet("A pixelated robot warrior", {
    states: [selectedState],
    framesPerState: 6,
    size: '1024x1024',
    style: 'pixel-art',
    padding: 1,
    direction: 'right'
  });

  console.log(result); // 🎉 Boom! Your sprite is ready!
}

generateSpriteWithAnimationState();
```

### 🌟 Pro Tip: Multiple Animation States

Why settle for one animation state when you can have them **all**? Here's how to create a **mega-sprite** with multiple states:

```javascript
async function generateEpicMultiStateSprite() {
  const animationStates = await fetchAvailableAnimationStates();
  
  // 🔥 Use the first 4 states for maximum awesomeness
  const selectedStates = animationStates.slice(0, 4);
  
  const result = await generateCharacterSpritesheet("A legendary ninja cat", {
    states: selectedStates, // ['idle', 'walk', 'run', 'attack']
    framesPerState: 8,
    size: '2048x2048', // Go big or go home! 🏠
    style: 'pixel-art',
    padding: 2,
    direction: 'right'
  });

  return result; // 🎊 Your epic sprite awaits!
}
```

## 📋 Parameters

The `fetchAvailableAnimationStates` function is **beautifully simple** - it doesn't accept any parameters! Just call it and watch the magic happen ✨

## 🎁 Return Value

Returns an array of strings, each representing an available animation state that's ready to bring your sprites to life!

## 💡 Pro Tips & Considerations

- 🎯 The list of animation states is carefully curated and includes the most **essential** states used in game development
- 🛡️ Always handle the returned array appropriately in your application to avoid errors
- 🚀 These states are optimized for maximum **visual impact** and gameplay versatility
- 🎨 Mix and match different states to create unique character behaviors
- ⚡ The function is **lightning-fast** and doesn't require any API calls!

## 🚀 Next Steps

Ready to take your sprite game to the **next level**? Check out these **spicy** resources:

- 🎮 Explore the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet) to learn more about generating **epic** sprite sheets
- 🎨 Check out the [fetchAvailableSpriteStyles documentation](/docs/fetchAvailableSpriteStyles) to discover **amazing** sprite styles
- 🔥 Dive into advanced sprite generation techniques and become a **sprite master**!

---

**Ready to create some absolutely legendary sprites?** 🌟 Let's get this party started! 🎉
