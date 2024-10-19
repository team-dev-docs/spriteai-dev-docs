

  # Changelog

## [Unreleased]

### Added
- New `items` method as an alias for `entries` on `ObjectVar`
- Support for `Field` type in state vars
- Reset functionality for backend vars in state

### Changed
- Updated several dependencies to newer versions:
  - Poetry to 1.8.3
  - React-dropzone to 14.2.9
  - Glide-data-grid to 6.0.3
  - Marked to 14.1.2
  - Gridjs and gridjs-react
  - Plotly.js to 2.35.2
  - Radix UI form to 0.1.0
  - React-player to 2.16.0
  - Sonner to 1.5.0
  - Tailwindcss to 3.4.13
- Improved type checking and comparisons in several files
- Updated Node.js version to 20.18.0
- Modified `get_npm_path()` function to consider system Node when determining npm path

### Fixed
- Handling of Literal types in `guess_type` method
- Windows hot reload lifespan hack to handle CancelledError
- Indexing and slicing operations on string vars

### Development
- Updated pre-commit hooks and ruff version
- Removed integration folder from pyright args
- Modified test cases to align with recent changes

  