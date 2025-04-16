# Changelog

## \[Unreleased]

### Added

* New SDK function `fetchAvailableAnimationStates()` to get available animation states

* New function `generateLandscapeSprite()` for creating landscape scenes

* New function `generateEnvironmentSprites()` for creating environment sprite tilesets

* Enhanced `generateCharacterSpritesheet()` function with more options and improved metadata

### Changed

* Refactored and improved the `generateCharacterSpritesheet()` function for better flexibility and output

* Enhanced options handling in sprite generation methods

* Updated `removeBackgroundColor()` function with improved color replacement logic

### Features

* Added border generation capability to sprites with `generateSpriteWithBorder()` method

* Implemented new elemental and mechanical sprite variations with `createElementalVariation()` and `createMechaSpriteVariation()`

* Added weather effects to sprites with `addWeatherEffect()` method

* Introduced lighting variations for sprites with `createLightingVariation()` method

### Performance

* Optimized image processing functions for better efficiency

### Code Refactoring

* Moved utility functions and sprite generation methods into a dedicated `sprite` object for better organization

* Consolidated related sprite manipulation functions into single methods for easier use

### Documentation

* Added comments and improved existing documentation for various functions

* Updated function descriptions to better explain their purposes and parameters

### Development

* Added a test file `.github-write-test` for GitHub write operations

### Dependencies

* Updated project dependencies in `package.json`

* Specified required Node.js packages including axios, jimp, openai, and sharp

Note: This changelog incorporates both the new changes from the commits and the previously listed additions in the existing changelog to provide a comprehensive overview of recent updates to the spriteAI project.
