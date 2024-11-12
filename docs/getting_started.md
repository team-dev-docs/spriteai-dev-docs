

  # Getting Started with SpriteAI

This guide will walk you through the process of setting up and using SpriteAI to generate sprites. Follow these steps to get started with sprite generation using SpriteAI.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Node.js (version 12 or higher)
- npm (Node Package Manager)

## Installation

1. Create a new directory for your SpriteAI project:

```bash
mkdir spriteai-project
cd spriteai-project
```

2. Initialize a new Node.js project:

```bash
npm init -y
```

3. Install SpriteAI and its dependencies:

```bash
npm install spriteai axios jimp openai sharp
```

## Setting Up Your Project

1. Create a new file named `index.js` in your project directory.

2. Add the following code to `index.js` to import the SpriteAI module:

```javascript
import { sprite } from "spriteai";
```

## Generating a Sprite

Now that you have set up your project, you can start generating sprites. Here's a basic example of how to use the sprite generation functionality:

1. Create a new file named `generate-sprite.js` in your project directory.

2. Add the following code to `generate-sprite.js`:

```javascript
import { sprite } from "spriteai";

const main = async function() {
    const result = await sprite.generateSprite("a robot samurai cat", {save: true});
    console.log('Sprite generation result:', result);
}

main();
```

3. Run the script using Node.js:

```bash
node generate-sprite.js
```

This script will generate a sprite based on the prompt "a robot samurai cat" and save it to your local filesystem.

## Customizing Sprite Generation

You can customize the sprite generation by modifying the prompt and options passed to the `generateSprite` function. Here are some examples:

- Change the prompt to generate different types of sprites:
  ```javascript
  await sprite.generateSprite("a magical floating crystal", {save: true});
  ```

- Adjust the options to control the output:
  ```javascript
  await sprite.generateSprite("a fierce dragon", {save: true, size: 64, format: "png"});
  ```

## Next Steps

Now that you've successfully generated your first sprite using SpriteAI, you can explore more advanced features and integrate sprite generation into your projects. Refer to the SpriteAI documentation for more information on available options and advanced usage.

Happy sprite generating!

  