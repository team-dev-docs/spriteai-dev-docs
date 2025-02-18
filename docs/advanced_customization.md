# Advanced Customization Guide for SpriteAI

This guide covers advanced techniques for customizing and extending the functionality of the SpriteAI library.

## Table of Contents
1. Creating Custom Effects
2. Modifying Existing Generation Algorithms
3. Integrating with Other Tools and Workflows

## 1. Creating Custom Effects

SpriteAI provides a flexible framework for creating custom visual effects. To create a new effect:

1. Define a new async function in index.js that takes an image buffer as input and returns a modified buffer:

```javascript
async function myCustomEffect(imageBuffer, options = {}) {
  // Implement effect logic here
  // Use sharp for image processing
  return modifiedImageBuffer;
}
```

2. Add the new effect to the sprite object:

```javascript 
sprite.addMyCustomEffect = async function(description, customOptions = {}, options = {}) {
  const baseSprite = await this.generatePixelArt(description, options);
  const imgBuffer = Buffer.from(baseSprite.image.split(',')[1], 'base64');
  const processedBuffer = await myCustomEffect(imgBuffer, customOptions);
  
  return {
    original: baseSprite.image,
    customEffect: `data:image/png;base64,${processedBuffer.toString('base64')}`,
    settings: customOptions
  };
};
```

## 2. Modifying Existing Generation Algorithms

To modify existing sprite generation algorithms:

1. Locate the relevant function in index.js (e.g. generatePixelArt)
2. Adjust the DALL-E prompt or post-processing steps as needed
3. Add new options to customize the generation process

Example of modifying generatePixelArt:

```javascript
async generatePixelArt(description, options = {}) {
  const customPrompt = options.customPrompt || 'Create a pixel art sprite of';
  const openAiObject = new OpenAI();
  const response = await openAiObject.images.generate({
    model: "dall-e-3", 
    prompt: `${customPrompt} ${description}. The sprite should be:
      - Strictly pixel art style, maximum ${options.maxSize || '32x32'} pixels
      ...
    `,
    size: options.size || "1024x1024",
    n: 1
  });
  
  // Implement custom post-processing here
  
  return await this._processGeneratedImage(response, options);
}
```

## 3. Integrating with Other Tools and Workflows

SpriteAI can be integrated with other tools and workflows:

1. Export generated sprites to common formats:

```javascript
async exportSprite(sprite, format = 'png', options = {}) {
  const imgBuffer = Buffer.from(sprite.image.split(',')[1], 'base64');
  
  switch (format.toLowerCase()) {
    case 'png':
      return await sharp(imgBuffer).png().toBuffer();
    case 'webp':
      return await sharp(imgBuffer).webp().toBuffer();
    // Add other format conversions as needed
  }
}
```

2. Create a plugin system for custom integrations:

```javascript
const plugins = {};

function registerPlugin(name, plugin) {
  plugins[name] = plugin;
}

function usePlugin(name, ...args) {
  if (plugins[name]) {
    return plugins[name](...args);
  }
  throw new Error(`Plugin ${name} not found`);
}

// Example usage:
registerPlugin('customExport', async (sprite, options) => {
  // Custom export logic
});

const exportedSprite = await usePlugin('customExport', generatedSprite, {format: 'custom'});
```

3. Implement batch processing for multiple sprites:

```javascript
async function batchProcess(descriptions, effectFunction, options = {}) {
  const results = [];
  for (const description of descriptions) {
    const result = await effectFunction(description, options);
    results.push(result);
  }
  return results;
}

// Usage:
const batchResults = await batchProcess(
  ['hero', 'enemy', 'item'],
  sprite.addWeatherEffect,
  { type: 'rain', intensity: 0.7 }
);
```

By leveraging these advanced customization techniques, you can extend SpriteAI's capabilities to fit your specific game development needs.