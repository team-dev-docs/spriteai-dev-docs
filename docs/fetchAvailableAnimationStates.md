---
title: fetchAvailableAnimationStates Documentation
description: >-
  Learn how to use the `fetchAvailableAnimationStates` function to retrieve the
  list of available animation states for sprite generation.
---

# fetchAvailableAnimationStates Documentation! 🔥🌶️

## Introduction

Hey there, game dev rockstar! 🎸 Ready to spice up your sprites with some sizzling animation states? The `fetchAvailableAnimationStates` function is your secret sauce, freshly added to our SDK to help you cook up some mouth-watering animations that'll make your players' taste buds tingle! 🌶️🔥

## Prerequisites 🔥

Before we turn up the heat, make sure you've got these ingredients in your developer kitchen:

- **🚀 A blazing-fast development environment** - We're talking supernova hot! No room for sluggish setups here.
- **⚡ The latest version of our SDK installed** - Fresh out of the oven, people! Don't serve your users stale code.
- **💪 Node.js powers activated** - Make sure you're running a version so recent, it can predict the future.
- **🧠 Basic JavaScript kung fu** - You should be able to roundhouse kick those async/await and promises like Bruce Lee.
- **🎮 Game development mindset** - Ready to bring characters to life so vividly, they might just jump out of the screen!

Pro tip: If you're missing any of these, put this recipe on hold and get your kitchen in order first. Your future self will high-five you for it! 🖐️🔥

## Usage

Time to add some flavor to your code! Here's how to sprinkle in that `fetchAvailableAnimationStates` magic:

### Importing the Function

```javascript
import { fetchAvailableAnimationStates } from './path/to/sprite/module';
```

### Calling the Function

No need for fancy ingredients here. Just call it straight up and watch the magic unfold:

```javascript
const animationStates = await fetchAvailableAnimationStates();
console.log(animationStates); // Prepare for a flavor explosion in your console!
```

### Example Output

Here's a taste of what you'll get - a smorgasbord of animation states to feast on:

```javascript
[
  'idle',        // For when your character's chillin'
  'walk',        // Strut that stuff!
  'run',         // Gotta go fast!
  'attack',      // Bring the pain!
  'jump',        // Get some air!
  'fall',        // What goes up...
  'hurt',        // Ouch, that's gotta sting!
  'die'          // Game over, man. Game over.
]
```

## Using with Sprite Generation 🎮🔥

**Time to cook up some serious sprite magic!** 🧙‍♂️✨ Now that you've got a buffet of animation states, let's turn that plain old static character into a dancing, prancing, action-packed superstar!

### Example: Generating a Character Spritesheet

**Prepare to have your mind blown into orbit!** 🚀 Check out how we mix `fetchAvailableAnimationStates` and `generateCharacterSpritesheet` to create pure gaming gold:

```javascript
import { fetchAvailableAnimationStates, generateCharacterSpritesheet } from './path/to/sprite/module';

// 🌶️ This function is hotter than a ghost pepper!
async function generateSpriteWithAnimationState() {
  // First, let's harvest those juicy animation states
  const animationStates = await fetchAvailableAnimationStates();
  const selectedState = animationStates[0]; // 'idle' - the calm before the storm! 😎

  // Now for the main event - sprite generation alchemy! 🧪
  const result = await generateCharacterSpritesheet("A pixelated robot with flames for hair", {
    states: [selectedState],
    framesPerState: 6,        // 6 frames of eye-popping awesomeness
    size: '1024x1024',        // Higher resolution than real life!
    style: 'pixel-art',       // Retro coolness that never goes out of style
    padding: 1,               // Perfectly spaced, like a well-plated dish
    direction: 'right'        // Ready to conquer the right side of the screen!
  });

  // BOOM! 💥 Your sprite masterpiece is served, piping hot!
  console.log(result);
}

// Light the fuse and stand back! 🧨
generateSpriteWithAnimationState();
```

**Pro Developer Tips for Maximum Spiciness:** 🌶️🔥
- Mix and match different animation states like a master chef for complex, mouth-watering character behaviors
- Experiment with frame counts like you're adjusting spice levels - more frames = smoother action that'll make your players' eyes water (in a good way)!
- Try on different art styles like you're at a fashion show - find that perfect look that'll make your game the talk of the town
- Use the padding wisely, or your sprites might end up in a messy food fight during gameplay

## Parameters

The `fetchAvailableAnimationStates` function is a no-fuss, no-muss kinda deal. It doesn't need any parameters to work its magic. Just call it and let it do its thing!

## Return Value

You'll get back an array of strings, each one a delicious animation state ready to be devoured by your game.

## Notes or Considerations

- This isn't a create-your-own-adventure deal. The animation states are predefined, featuring the greatest hits of game development.
- Handle that returned array with care in your app. Treat it like a fragile soufflé - one wrong move and it could all fall flat!

### Installation

Ready to add some SpriteAI spice to your project? Fire up that terminal and throw this bad boy in:

```bash
npm install spriteai
```

And just like that, you've added some serious flavor to your development setup! 🌶️😎

## Next Steps

- Hungry for more? Sink your teeth into the [generateCharacterSpritesheet documentation](/docs/generateCharacterSpritesheet) and learn how to whip up some seriously tasty sprite sheets.
- Craving variety? Check out the [fetchAvailableSpriteStyles documentation](/docs/fetchAvailableSpriteStyles) and discover a world of sprite flavors to tantalize your game's taste buds.

Now go forth and create some sprite magic that'll set the gaming world on fire! 🔥🎮✨
