# SpriteAI Troubleshooting Guide

This guide addresses common issues users might encounter when using the SpriteAI library, including installation problems, API usage errors, and performance optimization tips.

## Installation Problems

### Issue: Unable to install SpriteAI
1. Ensure you have Node.js version 14 or higher installed.
2. Check your internet connection.
3. Try clearing your npm cache: `npm cache clean --force`
4. Attempt installation again: `npm install spriteai`

### Issue: Missing dependencies
If you encounter errors about missing dependencies, try the following:
1. Install dependencies manually: `npm install axios jimp openai sharp`
2. If issues persist, check for any conflicting versions in your project's package.json file.

## API Usage Errors

### Error: "OpenAI API key not found"
1. Ensure you've set your OpenAI API key as an environment variable: `export OPENAI_API_KEY=your_api_key_here`
2. Alternatively, pass the API key directly when initializing the OpenAI object.

### Error: "Invalid image format"
1. Check that you're providing a valid image buffer or file path.
2. Ensure the image format is supported (PNG, JPEG, WebP).

### Error: "Exceed maximum image size"
1. Reduce the size of your input image. DALL-E 3 has a maximum image size limit.
2. Use the `sharp` library to resize the image before processing.

## Performance Optimization

1. **Caching**: Implement caching for frequently generated sprites to reduce API calls and processing time.

2. **Batch Processing**: When generating multiple sprites, use batch processing to reduce overhead.

3. **Image Compression**: Use the `sharp` library to compress images before and after processing to reduce file sizes.

4. **Asynchronous Processing**: Utilize Promise.all() for parallel processing when working with multiple sprites.

5. **Memory Management**: For large projects, implement proper garbage collection and memory management techniques.

## Common Workflow Issues

### Issue: Generated sprites lack detail
1. Refine your prompt description to be more specific about desired details.
2. Experiment with different art styles in your prompt.
3. Try increasing the image resolution in the options.

### Issue: Inconsistent sprite sizes in animations
1. Use the `generateCharacterSpritesheet` function for consistent sizing across animation frames.
2. Specify exact dimensions in your generation options.

### Issue: Unexpected color changes in sprite variations
1. Use the `optimizePalette` function to maintain color consistency.
2. Specify color preferences explicitly in your sprite description.

If you continue to experience issues not covered in this guide, please refer to the official documentation or reach out to our support team for assistance.