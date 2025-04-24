# Quickstart Guide for SpriteAI SDK: Unleash Your Game's Visual Potential!

Ready to spice up your game development with AI-powered sprite generation? Look no further! The SpriteAI SDK is your secret weapon for creating jaw-dropping character spritesheets, captivating environment sprites, and eye-catching item sprites. Let's dive in and bring your game world to life!

## Installation: Get the Magic Rolling!

1. First things first, make sure you've got Node.js installed on your system. It's the foundation of our sorcery!

2. Clone the SpriteAI repository and step into the world of endless possibilities:
   ```bash
   git clone 
   cd spriteAI
   ```

3. Summon the required dependencies with this incantation:
   ```bash
   npm install
   ```

## Setting Up: Prepare for Awesomeness!

Before you start conjuring sprites, you need to set up your OpenAI API key. Think of it as the magical key to unlock the full potential of SpriteAI.

Set your OpenAI API key as an environment variable (keep it secret, keep it safe):

```bash
export OPENAI_API_KEY='your-super-secret-api-key-here'
```

## Using the SDK: Let the Sprite Magic Begin!

The SpriteAI SDK offers three main spells... err, functions for generating game assets:

1. `generateCharacterSpritesheet`: Bring your heroes and villains to life!
2. `generateEnvironmentSprites`: Craft breathtaking worlds with a single command!
3. `generateItemSprites`: Create treasures and tools that players will fight over!

### Generating a Character Spritesheet: Birth Your Game's Heroes!

Behold! A taste of the power at your fingertips:

```javascript
import { generateCharacterSpritesheet } from './index.js';

const description = 'a fire-breathing, disco-dancing dragon';
const options = {
  states: ['idle', 'walk', 'run', 'attack', 'dance'],
  framesPerState: 6,
  size: '1024x1024',
  style: 'pixel-art',
  padding: 1,
  direction: 'right',
  save: true
};

generateCharacterSpritesheet(description, options)
  .then(result => {
    console.log('Behold, your majestic spritesheet:', result.spritesheet);
    console.log('The ancient scrolls (metadata):', result.metadata);
  })
  .catch(error => {
    console.error('Alas! An error in the sprite-o-sphere:', error);
  });
```

### Generating Environment Sprites: Craft Your Game's Universe!

Create entire worlds with a flick of your coding wand:

```javascript
import { generateEnvironmentSprites } from './index.js';

const description = 'cyberpunk neon forest';
const options = {
  elements: 4,
  size: '1024x1024',
  style: 'neon-pixel-art',
  padding: 1,
  theme: 'sci-fi',
  save: true
};

generateEnvironmentSprites(description, options)
  .then(result => {
    console.log('Your digital realm manifests:', result.tileset);
    console.log('The lore of your land (metadata):', result.metadata);
  })
  .catch(error => {
    console.error('The fabric of your world trembles with an error:', error);
  });
```

### Generating Item Sprites: Forge Legendary Loot!

Equip your heroes with gear worthy of their quests:

```javascript
import { generateItemSprites } from './index.js';

const description = 'glowing alien artifacts';
const options = {
  itemCount: 4,
  size: '1024x1024',
  style: 'vector-art',
  padding: 1,
  itemType: 'legendary',
  background: 'transparent',
  save: true
};

generateItemSprites(description, options)
  .then(result => {
    console.log('Behold, your treasure trove:', result.itemSheet);
    console.log('The whispers of power (metadata):', result.metadata);
  })
  .catch(error => {
    console.error('The items resist manifestation:', error);
  });
```

## Bonus Spells: Enhance Your Sprite Wizardry!

### Fetching Available Animation States: Peek into the Sprite Dimension

Discover the secret dance moves of your sprites:

```javascript
import { fetchAvailableAnimationStates } from './index.js';

fetchAvailableAnimationStates()
  .then(states => {
    console.log('The sacred scrolls reveal these animation states:', states);
  })
  .catch(error => {
    console.error('The crystal ball is cloudy:', error);
  });
```

### Fetching Available Sprite Styles: Unlock New Artistic Realms

Explore the vast palette of sprite aesthetics:

```javascript
import { fetchAvailableSpriteStyles } from './index.js';

fetchAvailableSpriteStyles()
  .then(styles => {
    console.log('The artistic dimensions available to you:', styles);
  })
  .catch(error => {
    console.error('The muses are silent:', error);
  });
```

## Preserving Your Creations: Immortalize Your Art!

When you set `save` to `true`, your masterpieces will be enshrined in the `assets` folder of your current working directory. The filenames will be crafted from the descriptions you provide, with spaces transformed into mystical underscores.

## Your Next Epic Quest

- Dive deep into the options for each generation function and customize your creations to perfection.
- Seamlessly weave your generated assets into the tapestry of your game development workflow.
- Push the boundaries of creativity with wild descriptions and eclectic styles to birth truly unique game assets.

For those seeking to unlock the full potential of the SDK's arcane powers, consult the tome of knowledge known as the full documentation.

Now go forth, and may your sprites be ever vibrant and your games legendary!
