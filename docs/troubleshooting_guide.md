# SpriteAI Troubleshooting Guide

This guide addresses common issues users might encounter when using the SpriteAI library and provides solutions for installation problems, API usage errors, and performance optimization tips.

## Installation Problems

### Issue: Unable to install SpriteAI

1. Ensure you have Node.js version 14 or higher installed.
2. Check your internet connection.
3. Try clearing your npm cache: `npm cache clean --force`
4. Attempt installation again: `npm install spriteai`

### Issue: Dependencies failing to install

1. Make sure you have the necessary build tools installed for your operating system.
2. For Windows users, install Windows-Build-Tools: `npm install --global windows-build-tools`
3. For Mac users, install Xcode Command Line Tools: `xcode-select --install`

## API Usage Errors

### Error: "OpenAI API key not found"

1. Ensure you have set your OpenAI API key as an environment variable: `export OPENAI_API_KEY=your_api_key_here`
2. If using Windows, set the environment variable: `set OPENAI_API_KEY=your_api_key_here`
3. Alternatively, pass the API key directly to the OpenAI constructor in your code.

### Error: "Invalid image format"

1. Check that you're providing a valid image buffer or file path.
2. Ensure the image is in a supported format (PNG, JPEG, WebP).
3. Verify the file exists and has proper read permissions.

### Error: "Unsupported option"

1. Review the documentation for the specific function you're using.
2. Ensure all option names are spelled correctly and use the correct data types.
3. Remove any unsupported options from your function call.

## Performance Optimization

### Slow sprite generation

1. Reduce the complexity of your sprite descriptions.
2. Use smaller image sizes when possible.
3. Implement caching for frequently used sprites.
4. Consider batching multiple sprite generation requests.

### High memory usage

1. Process large batches of sprites in smaller chunks.
2. Dispose of unused image buffers and variables.
3. Use streaming methods for large file operations when available.

### API rate limiting

1. Implement exponential backoff and retry logic for API calls.
2. Use a queue system to manage multiple requests and avoid overwhelming the API.
3. Consider upgrading your OpenAI plan for higher rate limits if necessary.

## Common Functional Issues

### Unexpected sprite appearance

1. Review and refine your text descriptions for more accurate results.
2. Experiment with different art styles and options in your function calls.
3. Use the `iterations` option to generate multiple variations and choose the best one.

### Inconsistent animation frames

1. Ensure your spritesheet generation uses consistent frame sizes.
2. Verify that the `framesPerState` option matches your intended animation sequence.
3. Use the `generateCharacterSpritesheet` function for more controlled animation state generation.

### Pixelation or blurring issues

1. Check that you're using appropriate scaling options.
2. For pixel art, use the `pixelPerfectScale` function to maintain crisp edges.
3. Adjust the `pixelSize` option in various effect functions to control detail level.

If you continue to experience issues after trying these solutions, please consult the SpriteAI documentation or reach out to the support team for further assistance.