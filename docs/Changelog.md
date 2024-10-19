

  # Changelog

## [Unreleased]

### Added
- Support for Redis URL parsing in state manager creation
- Overloaded `__get__` method for `EventCallback` to provide better type hints
- New tests for event var data

### Changed
- Updated `IndividualEventType` to use `Var[Any]` instead of just `Var`
- Modified `LiteralEventVar` and `LiteralEventChainVar` to use `VarOperationCall` and `ArgsFunctionOperation` respectively
- Refactored `EventChainVar` creation process
- Updated `get_event_triggers` method in various components to use `empty_event` instead of `lambda: []`
- Modified `EventType` annotations in several component files

### Removed
- Removed `demo` command from CLI
- Removed cached property implementations in `LiteralEventVar` and `LiteralEventChainVar`

### Fixed
- Corrected the order of state manager mode checks in `create` method
- Fixed `JavascriptInputEvent` deprecation to allow arbitrary attribute access two levels deep

### Deprecated
- Deprecated `JavascriptInputEvent`, to be removed in version 0.7.0

  