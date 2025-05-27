---
slug: /
sidebar_position: 1
---
# generateSprite Documentation

## Brief Description
🔥 `generateSprite` is the secret sauce that conjures up a sizzling sprite sheet image based on your wildest descriptions, powered by cutting-edge AI magic! 🎨✨

## Usage
Unleash the power of `generateSprite` by summoning it from the sprite realm and watch it breathe life into your pixelated dreams!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateSprite(description, options);
```

## Parameters
- `description` (string, required): Your spellbinding text that describes the character you want to materialize.
- `options` (object, optional):
  - `iterations` (number): How many doppelgangers of your sprite you want to conjure.
  - `size` (string): The dimensions of your masterpiece (default: "1024x1024").
  - `save` (boolean): Decide if you want to immortalize your creation on disk.

## Return Value
Behold! Your incantation returns an object or array of objects containing:
- `messages`: A mystical JSON object revealing the secrets of frameHeight and frameWidth.
- `image`: The essence of your creation, captured in a Base64-encoded image data URL of the generated sprite sheet.

## Examples

1. Summon a single sprite sheet:
```javascript
const result = await sprite.generateSprite("A pixelated robot with laser eyes and rocket boots");
console.log("Behold, the robot's vital stats:", result.messages);
console.log("Gaze upon its pixelated glory:", result.image);
```

2. Conjure multiple variations for the indecisive wizard:
```javascript
const variations = await sprite.generateSprite("A cartoon cat with rainbow fur and a unicorn horn", { iterations: 3 });
variations.forEach((variation, index) => {
  console.log(`Feast your eyes on Variation ${index + 1}:`, variation.messages);
});
```

## Notes or Considerations
- This function harnesses the power of AI models (DALL-E 3 and GPT), so expect some delightful surprises in your outputs!
- Your sprites come pre-optimized for walking animations, arranged in a mystical 2x3 grid of 6 frames.
- We transform your colorful creations into grayscale, adding an air of mystery to the final output.
- When you choose to preserve your creations, they find sanctuary in an 'assets' folder, christened with a name inspired by your description.
- Patience, young grasshopper! This function may take a moment to weave its magic due to API communions and image alchemy.

So, gear up and let your imagination run wild! With `generateSprite`, you're not just coding – you're crafting digital art with a dash of AI sorcery! 🚀🎮
