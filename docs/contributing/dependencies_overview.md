

  # Project Dependencies

This document provides an overview of the main dependencies used in the SpriteAI project, explaining their purpose and usage within the application.

## Core Dependencies

### OpenAI (v4.17.4)

**Purpose:** Integrates OpenAI's API for generating AI-powered sprite images and processing image-related tasks.

**Usage:** 
- Used to interact with DALL-E 3 for sprite generation
- Leverages GPT-4 Vision for image analysis and metadata extraction

**Configuration:** Requires an OpenAI API key to be set in the environment variables.

### Axios (v1.6.1)

**Purpose:** A promise-based HTTP client for making API requests.

**Usage:**
- Fetches generated images from OpenAI's API
- Downloads images for further processing

**Configuration:** No specific configuration needed beyond installation.

### Jimp (v0.22.10)

**Purpose:** An image processing library for Node.js with zero external dependencies.

**Usage:**
- Performs basic image manipulations like color replacement
- Used in functions like `removeBackgroundColor` and `getUniqueColors`

**Configuration:** No additional configuration required.

### Sharp (v0.32.6)

**Purpose:** High-performance Node.js image processing library.

**Usage:**
- Handles more complex image transformations and effects
- Used extensively for various sprite manipulation functions, including:
  - Rotation, scaling, and tinting
  - Creating outlines and shadows
  - Applying special effects like pixelation, glitch, and wave distortions

**Configuration:** May require additional system-level dependencies for installation, especially on certain operating systems.

## Dependency Management

The project uses npm for dependency management. To install all required dependencies, run:

```bash
npm install
```

This will install all packages listed in the `package.json` file.

## Version Compatibility

The project is configured to use specific versions of each dependency to ensure compatibility:

```json
"dependencies": {
  "axios": "^1.6.1",
  "jimp": "^0.22.10",
  "openai": "^4.17.4",
  "sharp": "^0.32.6"
}
```

It's recommended to use these exact versions or compatible updates to avoid potential issues with breaking changes in newer releases.

## Additional Notes

- The project is set up as an ES module, as indicated by `"type": "module"` in the `package.json` file. This allows the use of `import` statements instead of `require()`.
- No development dependencies are currently specified in the project.

For more detailed information on how these dependencies are used within the project, refer to the specific function documentation and the main application code.

  