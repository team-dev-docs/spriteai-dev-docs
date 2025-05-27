# Changelog: May 27, 2025 - Spicing Up SpriteAI with New Character Generation Features!

## 🌶️ Hot New Features

### 1. Ninja Stealth Mode Activated!
We've snuck in a new `generateNinja()` function that'll have you throwing pixel shurikens in no time! This sneaky addition comes with:
- 5 stealthy states: idle, walk, run, attack, and sneak
- Default pixel-art style (because ninjas are old-school cool)
- 6 frames per state for smooth shadow-melting animations

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

### 2. Blast Off with Spaceman Sprites!
Houston, we have liftoff! The new `generateSpaceman()` function is ready for your cosmic adventures:
- 4 gravity-defying states: idle, walk, run, and float
- Pixel-perfect astronaut suits and helmets
- 6 frames per state for smooth lunar landings

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

### 3. Robots Roll Out!
Beep boop, baby! Our new `generateRobot()` function is here to mechanize your game:
- 5 electrifying states: idle, walk, run, attack, and power-up
- Shiny pixel-art style by default
- 6 frames per state for smooth servo movements

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

## 🌶️🌶️ Why It's Spicy

1. **Instant Character Variety**: With just a few lines of code, you can now generate ninjas, spacemen, and robots. It's like having a character buffet at your fingertips!

2. **Customization is King**: Each new function comes with default options, but you're not locked in. Want a 3D-style ninja or a hand-drawn astronaut? Just tweak the options!

3. **Consistency Across the Board**: All new functions use the battle-tested `generateCharacterSpritesheet()` under the hood, ensuring reliable and consistent results.

4. **Performance Boost**: By providing specific character types, we've optimized the prompts for faster and more accurate sprite generation.

## 🌶️🌶️🌶️ How to Spice Up Your Game

1. **Ninja Stealth Game**: Use `generateNinja()` to create a stealthy protagonist for your next sneaky adventure game.

2. **Space Exploration**: Combine `generateSpaceman()` with our existing environment generation to create an out-of-this-world space exploration game.

3. **Robot Uprising**: Build an army of diverse robots using `generateRobot()` with different options for a futuristic strategy game.

4. **Character Mashup**: Mix and match all three new character types in a genre-bending, dimension-hopping epic!

## 🧯 Cool Down Notes

- Remember, these new functions are built on top of our existing sprite generation system. They inherit all the power and flexibility of `generateCharacterSpritesheet()`.
- Default options are just suggestions. Feel free to experiment with different states, styles, and frame counts to find what works best for your game.
- As always, keep an eye on your API usage. These spicy new features are hot, but don't let them burn through your quota!

Get ready to spice up your games with these hot new character generation features! 🌶️🎮🔥