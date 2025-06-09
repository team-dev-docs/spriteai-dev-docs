---
title: fetchAvailableSpriteStyles
description: Learn how to retrieve available sprite styles using the fetchAvailableSpriteStyles function.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the Dev-Docs sprite generation toolkit. It allows developers to retrieve a list of available sprite styles that can be used when generating character or environment sprites. This function is particularly useful when you want to provide users with style options or validate input before generating sprites.

## Usage

To use the `fetchAvailableSpriteStyles` function, you need to import it from the sprite module and call it asynchronously.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
```

## Parameters

The `fetchAvailableSpriteStyles` function does not take any parameters.

## Return Value

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a more detailed example of how you might use the `fetchAvailableSpriteStyles` function in a real-world scenario:

```javascript
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './path/to/sprite/module';

async function createSpriteWithStyle() {
  try {
    // Fetch available styles
    const availableStyles = await fetchAvailableSpriteStyles();
    
    // Choose a random style
    const randomStyle = availableStyles[Math.floor(Math.random() * availableStyles.length)];
    
    // Generate a character spritesheet with the chosen style
    const spritesheet = await generateCharacterSpritesheet("A heroic knight", {
      style: randomStyle,
      size: "512x512"
    });
    
    console.log(`Generated spritesheet in ${randomStyle} style:`, spritesheet);
  } catch (error) {
    console.error("Error fetching styles or generating spritesheet:", error);
  }
}

createSpriteWithStyle();
```

## Notes and Considerations

- The `fetchAvailableSpriteStyles` function is asynchronous, so remember to use `await` or `.then()` when calling it.
- The list of available styles may be updated in future versions of the toolkit. Always check the latest documentation for the most up-to-date information.
- If you're building a user interface, you can use this function to populate a dropdown menu or radio button group with available style options.
- The function currently returns a hardcoded list of styles. In future versions, this might be replaced with a dynamic system that fetches styles from a server or configuration file.

## Related Functions

- `generateCharacterSpritesheet`: Use this function to generate character spritesheets with the styles retrieved from `fetchAvailableSpriteStyles`.
- `generateEnvironmentSprites`: This function also accepts a `style` parameter that can be populated using the styles from `fetchAvailableSpriteStyles`.

## Next Steps

Now that you know how to fetch available sprite styles, you might want to explore:

- [How to Generate Character Spritesheets](/docs/generateCharacterSpritesheet)
- [Creating Custom Sprite Styles](/docs/customSpriteStyles)
- [Advanced Sprite Generation Techniques](/docs/advancedSpriteGeneration)

By leveraging the `fetchAvailableSpriteStyles` function, you can create more dynamic and flexible sprite generation workflows in your applications.