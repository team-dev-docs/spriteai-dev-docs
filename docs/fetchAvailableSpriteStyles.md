# fetchAvailableSpriteStyles

🌶️ Get ready to spice up your sprite generation with a sizzling array of styles! 🌶️

## What's Cooking?

The `fetchAvailableSpriteStyles` function is the secret ingredient in your SpriteAI recipe. It serves up a piping hot list of available sprite styles that you can use to add some flavor to your character sprites.

## How to Dish It Up

To use this spicy function, import it from the SpriteAI module and call it like you're ordering from a menu:

```javascript
import { fetchAvailableSpriteStyles } from './spriteAI';

async function getStylesWithKick() {
  const styles = await fetchAvailableSpriteStyles();
  console.log('Today's special styles:', styles);
}

getStylesWithKick();
```

## What's on the Menu?

This function returns a Promise that resolves to an array of strings, each representing a mouth-watering sprite style. The current flavor options are:

- 'pixel-art' (for that classic, crunchy texture)
- 'vector' (smooth and bold, like a well-blended sauce)
- '3d' (adding depth to your digital dish)
- 'hand-drawn' (for that home-cooked feel)
- 'anime' (East meets West in this fusion style)

## Spicy Example

Here's a recipe that combines `fetchAvailableSpriteStyles` with `generateCharacterSpritesheet` for a taste explosion:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

async function generateCharacterWithRandomSpice() {
  const styles = await fetchAvailableSpriteStyles();
  const randomStyle = styles[Math.floor(Math.random() * styles.length)];
  
  const character = await generateCharacterSpritesheet('A fire-breathing chef', {
    style: randomStyle,
    size: '1024x1024',
    save: true
  });
  
  console.log(`🔥 Generated a chef with ${randomStyle} heat! 🔥`, character);
}

generateCharacterWithRandomSpice();
```

## Chef's Notes

- Our menu of styles is carefully curated but may be expanded in future versions of the SpriteAI module. Keep your taste buds ready for new flavors!
- When using these styles in other recipes (like `generateCharacterSpritesheet`), make sure to use the exact spelling from `fetchAvailableSpriteStyles`. We don't want any mix-ups in the kitchen!
- This function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it. Good things come to those who wait!

Now go forth and add some spice to your sprites! 🌶️🎨✨