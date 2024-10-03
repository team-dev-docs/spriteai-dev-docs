

  # Sprite AI Documentation: Function Overview

## Introduction
Sprite AI is a powerful Node.js SDK that leverages advanced AI models to generate and manipulate graphical assets for game development and image processing. This document provides an overview of the key functions available in the Sprite AI toolkit.

## Core Functions

### generateSprite
Generates sprite sheets for character animations using AI models.

### generateHouseAsset
Creates 2D assets for houses or buildings in games using DALL-E 3.

### removeBackgroundColor
Removes a specific background color from an image, making it transparent.

### getUniqueColors
Extracts a palette of unique colors from an image for analysis or further processing.

### encodeImage
Converts image files into Base64 encoded strings for easy transmission or storage.

## Image Processing Functions

### Color Replacement
Replaces specific colors in images with transparency or other colors.

## Getting Started

To use Sprite AI, install the SDK via NPM:

```
npm install sprite-ai
```

Then import the desired functions in your Node.js project:

```javascript
import { sprite } from 'sprite-ai'
```

Ensure you have the necessary prerequisites, including an OpenAI API key for functions that use DALL-E or GPT models.

## Usage Examples

Examples for each function are provided in their respective documentation files. Refer to the individual function documentation for detailed usage instructions and parameters.

## Note on API Usage

Some functions in this SDK use OpenAI's models and may incur costs. Be mindful of your API usage and associated expenses when implementing these functions in your projects.

  