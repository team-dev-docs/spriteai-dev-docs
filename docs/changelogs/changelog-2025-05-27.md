# Changelog 2025-05-27: Spicing Up SpriteAI with Ninja, Spaceman, and Robot Characters!

## 🔥 Hot New Features

Get ready to level up your game development with these sizzling new additions to SpriteAI!

### 1. Ninja Stealth Mode Activated 🥷

```javascript
export const generateNinja = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'sneak'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('ninja character with black outfit and mask', mergedOptions);
};
```

Slice through your development time with our new `generateNinja` function! This shadowy warrior comes equipped with a stealthy 'sneak' state, perfect for those covert missions in your game.

### 2. Blast Off with Spaceman 🚀

```javascript
export const generateSpaceman = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'float'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('astronaut character with space suit and helmet', mergedOptions);
};
```

Take your games to the final frontier with our new `generateSpaceman` function! This cosmic crusader comes with a unique 'float' state, perfect for zero-gravity adventures.

### 3. Robot Revolution 🤖

```javascript
export const generateRobot = async function(options = {}) {
  const defaultOptions = {
    states: ['idle', 'walk', 'run', 'attack', 'power-up'],
    style: 'pixel-art',
    framesPerState: 6
  };
  const mergedOptions = { ...defaultOptions, ...options };
  
  return generateCharacterSpritesheet('robot character with mechanical limbs and glowing eyes', mergedOptions);
};
```

Energize your game with our new `generateRobot` function! This mechanical marvel features a 'power-up' state, adding a surge of excitement to your gameplay.

## 🌶️ Spicy Details

All these new character generators come with some zesty features:

- **Customizable Options**: Tweak the default settings to your heart's content!
- **Pixel-Perfect Art**: All characters default to a crispy 'pixel-art' style.
- **Animation-Ready**: Each character comes with 6 frames per state, perfect for smooth animations.
- **Flexible Integration**: These functions build on our existing `generateCharacterSpritesheet` for seamless incorporation into your projects.

## 🚀 How to Use

Spice up your game development by importing these new functions:

```javascript
import { generateNinja, generateSpaceman, generateRobot } from 'spriteAI';

// Generate a ninja character
const ninjaSprite = await generateNinja();

// Create a spaceman with custom options
const spacemanSprite = await generateSpaceman({ framesPerState: 8 });

// Power up your game with a robot
const robotSprite = await generateRobot({ style: 'vector' });
```

## 🌶️ Closing Thoughts

This update adds some serious heat to your sprite generation toolkit. Whether you're creating a stealthy ninja game, a space adventure, or a robot uprising, SpriteAI has got you covered. Stay tuned for more spicy updates coming your way!

Remember, with great power comes great responsibility. Use these new characters wisely, and may your games be as hot as these new features! 🔥🎮