# Getting Started with spriteAI

Hey there, fellow developer! Welcome to spriteAI, eh? This nifty tool is designed to help you generate character spritesheets and manipulate images using the OpenAI API and some cool image processing libraries. Let's get you set up and running in no time!

## Installation

First things first, let's get spriteAI installed on your machine. It's as easy as maple syrup on pancakes!

1. Clone the repository:
   ```bash
   git clone 
   ```

2. Change into the spriteAI directory:
   ```bash
   cd spriteAI
   ```

3. Install the necessary dependencies:
   ```bash
   npm install
   ```

## Basic Usage

Now that you've got everything installed, let's generate your first spritesheet! It's gonna be a beauty!

Here's a simple example using the `generateCharacterSpritesheet` function:

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a friendly moose';
const options = {
  states: ['idle', 'walk', 'run'],
  framesPerState: 4,
  size: '512x512',
  style: 'pixel-art',
  padding: 2,
  direction: 'right',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Spritesheet generated, bud:', result.spritesheet);
  })
  .catch(error => {
    console.error('Uh oh, we've hit a snag:', error);
  });
```

This will generate a pixel-art spritesheet of a friendly moose with idle, walk, and run animations. Beauty, eh?

## Advanced Features

spriteAI isn't just about character spritesheets. You can also:

1. Generate environment sprites:
   ```javascript
   import { generateEnvironmentSprites } from './index.js';

   const envDescription = 'a cozy log cabin in the woods';
   const envOptions = {
     elements: 6,
     theme: 'Canadian wilderness'
   };

   generateEnvironmentSprites(envDescription, envOptions)
     .then(result => console.log('Environment sprites generated!'))
     .catch(error => console.error('Oh no, there was an error:', error));
   ```

2. Create item sprites:
   ```javascript
   import { generateItemSprites } from './index.js';

   const itemDescription = 'camping gear';
   const itemOptions = {
     itemCount: 8,
     itemType: 'equipment'
   };

   generateItemSprites(itemDescription, itemOptions)
     .then(result => console.log('Item sprites generated!'))
     .catch(error => console.error('Oops, something went wrong:', error));
   ```

3. Remove background colors:
   ```javascript
   import { removeBackgroundColor } from './index.js';

   removeBackgroundColor('input.png', 'output.png', '#FFFFFF', 10)
     .then(() => console.log('Background removed, eh!'))
     .catch(error => console.error('Well, that didn't work out:', error));
   ```

## Next Steps

Now that you're up and running, why not try:
- Experimenting with different character descriptions
- Adjusting the animation states and frame counts
- Trying out different sprite styles
- Generating a complete set of assets for your game

Remember, the spriteAI community is here to help if you run into any trouble. Don't be shy to reach out if you need a hand!

Happy sprite generating, and may your code be as smooth as a frozen lake!