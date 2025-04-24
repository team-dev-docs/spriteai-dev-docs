# generateAnimatedEmoji Function

## Overview
`generateAnimatedEmoji` is a function that utilizes AI-powered image generation to create a 4-frame animated emoji based on a given description.

## Function Signature
```javascript
async function generateAnimatedEmoji(description: string, options?: { save?: boolean }): Promise
```

## Parameters
- `description` (string, required): A textual description of the animated emoji to be generated.
- `options` (object, optional):
  - `save` (boolean): Determines whether to save the generated image to disk.

## Return Value
Returns a Promise that resolves to an object containing:
- `image` (string): Base64-encoded image data URL of the generated animated emoji.
- `url` (string): Direct URL to access the generated image.

## Usage
To use `generateAnimatedEmoji`, import it from the sprite module and invoke it with the desired description and options.

```javascript
import { sprite } from './path/to/sprite/module';

const result = await sprite.generateAnimatedEmoji(description, options);
```

## Examples

### Generate an Animated Emoji
```javascript
const result = await sprite.generateAnimatedEmoji("A smiling face winking");
console.log(result.image); // Base64-encoded image data URL
console.log(result.url);   // Direct URL to the generated image
```

### Generate and Save an Animated Emoji
```javascript
const result = await sprite.generateAnimatedEmoji("A heart beating", { save: true });
console.log("Emoji saved and accessible at:", result.url);
```

## Technical Details
- The function leverages the DALL-E 3 AI model for image generation, which may produce varying outputs for identical inputs.
- Generated emojis are optimized for animation, consisting of 4 frames arranged in a 2x2 grid.
- The function returns a single image containing all 4 frames of the animation.
- When the save option is enabled, images are stored with a timestamp-based filename.

## Performance Considerations
- The function's execution time may vary due to API calls and image processing operations.
- Ensure that the necessary API credentials and permissions are configured to use the OpenAI image generation service.

## Error Handling
Implement appropriate error handling mechanisms when using this function, as it involves external API calls and file system operations that may fail.

## Future Enhancements
- Consider implementing caching mechanisms for frequently requested emoji descriptions.
- Explore options for customizing the number of frames or grid layout for more complex animations.
