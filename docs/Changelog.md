

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- Support for `data-` and `aria-` attributes on components
- `event` decorator exported at top level
- New `identity_event` and `empty_event` helpers for event handlers

### Changed
- Updated various component event handlers to use new event helpers
- Changed default direction of `HighLevelRadioGroup` from "column" to "row"
- Updated several dependency versions including Tailwind, react-dropzone, and others
- Improved type handling for Vars and ObjectVars in style processing
- Modified state manager creation logic

### Fixed
- Fixed issue with JSON file reading in path operations
- Corrected handling of generic types in `figure_out_type`
- Fixed `is_backend_base_variable` to handle dynamic substates

## [0.6.2dev1] - 2024-10-04

### Added
- Support for Literal types in state variables

### Changed
- Updated pyproject.toml version

### Fixed
- Improved error handling in Windows hot reload

## [Unreleased]

### Added
- New `StateManagerMode` enum for configuring state management
- Support for custom dict types with generic arguments

### Changed
- Updated Node.js version to 20.18.0
- Modified Bun installation URL
- Improved handling of Union types in Vars
- Updated GitHub Actions to use Ubuntu 22.04

### Fixed
- Corrected logic for resetting backend vars in state
- Fixed issue with clipboard paste event handling

### Removed
- Removed unused state manager imports in testing module

  