---
title: fetchAvailableAnimationStates Documentation
description: >-
  Learn how to use the `fetchAvailableAnimationStates` function to retrieve the
  list of available animation states for sprite generation.
---

# 🎮 fetchAvailableAnimationStates Documentation

## 🚀 Introduction

The `fetchAvailableAnimationStates` function is a **game-changing** addition to our SDK! 🔥 This powerhouse function helps developers retrieve the complete arsenal of available animation states that can be used to create **epic** sprite animations. Whether you're building the next indie hit or a AAA masterpiece, this function is your gateway to animation awesomeness!

## 🛠 Prerequisites

Before you dive into the magic, make sure you've got:

- A **blazing-fast** development environment set up 💻
- The **latest and greatest** version of our SDK installed 📦
- A burning desire to create amazing animations! 🔥

## 🎯 Usage

Ready to unlock the power? Let's get you started with `fetchAvailableAnimationStates`!

### 📥 Importing the Function

```javascript
// Import the animation state fetcher of champions!
import { fetchAvailableAnimationStates } from './path/to/sprite/module';
```

### 🎬 Calling the Function

This beauty doesn't need any parameters - it's **that** easy! Just call it and watch the magic happen:

```javascript
// Fetch all the spicy animation states! 🌶️
const animationStates = await fetchAvailableAnimationStates();
console.log('🎉 Available animation states:', animationStates);
```

### 💎 Example Output

Behold! The function returns an **incredible** array of animation states that'll make your sprites come alive:

```javascript
[
  'idle',      // 😴 Chillin' like a villain
  'walk',      // 🚶 Casual stroll mode
  'run',       // 🏃 Gotta go fast!
  'attack',    // ⚔️ Time for battle!
  'jump',      // 🦘 Defying gravity
  'fall',      // 🍂 What goes up...
  'hurt',      // 😵 Ouch, that stings!
  'die'        // 💀 Game over, man!
]
```

## 🎨 Using with Sprite Generation

Now here's where things get **really** exciting! Once you've got your hands on those sweet animation states, you can use them to create **mind-blowing** sprite sheets. Check out this **spicy** example:

### 🔥 Example: Generating a Character Spritesheet

```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './path/to/sprite/module';

// This function is pure fire! 🔥
async function generateSpriteWithAnimationState() {
  // Get all the juicy animation states
  const animationStates = await fetchAvailableAnimationStates();
  const selectedState = animationStates[0]; // Starting with 'idle' - classic choice! 😎

  // Generate that sweet, sweet spritesheet
  const result = await generateCharacterSpritesheet("A pixelated robot warrior", {
    states: [selectedState],
    framesPerState: 6,        // 6 frames of pure animation gold
    size: '1024x1024',        // Go big or go home!
    style: 'pixel-art',       // Retro vibes ✨
    padding: 1,
    direction: 'right'        // Always moving forward 💪
  });

  console.log('🎊 Spritesheet generated successfully!', result);
}

// Execute the magic!
generateSpriteWithAnimationState();
```

## 📝 Parameters

Here's the beautiful simplicity: The `fetchAvailableAnimationStates` function is **parameter-free**! No complex configurations, no headaches - just pure, unadulterated functionality! 🎉

## 🎁 Return Value

Returns a **spectacular** array of strings, each one representing an available animation state that's ready to bring your sprites to life! Each string is a key to unlocking amazing animations.

## 🧠 Notes or Considerations

- The animation states are **carefully curated** and include the most common states used in modern game development 🎮
- These states are **battle-tested** and ready for production use
- Always handle the returned array like the precious treasure it is - check for empty arrays and handle gracefully! 🛡️
- Pro tip: Use these states strategically to create fluid, engaging character animations that'll keep players hooked! 🎯

## 🚀 Next Steps

Ready to take your sprite game to the **next level**? Check out these **amazing** resources:

- 🎨 Explore the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet) to master the art of sprite sheet creation
- 🎭 Dive into the [fetchAvailableSpriteStyles documentation](/docs/fetchAvailableSpriteStyles) to discover incredible sprite styles that'll make your game pop!
- 💡 **Pro tip**: Combine multiple animation states for complex character behaviors that'll blow your players' minds!

Now go forth and create some **absolutely legendary** sprites! 🌟
