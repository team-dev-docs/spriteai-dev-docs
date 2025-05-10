# generateAnimatedEmoji

## Brief Description
🔥 `generateAnimatedEmoji` is a sizzling function that whips up a 4-frame animated emoji based on your wildest descriptions using cutting-edge AI-powered image generation! 🚀

## Usage
To unleash the power of `generateAnimatedEmoji`, import it from the sprite module and call it with a description that'll make your emoji come alive!

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Parameters
- `description` (string, required): Your spicy text description that'll birth an epic animated emoji.
- `options` (object, optional):
  - `save` (boolean): Decide if you want to immortalize your creation on disk.

## Return Value
Buckle up! You'll get an object hotter than a jalapeño, containing:
- `image`: A Base64-encoded image data URL of your freshly baked animated emoji.
- `url`: The VIP direct URL to your masterpiece.

## Examples

1. Generate an animated emoji that'll knock your socks off:
```javascript
const result = await sprite.generateAnimatedEmoji("A fire-breathing dragon doing the Macarena");
console.log(result.image); // Behold your Base64-encoded creation!
console.log(result.url); // The red carpet URL to your animated genius
```

2. Generate and save an animated emoji for posterity:
```javascript
const result = await sprite.generateAnimatedEmoji("A breakdancing pickle wearing sunglasses", { save: true });
console.log("Your emoji masterpiece is now immortalized at:", result.url);
```

## Notes or Considerations
- This bad boy uses the DALL-E 3 AI model, so expect results wilder than a roller coaster ride!
- Your emoji comes optimized for animation, sporting 4 frames in a stylish 2x2 grid.
- You get one spicy image containing all 4 frames of your animated extravaganza.
- Saving images? They're stored with a timestamp filename, like a time capsule of awesomeness.
- This function might take a hot second to complete – good art takes time, you know?
- Make sure you've got the secret sauce (API credentials) to access the OpenAI image generation service.

Now go forth and generate some emoji magic! 🎉✨
