# SpriteAI Troubleshooting Guide

This guide addresses common issues users might encounter when using the SpriteAI library and provides solutions for installation problems, API usage errors, and performance optimization tips.

## Installation Problems

### 1. Package Installation Fails

If you encounter issues installing SpriteAI or its dependencies:

- Ensure you have Node.js version 14 or higher installed.
- Clear your npm cache: `npm cache clean --force`
- Try installing with the `--legacy-peer-deps` flag: `npm install spriteai --legacy-peer-deps`

### 2. Sharp Library Issues

If you face problems related to the Sharp library:

- Ensure you have the required system libraries installed for image processing.
- On Linux, you might need to install additional dependencies: `sudo apt-get install libvips-dev`
- On macOS, use Homebrew to install vips: `brew install vips`

## API Usage Errors

### 1. Invalid API Key

If you receive an "Invalid API Key" error:

- Double-check that you've set the correct OpenAI API key in your environment variables.
- Ensure the API key has the necessary permissions for image generation.

### 2. Incorrect Function Parameters

When facing "Invalid argument" or similar errors:

- Review the function documentation to ensure you're passing the correct parameters.
- Check that object properties match the expected format, especially for options objects.

### 3. Image Generation Fails

If sprite generation fails:

- Verify that your description is clear and within the content policy guidelines.
- Try simplifying complex descriptions or breaking them into multiple generations.

## Performance Optimization

### 1. Slow Image Generation

To improve generation speed:

- Use more concise and specific descriptions for faster processing.
- Consider caching frequently used sprites to reduce API calls.
- Implement rate limiting to manage API usage effectively.

### 2. High Memory Usage

If you experience high memory consumption:

- Process images in batches rather than all at once.
- Use the `sharp` library's streaming capabilities for large images.
- Implement proper garbage collection practices in your code.

### 3. Large File Sizes

To reduce output file sizes:

- Use the `pixelPerfectScale` function with a smaller scale factor.
- Optimize color palettes using the `optimizePalette` function.
- Compress final images using Sharp's compression options.

## Common Error Messages and Solutions

### "ReferenceError: OpenAI is not defined"

- Ensure you've imported the OpenAI module correctly: `import OpenAI from "openai";`
- Check that the `openai` package is listed in your `package.json` dependencies.

### "Error: Input file is missing"

- Verify that the file paths in your code are correct and the files exist.
- Use absolute paths or resolve relative paths properly.

### "TypeError: Cannot read property 'generate' of undefined"

- Make sure you're initializing the OpenAI client correctly:
  ```javascript
  const openai = new OpenAI({ apiKey: 'your-api-key' });
  ```

## Additional Resources

- Refer to the official OpenAI documentation for API-specific issues.
- Check the Sharp documentation for image processing related problems.
- Join the SpriteAI community forum for user discussions and additional support.

If you continue to experience issues after trying these solutions, please open an issue on the SpriteAI GitHub repository with a detailed description of your problem.