

  # Changelog for avb-is-me/reflex

## [Unreleased]

### Added
- Support for Redis URL parsing in state manager creation
- Improved type hinting for event callbacks
- New `empty_event` function for use in event chains

### Changed
- Modified `EventVar` and `EventChainVar` to use `VarOperationCall` and `ArgsFunctionOperation` respectively
- Updated `get_event_triggers` method in various components to use `empty_event`
- Improved handling of `on_error` event in ErrorBoundary component
- Refactored event handling in multiple components for consistency
- Updated type annotations for various event handlers across different components

### Fixed
- Corrected state manager mode selection logic
- Fixed node and npm path resolution when using system installations

### Removed
- Removed `demo` command from CLI

### Developer Experience
- Improved type annotations for better IDE support
- Enhanced event handling consistency across components

### Performance
- Optimized event chain creation and handling

### Refactoring
- Reorganized event-related code for better maintainability
- Simplified event trigger definitions in multiple components

### Testing
- Added new tests for event var data handling

This changelog summarizes the key changes made to the avb-is-me/reflex repository. The updates focus on improving event handling, enhancing type support, fixing state management issues, and overall code refactoring for better performance and maintainability.

  