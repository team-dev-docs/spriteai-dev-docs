

  # Changelog

## [0.6.3a1] - 2024-10-14

### Added
- New `SpecialAttributes` enum for handling special component attributes
- `event` function imported directly in `reflex/__init__.py`
- Support for generic arguments in custom dict types

### Changed
- Updated various library versions:
  - react-dropzone to 14.2.9
  - @glideapps/glide-data-grid to 6.0.3
  - marked to 14.1.2
  - gridjs-react to 6.1.1
  - gridjs to 6.2.0
  - plotly.js to 2.35.2
  - @radix-ui/react-form to 0.1.0
  - react-player to 2.16.0
  - sonner to 1.5.0
  - tailwindcss to 3.4.13
- Default direction for `HighLevelRadioGroup` changed from "column" to "row"
- Updated Node.js version to 20.18.0
- Simplified event handler definitions using new `identity_event` and `empty_event` helpers
- Changed Bun installation URL

### Fixed
- Fixed handling of Union types in Var system
- Corrected logic for reading JSON files
- Improved error handling in frontend process output reading

### Development
- Updated Poetry version to 1.8.3 in GitHub Actions
- Switched to Ubuntu 22.04 for certain GitHub Actions workflows

## [0.6.2dev1] - 2024-10-04

### Added
- Support for Literal types in state variables

### Fixed
- Improved Windows hot reload functionality

### Removed
- Removed unnecessary state manager initialization for disk-based storage in testing

  