---
slug: /
sidebar_position: 1
---
# Sprite Wizard Documentation

## Introduction
Welcome, aspiring pixel mage! The `generateSprite` function is your magical incantation for conjuring sprite sheet images from mere descriptions. Harness the power of AI to bring your pixelated creations to life!

## Casting the Spell
To summon a sprite, you must first import the arcane knowledge from the sprite grimoire:

```javascript
import { sprite } from './path/to/sprite/grimoire';
```

Then, cast your spell by invoking the `generateSprite` incantation:

```javascript
const magicalResult = await sprite.generateSprite(description, options);
```

## Spell Components
- `description` (string, required): The mystical words describing your desired creature or object.
- `options` (object, optional): Advanced enchantments to customize your summoning:
  - `iterations` (number): The number of alternate realities to explore.
  - `size` (string): The dimensional space of your creation (default: "1024x1024").
  - `save` (boolean): Whether to etch your creation into the eternal scroll of the hard drive.

## The Fruits of Your Labor
Your spell will conjure an object or array of objects containing:
- `messages`: A scroll of JSON wisdom revealing the frameHeight and frameWidth of your creation.
- `image`: The very essence of your sprite, encoded in the ancient Base64 runes.

## Magical Examples

1. Summoning a single robotic familiar:
```javascript
const robotFamiliar = await sprite.generateSprite("A pixelated robot servant");
console.log("Dimensions of my new helper:", robotFamiliar.messages);
console.log("Behold its form:", robotFamiliar.image);
```

2. Conjuring multiple feline companions:
```javascript
const catCoven = await sprite.generateSprite("A mischievous cartoon cat", { iterations: 3 });
catCoven.forEach((cat, index) => {
  console.log(`Cat familiar #${index + 1}:`, cat.messages);
});
```

## Wizard's Notes
- The arcane AI forces (DALL-E 3 and GPT) powering this spell may interpret your wishes in unexpected ways.
- Your summoned sprites are optimized for walking animations, arranged in a mystical 2x3 grid of 6 frames.
- All colors are transmuted to shades of gray in the final enchantment.
- When saving your creations, they are stored in the 'assets' chamber, named after their description.
- Patience, young wizard! The ritual may take some time as it consults the oracles and weaves the pixels.

Now go forth and populate your realms with wondrous sprites!
