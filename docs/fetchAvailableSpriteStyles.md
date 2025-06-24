---
title: fetchAvailableSpriteStyles
description: A function to retrieve available sprite styles for character generation.
---

# fetchAvailableSpriteStyles

## Introduction

The `fetchAvailableSpriteStyles` function is part of the SpriteAI module and is used to retrieve a list of available sprite styles that can be used when generating character spritesheets. This function is particularly useful when you want to provide users with style options for their sprite generation requests.

## Usage

To use the `fetchAvailableSpriteStyles` function, import it from the SpriteAI module and call it as an asynchronous function.

```javascript
import { fetchAvailableSpriteStyles } from './path/to/spriteAI';

async function getStyles() {
  const styles = await fetchAvailableSpriteStyles();
  console.log(styles);
}

getStyles();
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

Here's a more comprehensive example of how you might use the `fetchAvailableSpriteStyles` function in a user interface:

```javascript
import React, { useState, useEffect } from 'react';
import { fetchAvailableSpriteStyles, generateCharacterSpritesheet } from './spriteAI';

function SpriteGenerator() {
  const [styles, setStyles] = useState([]);
  const [selectedStyle, setSelectedStyle] = useState('');
  const [description, setDescription] = useState('');

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

  const handleGenerate = async () => {
    if (description && selectedStyle) {
      const result = await generateCharacterSpritesheet(description, { style: selectedStyle });
      // Handle the generated spritesheet...
    }
  };

  return (
    <div>
      <select value={selectedStyle} onChange={(e) => setSelectedStyle(e.target.value)}>
        {styles.map(style => (
          <option key={style} value={style}>{style}</option>
        ))}
      </select>
      <input 
        type="text" 
        value={description} 
        onChange={(e) => setDescription(e.target.value)} 
        placeholder="Describe your character"
      />
      <button onClick={handleGenerate}>Generate Sprite</button>
    </div>
  );
}
```

In this example, we use `fetchAvailableSpriteStyles` to populate a dropdown menu with available style options. The selected style is then used as an option when calling `generateCharacterSpritesheet`.

## Notes

- The available styles may change over time as new styles are added or removed from the SpriteAI system.
- The function is asynchronous and returns a Promise, so remember to use `await` or `.then()` when calling it.
- If no styles are available or an error occurs, the function will return an empty array.

## See Also

- [generateCharacterSpritesheet](./generateCharacterSpritesheet.md) - For generating character spritesheets using the available styles.
- [fetchAvailableAnimationStates](./fetchAvailableAnimationStates.md) - For retrieving available animation states for character sprites.