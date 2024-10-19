

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- `event` import added to top-level namespace
- Support for generic arguments in custom dict types

### Changed
- Updated Node.js version to 20.18.0
- Changed default direction of RadioGroup to "row"
- Updated several library versions including react-dropzone, gridjs, plotly.js
- Improved type hinting and event handling across multiple components
- Modified state management logic for disk and memory modes

### Fixed
- Fixed issue with `figure_out_type` function for custom dict types
- Resolved Windows hot reload lifespan hack cancellation
- Corrected npm path resolution when using system Node

## [0.6.2dev1] - 2024-10-04

### Added
- Support for Literal types in `guess_type` method

### Changed
- Updated Poetry version to 1.8.3 in GitHub Actions

### Fixed
- Resolved issue with state reset not handling backend vars

## [Unreleased]

### Added
- New `StateManagerMode` enum for configuring state management
- Dynamic state container (`reflex/istate/dynamic.py`)

### Changed
- Improved error handling and type checking across multiple components
- Updated several component props and event handlers for better type safety
- Refactored clipboard, debounce, and upload components
- Modified `LiteralDirection` to only include "x" and "y"

### Fixed
- Corrected `get_upload_url` return type
- Fixed `update_json_file` logic for empty files
- Improved handling of Union types in var operations

### Security
- Updated dependencies to address potential vulnerabilities

  