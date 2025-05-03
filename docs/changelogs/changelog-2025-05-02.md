<response>
# Changelog

## [Unreleased] - 2025-05-02

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Changed
- Enhanced `generateEnvironmentSprites()` function
  - Added support for custom element count, size, style, padding, and theme
  - Improved tile generation with clear separation between elements
  - Added metadata to the returned object, including element count, theme, and tile data

### Refactored
- Major refactoring of the main codebase
  - Moved sprite generation functions into a separate module (`spriteAI/index.js`)
  - Improved code organization and modularity

### Other
- Added a test file `.github-write-test`
- Updated package.json with project details and dependencies

### Developer Notes
- The changelog now includes changes from April 18th to May 2nd, 2025
- Significant code restructuring has taken place, potentially affecting how developers interact with the library
- New sprite generation capabilities have been added, expanding the toolkit for game developers

</response># Changelog

## [Unreleased] - 2025-05-02

### Added
- New function `generateItemSprites()` for creating game item sprite collections
  - Supports various options including item count, size, style, padding, item type, and background
  - Generates a sprite sheet with multiple items arranged in a grid
  - Returns both the original image URL and the processed item sheet
  - Includes metadata about the generated sprites

### Changed
- Enhanced `generateEnvironmentSprites()` function
  - Added support for custom element count, size, style, padding, and theme
  - Improved tile generation with clear separation between elements
  - Added metadata to the returned object, including element count, theme, and tile data

### Refactored
- Major refactoring of the main codebase
  - Moved sprite generation functions into a separate module (`spriteAI/index.js`)
  - Improved code organization and modularity

### Other
- Added a test file `.github-write-test`
- Updated package.json with project details and dependencies

### Developer Notes
- The changelog now includes changes from April 18th to May 2nd, 2025
- Significant code restructuring has taken place, potentially affecting how developers interact with the library
- New sprite generation capabilities have been added, expanding the toolkit for game developers