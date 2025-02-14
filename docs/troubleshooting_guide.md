# SpriteAI Troubleshooting Guide

This guide addresses common issues users might encounter when using the SpriteAI library and provides solutions for installation problems, API usage errors, and performance optimization tips.

## Installation Problems

### Unable to install SpriteAI

If you're having trouble installing SpriteAI, try the following:

1. Ensure you have Node.js version 14 or higher installed.
2. Clear your npm cache: `npm cache clean --force`
3. Try installing with the `--legacy-peer-deps` flag: `npm install spriteai --legacy-peer-deps`

### Missing dependencies

If you encounter errors about missing dependencies, manually install them:

```
npm install axios jimp openai sharp
```

## API Usage Errors

### OpenAI API key not found

Make sure you've set your OpenAI API key as an environment variable:

```
export OPENAI_API_KEY=your_api_key_here
```

### "Error: Request failed with status code 401"

This usually means your OpenAI API key is invalid or has expired. Double-check your API key and ensure it's still active in your OpenAI account.

### Unexpected output or low-quality sprites

1. Check that your prompt is clear and detailed.
2. Try adjusting the `size` option in the `generateSprite` method.
3. Experiment with different values for `options.iterations` to get varied results.

## Performance Optimization

### Slow sprite generation

1. Use smaller image sizes when possible (e.g., 512x512 instead of 1024x1024).
2. Implement caching for frequently used sprites.
3. Consider using the `generatePixelArt` method instead of `generateSprite` for simpler, faster generation.

### High memory usage

1. Avoid generating large numbers of sprites simultaneously.
2. Use `options.save` to save sprites to disk instead of keeping them in memory.
3. Implement a cleanup routine to remove unused sprite data from memory.

## Common Error Messages and Solutions

### "Error: Unable to determine image format"

This can occur if the image data is corrupted. Try regenerating the sprite or check the image URL if you're using one.

### "Error: Input buffer contains unsupported image format"

Ensure you're passing valid image data to methods like `addOutline` or `createGlitchArt`. The input should be a base64-encoded image string.

### "RangeError: Invalid string length"

This error can occur when dealing with very large images. Try using a smaller image size or breaking your task into smaller chunks.

If you continue to experience issues not covered in this guide, please refer to the official documentation or contact support for further assistance.