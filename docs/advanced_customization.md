# Advanced Customization Guide for SpriteAI

This guide provides instructions for advanced users on how to customize and extend the functionality of the SpriteAI library.

## Creating Custom Effects

To create custom effects, you can build on the existing utility functions or create new ones. Here's an example of creating a custom "glitch" effect:

```javascript
async function createGlitchEffect(imageBuffer, options = {}) {
  const { intensity = 10, frames = 5 } = options;
  
  const glitchFrames = [];
  for (let i = 0; i < frames; i++) {
    const glitched = await sharp(imageBuffer)
      .modulate({ brightness: 1 + (Math.random() - 0.5) * 0.2 * intensity })
      .linear(1 + (Math.random() - 0.5) * 0.1 * intensity, (Math.random() - 0.5) * 10 * intensity)
      .toBuffer();
    glitchFrames.push(glitched);
  }
  
  return glitchFrames;
}
```

You can then add this effect to the sprite object:

```javascript
sprite.addGlitchEffect = async function(description, glitchOptions = {}, options = {}) {
  const baseSprite = await this.generatePixelArt(description, options);
  const imgBuffer = Buffer.from(baseSprite.image.split(',')[1], 'base64');
  const glitchFrames = await createGlitchEffect(imgBuffer, glitchOptions);
  
  return {
    original: baseSprite.image,
    glitchFrames: glitchFrames.map(f => `data:image/png;base64,${f.toString('base64')}`),
    frameCount: glitchFrames.length
  };
};
```

## Modifying Existing Generation Algorithms

To modify existing algorithms, locate the relevant function in the source code and adjust the parameters or logic. For example, to modify the pixel art generation:

1. Find the `generatePixelArt` function in the source code.
2. Adjust the prompt or add additional processing steps.

Example of modifying the pixel art generation:

```javascript
async generatePixelArt(description, options = {}) {
  // ... existing code ...
  
  // Add custom processing
  if (options.enhanceContrast) {
    imgBuffer = await sharp(imgBuffer)
      .modulate({ contrast: 1.2 })
      .toBuffer();
  }
  
  // ... rest of the function ...
}
```

## Integrating with Other Tools or Workflows

### Exporting to Game Engines

Create utility functions to export sprites in formats compatible with popular game engines:

```javascript
async function exportToUnity(sprite, outputPath) {
  // Convert sprite to Unity-compatible format
  // Save to outputPath
}

sprite.exportToUnity = exportToUnity;
```

### Batch Processing

Implement batch processing capabilities:

```javascript
async function batchGenerateSprites(descriptions, options = {}) {
  const results = await Promise.all(
    descriptions.map(desc => sprite.generatePixelArt(desc, options))
  );
  return results;
}

sprite.batchGenerate = batchGenerateSprites;
```

### Custom AI Model Integration

To use a custom AI model for generation:

1. Set up your custom model API endpoint.
2. Modify the `generateSprite` function to use your custom API instead of DALL-E.

Example:

```javascript
async generateSprite(description, options = {}) {
  // ... existing code ...
  
  const response = await axios.post('YOUR_CUSTOM_API_ENDPOINT', {
    prompt: description,
    // Other parameters
  });
  
  // Process the response from your custom API
  
  // ... rest of the function ...
}
```

By following these guidelines, you can extensively customize and extend the SpriteAI library to fit your specific needs and workflows.