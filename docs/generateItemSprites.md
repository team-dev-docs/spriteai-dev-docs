---
title: generateItemSprites
description: Generate sizzling item sprites for game assets using AI-powered image generation
---

# 🌶️ generateItemSprites: Spice Up Your Game Assets!

Ready to add some sizzle to your game inventory? The `generateItemSprites` function is your secret sauce for creating mouth-watering item sprites using AI-powered image generation. Let's dive in and see how you can spice things up!

## 🔥 Usage: Cooking Up Some Sprites

First, import the heat from the SpriteAI module:

```javascript
import { generateItemSprites } from 'spriteAI';
```

Now, let's toss in some ingredients and watch the magic happen:

```javascript
const spicyResult = await generateItemSprites("flaming hot sauce bottles", options);
```

## 🌶️ Parameters: The Recipe for Success

- `description` (string, required): The secret ingredient! Describe your items with zesty detail.
- `options` (object, optional): Your flavor enhancers:
  - `itemCount` (number): How many items in your spice rack? (default: 4)
  - `size` (string): The dimensions of your flavor explosion (default: "1024x1024")
  - `style` (string): The artistic flair of your spicy creations (default: "pixel-art")
  - `padding` (number): Breathing room between your hot items (default: 1)
  - `itemType` (string): What's cooking? (default: "equipment")
  - `background` (string): The canvas for your spicy masterpiece (default: "white")
  - `save` (boolean): Preserve your creations for posterity?

## 🔥 Return Value: The Fruits of Your Labor

Expect a Promise that resolves to an object hotter than a ghost pepper:

- `original` (string): The birthplace of your spicy sprites
- `itemSheet` (string): Your items, all fired up and ready to go (Base64-encoded)
- `metadata` (object): The secret recipe, including:
  - `itemCount` (number): How many hot items you've cooked up
  - `itemType` (string): The category of your spicy inventory
  - `dimensions` (object): The size of your flavor canvas
  - `itemData` (object): The layout of your spice rack

## 🌶️ Examples: Time to Turn Up the Heat!

1. Whip up a basic set of spicy weapons:

```javascript
const infernalWeapons = await generateItemSprites("blazing swords and fiery axes");
console.log("Check out these hot weapons!", infernalWeapons.itemSheet);
console.log("The spicy details:", infernalWeapons.metadata);
```

2. Craft a custom set of magical potions with extra kick:

```javascript
const spicyOptions = {
  itemCount: 6,
  size: "2048x2048",
  style: "neon-glow",
  itemType: "potions",
  background: "cosmic-void"
};

const magicalConcoctions = await generateItemSprites("otherworldly elixirs that spark and fizz", spicyOptions);
console.log(`Brewed ${magicalConcoctions.metadata.itemCount} spicy potions!`);
console.log(`On a canvas of ${magicalConcoctions.metadata.dimensions.width}x${magicalConcoctions.metadata.dimensions.height} pixels`);
```

## 🔥 Notes and Considerations: Handle with Care!

- Our AI chef (DALL-E 3) might interpret your spicy requests differently each time. Embrace the variety!
- These sprites are perfect for adding some zing to your inventory or pickup systems.
- The kitchen (API) might take a moment to prepare your order. Patience yields the spiciest results!
- Your creations are stored in the 'assets' pantry, labeled with your zesty descriptions.
- Experiment with different `style` flavors: "pixel-art", "vector", "3d", "hand-drawn", "anime", or invent your own!
- Use `itemType` to guide our AI chef: "equipment", "consumables", "resources", etc.
- Your items will be arranged in a grid, like a perfectly organized spice rack.

Remember, with great spice comes great responsibility. Handle errors gracefully and implement rate limiting to avoid overwhelming your game's palate!

Now go forth and create some truly explosive game assets! 🌶️🔥🎮