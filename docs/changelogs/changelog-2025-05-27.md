# Changelog 2025-05-27: Spicing Up Your Sprite Game! 🌶️🎮

## 🚀 Introducing Character-Specific Sprite Generators

Hey there, pixel pushers and sprite slingers! We've got some hot new features that'll make your game characters sizzle like never before. Buckle up, because we're about to dive into the spicy world of ninja stealth, space exploration, and robotic rampage!

### 🥷 Ninja, Please!

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

Want to add a touch of stealth to your game? Our new `generateNinja` function has got you covered! With a sleek black outfit and mask, this ninja is ready to sneak, attack, and disappear into the shadows. The default animation states include the essential 'sneak' for those crucial stealth missions. Ninja, vanish!

### 👨‍🚀 Space Oddity

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

Houston, we have liftoff! The `generateSpaceman` function is here to take your game to infinity and beyond. Suit up your astronaut with a space suit and helmet, ready to explore the cosmos. And yes, we've included a 'float' state because, well, space! Major Tom would be proud.

### 🤖 Robots in Disguise

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

Beep boop, baby! The `generateRobot` function is here to mechanize your game world. With glowing eyes and mechanical limbs, this robot is ready to compute, crush, and conquer. We've even thrown in a 'power-up' state for when your bot needs that extra juice!

## 🌶️ Why It's Spicy

1. **Instant Character Variety**: With just a few lines of code, you can now generate fully-fledged character spritesheets for ninjas, spacemen, and robots. It's like having a character buffet at your fingertips!

2. **Customizable to the Core**: Each generator comes with sensible defaults, but you can easily spice things up by passing your own options. Want a ninja with 10 frames of sneaking? You got it!

3. **Pixel-Perfect by Default**: All characters come in delicious pixel-art style by default, perfect for that retro feel or modern pixel-art masterpiece.

4. **Animation-Ready**: With carefully chosen animation states for each character type, your sprites are ready to jump, float, or power-up right out of the box.

5. **Extensible Framework**: These new functions lay the groundwork for endless character types. Wizards, dragons, or disco dancers, anyone?

## 🔥 Bringing the Heat to Your Development

These new character generators are more than just convenient—they're game-changers (pun intended). By abstracting away the complexity of character creation, you can focus on what really matters: making your game awesome.

So go ahead, sprinkle some ninja stealth into your side-scroller, launch a space odyssey with your new astronaut, or initiate a robot uprising in your RPG. The pixel world is your oyster, and it's about to get a whole lot spicier!

Remember, with great power comes great responsibility. Use these sprites wisely, and may your games be ever engaging and your framerates high. Now go forth and pixelate!