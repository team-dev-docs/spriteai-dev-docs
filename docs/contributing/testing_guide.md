

  # Testing Guidelines for spriteAI

This guide provides an overview of how to write and run tests for the spriteAI project using Jest. We'll cover the structure of test files, best practices, and provide examples from existing tests.

## Test File Structure

Test files in spriteAI follow these conventions:

- Located in the `tests/` directory
- Named with the pattern `*.test.js`
- Each file tests a specific module or functionality

For example:
- `removeBackground.test.js` tests the background removal functionality
- `sprite.test.js` tests sprite generation features

## Using Jest for Testing

spriteAI uses Jest as its testing framework. To run tests:

1. Ensure Jest is installed: `npm install --save-dev jest`
2. Run `npm test` or `jest` from the command line

Jest will automatically find and run all files with the `.test.js` extension.

## Writing Effective Tests

When writing tests for spriteAI, follow these best practices:

1. **Describe test suites**: Use `describe` blocks to group related tests
2. **Use clear test names**: Write descriptive `it` statements
3. **Setup and teardown**: Use `beforeEach` and `afterAll` for test preparation and cleanup
4. **Test edge cases**: Include tests for error conditions and edge cases
5. **Use async/await**: For testing asynchronous functions
6. **Mock external dependencies**: When necessary, use Jest's mocking capabilities

## Examples from Existing Tests

### Example 1: Testing Background Removal (removeBackground.test.js)

```javascript
describe('removeBackgroundColor', () => {
  // ... setup code ...

  it('should remove the background color from the input image', async () => {
    const targetColor = '#FFFFFF'; // White
    const colorThreshold = 0;

    await removeBackgroundColor(inputPath, outputPath, targetColor, colorThreshold);

    const expectedOutput = await Jimp.read(expectedOutputPath);
    const actualOutput = await Jimp.read(outputPath);

    expect(expectedOutput.bitmap.data).toEqual(actualOutput.bitmap.data);
  });

  it('should handle non-existent input file', async () => {
    const nonExistentPath = path.join(__dirname, 'test-assets', 'non-existent.png');
    const targetColor = '#FFFFFF';
    const colorThreshold = 0;

    await expect(removeBackgroundColor(nonExistentPath, outputPath, targetColor, colorThreshold)).rejects.toThrow();
  });
});
```

This example shows:
- Grouping related tests with `describe`
- Async test functions for file operations
- Testing both successful operations and error conditions
- Using `expect` for assertions

### Example 2: Testing Sprite Generation (sprite.test.js)

```javascript
describe('sprite', () => {
  describe('generateSprite', () => {
    it('should generate a sprite with the correct frame dimensions', async () => {
      const description = 'knight';
      const options = { iterations: 1 };
      const result = await sprite.generateSprite(description, options);

      expect(result).toBeDefined();
      expect(result.length).toBe(1);

      const { messages, image } = result[0];
      expect(messages).toBeDefined();
      expect(image).toBeDefined();

      const frameInfo = JSON.parse(messages.content);
      expect(frameInfo).toHaveProperty('frameWidth');
      expect(frameInfo).toHaveProperty('frameHeight');

      const buffer = Buffer.from(image.split(',')[1], 'base64');
      const imageData = await sharp(buffer).metadata();
      expect(imageData.width).toBe(1024);
      expect(imageData.height).toBe(1024);
    });
  });
});
```

This example demonstrates:
- Nested `describe` blocks for organizing tests
- Testing complex objects and their properties
- Using external libraries (sharp) in tests
- Checking multiple aspects of the generated sprite

## Best Practices Summary

1. Write clear, descriptive test names
2. Group related tests using `describe` blocks
3. Test both successful cases and error conditions
4. Use `beforeEach` and `afterAll` for setup and cleanup
5. Mock external dependencies when necessary
6. Use async/await for asynchronous tests
7. Make specific assertions about the expected outcomes

By following these guidelines and examples, you can create effective and maintainable tests for the spriteAI project.

  