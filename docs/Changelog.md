

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- Support for `data-` and `aria-` attributes in components
- New `event` decorator for simplifying event handler definitions

### Changed
- Updated Bun install script URL
- Changed default direction of `HighLevelRadioGroup` from "column" to "row"
- Updated several npm package versions including react-dropzone, gridjs, plotly.js
- Improved type hinting and event handler specifications across many components
- Refactored event handling in various components to use new `identity_event` and `empty_event` helpers

### Fixed
- Fixed an issue with state reset not properly handling backend vars
- Corrected the behavior of `figure_out_type` for custom dict types
- Addressed type issues with Union types in var operations

## [0.6.2dev1] - 2024-10-04

### Added
- Support for Literal types in var type guessing

### Changed
- Updated pyproject.toml version to 0.6.2dev1

### Fixed
- Improved error handling in Windows hot reload lifespan hack

## [Unreleased]

### Added
- New StateManagerMode enum for configuring state management
- Support for dynamic generation of states

### Changed
- Refactored state management to support disk, memory, and redis modes
- Updated Node.js version to 20.18.0
- Improved handling of generic types and custom dict subclasses

### Fixed
- Corrected behavior of update_json_file when dealing with empty files
- Addressed issues with var type inference for object attributes

### Security
- Updated several dependencies to their latest versions

  