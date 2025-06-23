---
title: Fetch Available Sprite Styles
description: Learn how to use the fetchAvailableSpriteStyles function to get a list of available sprite styles for character generation.
sidebar_position: 3
---

# Fetch Available Sprite Styles

## Introduction

The `fetchAvailableSpriteStyles` function is a part of the SpriteAI module, which allows developers to retrieve a list of available sprite styles for character generation. This tutorial will guide you through using this function in your projects.

## Prerequisites

Before you begin, make sure you have:

- Installed the SpriteAI module in your project
- Basic knowledge of JavaScript and asynchronous programming

## How to Use fetchAvailableSpriteStyles

Follow these steps to fetch the available sprite styles:

1. Import the function from the SpriteAI module:

```javascript
import { fetchAvailableSpriteStyles } from 'spriteAI';
```

2. Call the function and handle the returned promise:

```javascript
async function getStyles() {
  try {
    const styles = await fetchAvailableSpriteStyles();
    console.log('Available styles:', styles);
  } catch (error) {
    console.error('Error fetching styles:', error);
  }
}

getStyles();
```

3. The function will return an array of available sprite styles.

## Example Output

The `fetchAvailableSpriteStyles` function returns an array of strings. Here's an example of what the output might look like:

```javascript
['pixel-art', 'vector', '3d', 'hand-drawn', 'anime']
```

## Use Cases

You can use the `fetchAvailableSpriteStyles` function to:

- Populate a dropdown menu for style selection in your character generation UI
- Validate user input when generating sprites
- Dynamically adjust your application based on available styles

## Best Practices

- Cache the results if you're calling this function frequently, as the available styles are unlikely to change often.
- Handle potential network errors or unexpected responses gracefully.
- Use the returned styles to ensure you're only offering valid options to your users.

## Next Steps

Now that you know how to fetch available sprite styles, you might want to explore:

- [How to Generate Character Spritesheets](/docs/generateCharacterSpritesheet)
- [Customizing Sprite Generation Options](/docs/customizeSpriteOptions)

Remember, the available styles may be updated over time, so always use this function to get the most up-to-date list of styles supported by the SpriteAI module.