

  # Changelog

## [0.6.3] - 2024-10-18

### Changed
- Updated version to 0.6.3 in pyproject.toml

### Fixed
- Fixed type hint for `EventChainVar` in `reflex/event.py`

## [0.6.3a4] - 2024-10-18

### Changed
- Updated version to 0.6.3a4 in pyproject.toml

### Added
- Added logic to automatically set state manager mode to Redis if Redis URL is present

## [0.6.3a3] - 2024-10-17

### Changed
- Updated version to 0.6.3a3 in pyproject.toml

### Fixed
- Fixed type inference in `foreach` method for sequences

## [0.6.3a2] - 2024-10-16

### Changed
- Updated version to 0.6.3a2 in pyproject.toml

### Fixed
- Updated event type hints for various components
- Modified `JavascriptInputEvent` to allow arbitrary attribute access two levels deep

## [0.6.3a1] - 2024-10-14

### Changed
- Updated version to 0.6.3a1 in pyproject.toml
- Changed default direction of `HighLevelRadioGroup` to "row"

### Added
- Added `SpecialAttributes` enum for handling special component attributes
- Implemented `has_args` function to check for generic parameters in classes

### Fixed
- Fixed type checking for generic dict subclasses
- Added support for dynamic substates in type hint extraction

## [0.6.3dev1] - 2024-10-11

### Changed
- Updated Bun installer URL to use a custom script

### Fixed
- Fixed JSON file reading logic in `update_json_file` function
- Improved type checking for Union types in var operations

  