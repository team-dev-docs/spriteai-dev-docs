

  # Sprite Object Documentation

The `sprite` object provides a powerful set of methods for generating and manipulating sprite images programmatically. This guide covers the key methods, their parameters, and return values.

## Core Generation Methods

### generateSprite(description, options)

Generates a sprite based on a text description.

**Parameters:**
- `description`: String describing the desired sprite
- `options`: Object with optional parameters
  - `size`: String, image size (default: "1024x1024")
  - `save`: Boolean, whether to save the image file
  - `iterations`: Number, how many variations to generate
  - `rotate`: Number, degrees to rotate the sprite
  - `tint`: Object, color to tint the sprite
  - `scale`: Number, factor to scale the sprite
  - `generateMetadata`: Boolean, whether to include metadata

**Returns:** Object containing:
- `messages`: Object with frame size information
- `image`: Base64 encoded image data
- `metadata`: Object with sprite metadata (if generateMetadata is true)

### generatePixelArt(description, options)

Generates pixel art sprites.

**Parameters:**
- `description`: String describing the desired pixel art
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `image`: Base64 encoded pixel art image
- `url`: URL of the generated image

### generateIsometric(description, options)

Generates isometric-style sprites.

**Parameters:** Same as generatePixelArt

**Returns:** Same as generatePixelArt

## Advanced Generation Methods

### generateAnimatedEmoji(description, options)

Generates a 4-frame animated emoji.

**Parameters:** Same as generatePixelArt

**Returns:** Same as generatePixelArt

### generateRetroConsole(description, consoleType, options)

Generates sprites in the style of specific retro game consoles.

**Parameters:**
- `description`: String describing the desired sprite
- `consoleType`: String specifying the console (e.g. "genesis", "msx", "commodore64")
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Same as generatePixelArt

### generateCharacterSpritesheet(description, options)

Generates a full character spritesheet with multiple animation states.

**Parameters:**
- `description`: String describing the character
- `options`: Object with optional parameters
  - `states`: Array of animation state names
  - `framesPerState`: Number of frames per animation state
  - `size`: String, output size
  - `style`: String, art style
  - `padding`: Number, padding between sprites
  - `direction`: String, base direction of character
  - `save`: Boolean, whether to save the spritesheet file

**Returns:** Object containing:
- `original`: URL of the generated image
- `spritesheet`: Base64 encoded spritesheet image
- `metadata`: Object with detailed spritesheet information

## Effect and Variation Methods

### createElementalVariation(description, elementType, options)

Creates an elemental variation of a sprite (e.g. fire, water, earth).

**Parameters:**
- `description`: String describing the base sprite
- `elementType`: String specifying the element (e.g. "fire", "water", "earth")
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `original`: Base64 encoded original sprite
- `elemental`: Base64 encoded elemental variation
- `withGlow`: Base64 encoded sprite with added glow effect
- `settings`: Object with applied effect settings

### addLightingVariation(description, lightingOptions, options)

Applies dynamic lighting effects to a sprite.

**Parameters:**
- `description`: String describing the sprite
- `lightingOptions`: Object with lighting parameters
  - `lightColor`: Object with r,g,b values
  - `intensity`: Number, light strength
  - `direction`: String, light source direction
  - `ambient`: Number, ambient light level
  - `shadows`: Boolean, enable dynamic shadows
  - `colorize`: Boolean, colorize the light
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `original`: Base64 encoded original sprite
- `lighted`: Base64 encoded sprite with lighting applied
- `settings`: Object with applied lighting settings

### addWeatherEffect(description, weatherOptions, options)

Adds weather effects like rain, snow, or fog to a sprite.

**Parameters:**
- `description`: String describing the sprite
- `weatherOptions`: Object with weather parameters
  - `type`: String, weather type (e.g. "rain", "snow", "fog")
  - `intensity`: Number, effect intensity
  - `frames`: Number, animation frames to generate
  - `speed`: Number, animation speed
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `original`: Base64 encoded original sprite
- `weatherFrames`: Array of Base64 encoded weather effect frames
- `settings`: Object with applied weather effect settings

## Utility Methods

### splitSpriteSheet(imageBuffer, columns, rows, options)

Splits a spritesheet into individual frame images.

**Parameters:**
- `imageBuffer`: Buffer containing the spritesheet image
- `columns`: Number of columns in the spritesheet
- `rows`: Number of rows in the spritesheet
- `options`: Object with optional parameters

**Returns:** Object containing:
- `frames`: Array of Buffers, each containing a single frame
- `metadata`: Object with frame and spritesheet information

### createParticleEffect(description, particleCount, options)

Generates particle effects based on a sprite.

**Parameters:**
- `description`: String describing the base sprite
- `particleCount`: Number of particles to generate
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `baseSprite`: Base64 encoded original sprite
- `particles`: Array of Base64 encoded particle images

### addOutline(description, outlineOptions, options)

Adds an outline effect to a sprite.

**Parameters:**
- `description`: String describing the sprite
- `outlineOptions`: Object with outline parameters
  - `color`: Object with r,g,b,alpha values
  - `thickness`: Number, outline thickness
- `options`: Object with optional parameters (same as generateSprite)

**Returns:** Object containing:
- `original`: Base64 encoded original sprite
- `outlined`: Base64 encoded sprite with outline added

## Conclusion

This guide covers the core functionality of the `sprite` object. For more detailed information on specific methods or advanced usage, please refer to the inline code comments or reach out to the development team.

  