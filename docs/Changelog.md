

  # Changelog for avb-is-me/reflex

## [0.6.3] - 2024-10-18

### Changed
- Updated version to 0.6.3 in pyproject.toml

### Fixed
- Modified `IndividualEventType` in `reflex/event.py` to use `Var[Any]` instead of `Var`

### Added
- Automatically set `state_manager_mode` to REDIS if Redis URL is parsed in `reflex/state.py`

### Improved
- Enhanced type handling in `reflex/vars/sequence.py` for the `foreach` method

## [0.6.3a4] - 2024-10-18

### Changed
- Updated version to 0.6.3a4 in pyproject.toml

## [0.6.3a3] - 2024-10-17

### Changed
- Updated version to 0.6.3a3 in pyproject.toml

## [0.6.3a2] - 2024-10-16

### Changed
- Updated version to 0.6.3a2 in pyproject.toml

### Improved
- Enhanced event handling and type checking in `reflex/event.py`
- Improved `EventVar` and `EventChainVar` implementations
- Added tests for event var data in `tests/units/test_event.py`

### Fixed
- Corrected state manager creation logic in `reflex/state.py`

## [0.6.3a1] - 2024-10-14

### Changed
- Updated version to 0.6.3a1 in pyproject.toml

### Improved
- Modified `HighLevelRadioGroup` component to use "row" as default direction instead of "column"

### CI/CD
- Updated GitHub Actions workflows to use Ubuntu 22.04

## [0.6.3dev1] - 2024-10-15

### Improved
- Enhanced style handling for `ObjectVar` types in `reflex/style.py`

This changelog summarizes the key changes and improvements made to the avb-is-me/reflex repository, focusing on version updates, bug fixes, and feature enhancements across different components of the project.

  