

  # Contributor Guide

Welcome to the SpriteAI project! We're excited to have you contribute to our sprite generation and manipulation library. This guide will help you understand our process for submitting pull requests, coding standards, and best practices for maintaining and extending the sprite generation and manipulation functions.

## Getting Started

1. Fork the repository on GitHub.
2. Clone your fork locally:
   ```
   git clone https://github.com/YOUR-USERNAME/spriteAI.git
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Submitting Pull Requests

1. Create a new branch for your feature or bug fix:
   ```
   git checkout -b feature/your-feature-name
   ```
2. Make your changes and commit them with a clear, descriptive message.
3. Push your branch to your fork:
   ```
   git push origin feature/your-feature-name
   ```
4. Open a pull request against the main repository's `main` branch.
5. Provide a clear description of your changes in the pull request.
6. Wait for review and address any feedback.

## Coding Standards

- Use ES6+ syntax and features.
- Follow the existing code style for consistency.
- Use meaningful variable and function names.
- Add comments for complex logic or non-obvious code.
- Keep functions focused and modular.

## Best Practices for Sprite Functions

### Creating New Sprite Generation Functions

When adding a new sprite generation function:

1. Place the function in the `sprite` object in `index.js`.
2. Follow the naming convention: `generateXXX` or `createXXX`.
3. Use async/await for asynchronous operations.
4. Implement proper error handling.
5. Return a consistent object structure, typically including:
   - `original`: The base generated image.
   - `processed`: The final processed image (if applicable).
   - `settings`: Any settings or parameters used.

Example:

```javascript
sprite.generateNewEffect = async function(description, options = {}) {
  const baseSprite = await this.generatePixelArt(description, options);
  const imgBuffer = Buffer.from(baseSprite.image.split(',')[1], 'base64');
  
  // Process the image...
  
  return {
    original: baseSprite.image,
    processed: `data:image/png;base64,${processedBuffer.toString('base64')}`,
    settings: options
  };
};
```

### Extending Existing Functions

When extending existing functions:

1. Maintain backwards compatibility if possible.
2. If breaking changes are necessary, create a new function or version.
3. Update any related functions that may be affected.
4. Consider adding optional parameters to existing functions for new features.

### Image Processing Best Practices

- Use the `sharp` library for image processing operations when possible.
- For complex pixel manipulations, use the raw buffer data.
- Optimize for performance, especially for animations or batch processing.
- Consider memory usage for large images or multiple frames.

## Testing

- Add test cases for new functions or significant changes.
- Ensure all existing tests pass before submitting a pull request.
- Test with various input types and edge cases.

## Documentation

- Update the README.md file with any new functions or significant changes.
- Add JSDoc comments to functions for better code documentation.
- Keep the API documentation up-to-date.

## Performance Considerations

- Optimize image processing operations where possible.
- Consider using worker threads for CPU-intensive tasks.
- Implement caching mechanisms for frequently used sprites or effects.

## Security

- Validate and sanitize user inputs, especially when processing external images.
- Be cautious with file system operations and user-provided paths.
- Keep dependencies up-to-date and regularly check for vulnerabilities.

## Conclusion

Thank you for contributing to SpriteAI! By following these guidelines, you'll help maintain a high-quality, consistent codebase that's easy to use and extend. If you have any questions or need further clarification, please don't hesitate to ask in the issues section of the repository.

  