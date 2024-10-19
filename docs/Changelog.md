

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- `identity_event` and `empty_event` helpers for event handlers
- Support for generic arguments in custom dict classes

### Changed
- Updated Node.js version to 20.18.0
- Changed default radio group direction to "row"
- Updated several npm package versions
- Improved type handling for Vars and events
- Refactored state manager mode logic

### Fixed
- Fixed issue with empty JSON files in `update_json_file` function
- Corrected `figure_out_type` function to handle Var types properly

## [0.6.3dev1] - 2024-10-04

### Added
- Support for Literal types in `guess_type` method

### Changed
- Updated pyproject.toml version

### Fixed
- Fixed Windows hot reload lifespan hack to handle CancelledError

## [0.6.2dev1] - 2024-10-04

### Changed
- Updated pyproject.toml version

  