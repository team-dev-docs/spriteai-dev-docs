# SpriteAI Troubleshooting Guide

This guide addresses common issues users might encounter when using the SpriteAI library and provides solutions for installation problems, API usage errors, and performance optimization tips.

## Installation Problems

### Issue: Cannot install SpriteAI
Solution:
1. Ensure you have Node.js version 14 or higher installed.
2. Try clearing your npm cache: `npm cache clean --force`
3. If using yarn, try `yarn cache clean`
4. Attempt installation again: `npm install spriteai` or `yarn add spriteai`

### Issue: Missing dependencies
Solution:
1. Check that all required dependencies are installed:
   ```
   npm install axios jimp openai sharp
   ```
2. If issues persist, delete the `node_modules` folder and `package-lock.json`, then run `npm install` again.

## API Usage Errors

### Error: "OpenAI API key not found"
Solution:
1. Ensure you have set your OpenAI API key as an environment variable:
   ```
   export OPENAI_API_KEY=your_api_key_here
   ```
2. Alternatively, pass the API key directly when initializing the OpenAI client:
   ```javascript
   const openai = new OpenAI({ apiKey: 'your_api_key_here' });
   ```

### Error: "Invalid image format"
Solution:
1. Ensure you're providing image data in a supported format (PNG or JPEG).
2. Check that the image data is properly encoded as base64 when required.

### Error: "Exceeded maximum token limit"
Solution:
1. Reduce the complexity of your sprite description.
2. Split complex generations into multiple simpler requests.

## Performance Optimization

1. Batch Processing:
   - When generating multiple sprites, use Promise.all() to process requests concurrently.

2. Caching:
   - Implement a caching mechanism for frequently used sprites to reduce API calls.

3. Image Optimization:
   - Use the `sharp` library's built-in optimization features when saving or processing images.

4. Minimize API Calls:
   - Combine multiple sprite modifications into a single operation where possible.

5. Use Appropriate Image Sizes:
   - Generate sprites at the smallest size that maintains necessary quality to reduce processing time.

## Common Issues and Solutions

### Issue: Generated sprites are low quality
Solution:
1. Increase the output size in the options: `{ size: "1024x1024" }`
2. Provide more detailed descriptions for better results.

### Issue: Inconsistent sprite dimensions
Solution:
1. Use the `generateSpriteMetadata` function to ensure consistent frame sizes.
2. Manually specify frame dimensions in your sprite generation options.

### Issue: Memory issues with large spritesheets
Solution:
1. Generate sprites in smaller batches.
2. Use stream processing with `sharp` for large images.
3. Implement pagination or lazy loading in your application.

If you encounter issues not covered in this guide, please refer to the SpriteAI documentation or contact support for further assistance.