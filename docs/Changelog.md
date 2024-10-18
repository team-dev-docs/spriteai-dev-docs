

  # Changelog

## [0.6.3] - 2024-10-18

### Changed
- Updated version to 0.6.3 in pyproject.toml

### Fixed
- Fixed type hint for `IndividualEventType` in event.py

## [0.6.3a4] - 2024-10-18

### Changed
- Updated version to 0.6.3a4 in pyproject.toml

### Added
- Added automatic Redis state manager detection based on URL

## [0.6.3a3] - 2024-10-17

### Changed
- Updated version to 0.6.3a3 in pyproject.toml

### Fixed
- Fixed type inference in `foreach` method for sequence vars

## [0.6.3a2] - 2024-10-16

### Changed
- Updated version to 0.6.3a2 in pyproject.toml

### Fixed
- Improved event type handling for various components (ErrorBoundary, DataEditor, ReactPlayer, SunEditor)
- Replaced lambda functions with `empty_event` in component event triggers
- Updated `JavascriptInputEvent` to allow arbitrary attribute access two levels deep (temporary fix)

### Added
- Added tests for event var data preservation in EventSpec and EventChain

### Refactored
- Moved `stop_propagation` and `prevent_default` event chains to use `empty_event`

  