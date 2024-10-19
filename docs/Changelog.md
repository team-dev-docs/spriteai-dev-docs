

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- `identity_event` and `empty_event` event handlers
- Support for generic arguments in custom dict types

### Changed
- Updated various component event handlers to use new `identity_event` and `empty_event`
- Changed default direction of `HighLevelRadioGroup` from "column" to "row"
- Updated Bun install URL
- Improved type handling for `ObjectVar` in style updates
- Switched order of disk and memory state manager modes

### Fixed
- Fixed JSON file reading when file is empty
- Corrected `figure_out_type` function to properly handle `Var` instances and classes with generic arguments

### Dependencies
- Updated Node.js to 20.18.0
- Updated various npm package versions including react-dropzone, gridjs, plotly.js, and others
- Updated Poetry version to 1.8.3

## [0.6.2dev1] - 2024-10-04

### Added
- Support for Literal types in `guess_type` method

### Fixed
- Improved error handling in frontend process output consumption

### Changed
- Updated pyproject.toml version

## [0.6.1] - 2024-10-07

### Added
- New `StateManagerMode` enum for configuring state management
- `Field` type for state variables

### Changed
- Refactored state reset logic to include backend variables
- Updated various Recharts component props and documentation

### Fixed
- Corrected behavior of `use_system_node` in npm path resolution
- Fixed cancellation handling in Windows hot reload lifespan hack

### Removed
- Removed explicit handling for `StateManagerDisk` in testing

  