

  # Parselmouth Project Structure

The Parselmouth project is structured around the `src/parselmouth` directory, which contains the core functionality. This document provides an overview of the main Python files and subdirectories within this structure.

## Main Directory (`src/parselmouth`)

- `__init__.py`: Initializes the Parselmouth package, making its components available for import.

## CLI Subdirectory (`src/parselmouth/cli`)

- `cli.py`: Defines the command-line interface for Parselmouth using the Typer library. It includes various commands for different functionalities:
  - `updater_producer`: Generates the subdir@letter list
  - `updater`: Retrieves packages based on subdir@letter and saves partial mappings
  - `updater_merger`: Merges partial mappings into a single mapping file
  - `update_mapping_legacy` and `update_mapping`: Update compressed files in the repository
  - `check_one`: Checks mapping for a single package
  - `remove`: Yanks and removes packages from the index

## Internals Subdirectory (`src/parselmouth/internals`)

This subdirectory contains the core logic for Parselmouth's functionality:

- `updater.py`: Implements the main updating logic for package mappings:
  - Retrieves package information
  - Extracts artifact mappings
  - Handles uploading to S3 (when enabled)
  - Produces partial index files

- `updater_merger.py`: Handles merging partial mapping files:
  - Combines multiple partial mapping files
  - Updates the existing mapping data
  - Optionally uploads the merged index to S3

- `updater_producer.py`: Generates the initial list of packages to update:
  - Retrieves available architectures (subdirs) for a channel
  - Checks existing mappings to determine which packages need updating
  - Produces a list of subdir@letter combinations for processing

These files work together to create and maintain the conda-to-PyPI package mappings, with options for distributed processing and S3 integration for storage and retrieval of mapping data.

## Key Concepts

- **Subdir@letter**: A combination of a conda subdirectory (e.g., `noarch`, `linux-64`) and the first letter of package names, used to partition the updating process.
- **Partial mappings**: Intermediate mapping files generated for subsets of packages, later merged into a complete mapping.
- **S3 integration**: Optional functionality to store and retrieve mapping data from S3-compatible storage.

  