

  # SpriteAI Troubleshooting Guide

This guide covers common issues you may encounter when using SpriteAI, along with potential solutions and workarounds.

## Image Generation Issues

### Problem: Sprite not generating or taking too long

**Possible causes:**
- Network connectivity issues
- OpenAI API rate limits or downtime
- Invalid API key

**Solutions:**
1. Check your internet connection
2. Verify your OpenAI API key is valid and has sufficient credits
3. Try again after a few minutes if you suspect rate limiting
4. Check [OpenAI status page](https://status.openai.com/) for any ongoing issues

### Problem: Generated sprite doesn't match description

**Possible causes:**
- Ambiguous or conflicting prompt
- Limitations of the AI model

**Solutions:**
1. Refine your description to be more specific and consistent
2. Try breaking down complex characters into simpler elements
3. Experiment with different prompt formulations

## Image Processing Issues

### Problem: Incorrect frame dimensions

**Possible causes:**
- AI misinterpretation of sprite layout
- Inconsistent sprite sizes in generated image

**Solutions:**
1. Manually adjust the `frameWidth` and `frameHeight` values in your game code
2. Regenerate the sprite with a more explicit prompt about layout and consistency
3. Use image editing software to standardize frame sizes if necessary

### Problem: Background not fully transparent

**Possible causes:**
- Imperfect background removal
- Color threshold too low in removeBackgroundColor function

**Solutions:**
1. Adjust the `colorThreshold` parameter when calling `removeBackgroundColor`
2. Manually touch up the sprite using image editing software
3. Experiment with different background colors in the generation prompt

## Game Engine Integration Issues

### Problem: Sprite not loading in Phaser

**Possible causes:**
- Incorrect file path
- Unsupported image format

**Solutions:**
1. Double-check the file path in your `this.load.spritesheet()` call
2. Ensure the generated image is saved in a format Phaser supports (e.g., PNG)
3. Verify the sprite file is in the correct assets directory

### Problem: Animation not playing correctly

**Possible causes:**
- Mismatched frame dimensions
- Incorrect animation key or frame numbers

**Solutions:**
1. Confirm the `frameWidth` and `frameHeight` match the actual sprite dimensions
2. Check your animation configuration (key, frames, frameRate, etc.)
3. Use Phaser's debug tools to visualize sprite boundaries and frames

## General Troubleshooting Tips

1. **Enable logging:** Add console.log statements to track the progress of sprite generation and processing.

2. **Check file outputs:** Verify that files are being saved correctly in the expected locations.

3. **Update dependencies:** Ensure you're using the latest versions of OpenAI, axios, sharp, and Jimp libraries.

4. **Isolate the problem:** Test each step of the process separately (generation, processing, game integration) to pinpoint the issue.

5. **Review API documentation:** Consult the OpenAI API docs for any changes or known issues with image generation.

If you continue to experience problems after trying these solutions, please reach out to the SpriteAI community forums or submit an issue on the project's GitHub repository.

  