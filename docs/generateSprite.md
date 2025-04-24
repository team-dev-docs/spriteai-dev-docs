---
slug: /
sidebar_position: 1
---
# 🔥 generateSprite Documentation: Unleash Your Pixel Power! 🎮

## 🚀 Brief Description
`generateSprite` is not your average function - it's a pixel-perfect powerhouse that conjures sprite sheet images from mere words, harnessing the cosmic forces of AI-powered image generation and analysis. Prepare to have your mind blown! 🤯

## 🎭 Usage
Summon the `generateSprite` magic into your code realm:

```javascript
import { sprite } from './path/to/sprite/module';

const pixelatedAwesomeness = await sprite.generateSprite(description, options);
```

## 🎛️ Parameters
- `description` (string, required): Your wildest character dreams in text form. Go nuts!
- `options` (object, optional): Tweak the cosmic dials with these bad boys:
  - `iterations` (number): How many alternate universe sprites do you want?
  - `size` (string): Size matters! Default: "1024x1024" (that's a lotta pixels!)
  - `save` (boolean): Wanna keep that masterpiece for posterity?

## 🏆 Return Value
Behold, your prize:
- `messages`: A JSON treasure map revealing the secrets of frameHeight and frameWidth.
- `image`: The holy grail - a Base64-encoded image data URL of your sprite sheet, ready to rock your world.

## 🎭 Examples

1. Spawn a lone digital warrior:
```javascript
const robotOverlord = await sprite.generateSprite("A pixelated robot overlord");
console.log("Behold, our new ruler:", robotOverlord.messages);
console.log("All hail the binary beauty:", robotOverlord.image);
```

2. Create a multiverse of feline friends:
```javascript
const catDimensions = await sprite.generateSprite("A cartoon cat with laser eyes", { iterations: 3 });
catDimensions.forEach((catVariant, index) => {
  console.log(`Dimension ${index + 1} cat stats:`, catVariant.messages);
});
```

## 🧠 Notes for the Brave
- This function taps into the chaotic energies of AI models (DALL-E 3 and GPT). Expect the unexpected!
- Your sprites come optimized for walking animations, strutting their stuff in a 6-frame, 2x3 grid catwalk.
- We turn your creations grayscale because real pixel artists don't need no stinkin' colors! (Just kidding, it's for optimization.)
- Your masterpieces find a home in the 'assets' folder, named after their description. It's like a digital art gallery!
- Rome wasn't built in a day, and neither are your sprites. Patience, young pixel-padawan!

Now go forth and pixelate the world! 🌟🕹️👾
