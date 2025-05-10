---
slug: /fetchAvailableSpriteStyles
sidebar_position: 2
---

# Fetch Available Sprite Styles, yo

## Brief Description, yo

The `fetchAvailableSpriteStyles` function is a nifty tool that retrieves a list of available sprite styles for use in sprite generation. It's jolly useful when you want to give your users a selection of style options for their sprites.

## Usage, yo

To use `fetchAvailableSpriteStyles`, you'll need to import it from the sprite module and call it as an asynchronous function. Here's a smashing example:

```javascript
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const styles = await fetchAvailableSpriteStyles();
console.log(styles);
```

## Parameters, yo

This function doesn't take any parameters, mate. It's as simple as calling it and Bob's your uncle!

## Return Value, yo

The function returns a Promise that resolves to an array of strings. Each string represents an available sprite style. For example:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Examples, yo

Here's a cracking example of how you might use this function in a React component:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles } from './path/to/sprite/module';

const SpriteStyleSelector = () => {
  const [styles, setStyles] = useState([]);

  useEffect(() => {
    const loadStyles = async () => {
      const availableStyles = await fetchAvailableSpriteStyles();
      setStyles(availableStyles);
    };
    loadStyles();
  }, []);

  return (
    <select>
      {styles.map((style) => (
        <option key={style} value={style}>
          {style}
        </option>
      ))}
    </select>
  );
};
```

## Notes or Considerations, yo

- The available styles are hardcoded in the function, so if you want to add or remove styles, you'll need to modify the `fetchAvailableSpriteStyles` function directly.
- This function is asynchronous to maintain consistency with other sprite-related functions that might perform API calls in the future.
- The returned styles are all lowercase and use hyphens for multi-word styles (e.g., 'pixel-art' instead of 'Pixel Art').
- Remember to handle any potential errors when calling this function, as it returns a Promise.

Cheerio! That's all you need to know about `fetchAvailableSpriteStyles`. Now go forth and create some smashing sprites, old chap!