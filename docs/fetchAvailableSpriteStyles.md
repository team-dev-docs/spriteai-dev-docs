---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, designed to provide developers with a list of available sprite styles that can be used when generating character spritesheets. This function is particularly useful when you want to offer users a selection of styles for their sprite generation tasks.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';

async function getSpriteStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getSpriteStyles();
```

## Function Signature

```javascript
async function fetchAvailableSpriteStyles(): Promise<string[]>
```

## Return Value

The function returns a Promise that resolves to an array of strings. Each string in the array represents an available sprite style.

Example return value:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Example

Here's a more comprehensive example of how you might use the `fetchAvailableSpriteStyles` function in a React component:

```jsx
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from 'spriteAI';

function SpriteGenerator() {
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');

  useEffect(() => {
    async function loadStyles() {
      const availableStyles = await fetchAvailableSpriteStyles();
      setStyles(availableStyles);
      if (availableStyles.length > 0) {
        setSelectedStyle(availableStyles[0]);
      }
    }
    loadStyles();
  }, []);

  const handleStyleChange = (event) => {
    setSelectedStyle(event.target.value);
  };

  const handleGenerateSprite = async () => {
    const spritesheet = await generateCharacterSpritesheet('A brave knight', {
      style: selectedStyle
    });
    // Handle the generated spritesheet...
  };

  return (
    <div>
      <h2>Sprite Generator</h2>
      <select value={selectedStyle} onChange={handleStyleChange}>
        {styles.map((style) => (
          <option key={style} value={style}>
            {style}
          </option>
        ))}
      </select>
      <button onClick={handleGenerateSprite}>Generate Sprite</button>
    </div>
  );
}

export default SpriteGenerator;
```

## Notes and Considerations

- The `fetchAvailableSpriteStyles` function is asynchronous, so always remember to use `await` when calling it or handle the returned Promise appropriately.
- The available styles may change over time as new styles are added or removed from the SpriteAI module. It's a good practice to fetch the styles dynamically rather than hardcoding them in your application.
- When using the returned styles with the `generateCharacterSpritesheet` function, ensure that you pass the style string exactly as received from `fetchAvailableSpriteStyles`.

## Related Functions

- [`generateCharacterSpritesheet`](./generateCharacterSpritesheet.md): Use this function to generate a character spritesheet with the selected style.
- [`fetchAvailableAnimationStates`](./fetchAvailableAnimationStates.md): This function can be used in conjunction with `fetchAvailableSpriteStyles` to provide a comprehensive set of options for sprite generation.

By utilizing the `fetchAvailableSpriteStyles` function, you can create more dynamic and user-friendly interfaces for sprite generation in your applications.