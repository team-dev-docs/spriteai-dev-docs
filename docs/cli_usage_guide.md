

  # Parselmouth CLI Guide

Parselmouth is a tool for generating conda-to-PyPI package mappings. This guide will walk you through using the Parselmouth command-line interface (CLI) to perform various mapping-related tasks.

## Overview

Parselmouth's functionality can be divided into three main parts:

1. Updater Producer - Generates the subdir@letter list
2. Updater - Uses the subdir@letter list to generate the mapping
3. Updater Merger - Merges partial mappings into a single mapping file

## Commands

### updater-producer

Generates the subdir@letter list.

```bash
parselmouth updater-producer [OPTIONS]
```

Options:
- `--output-dir TEXT`: Directory to save output (default: "output_index")
- `--check-if-exists / --no-check-if-exists`: Check if files already exist (default: True)
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--subdir TEXT`: Specific subdirectory to process

Example:
```bash
parselmouth updater-producer --output-dir my_index --channel conda-forge
```

### updater

Retrieves packages based on subdir@letter and saves partial mappings.

```bash
parselmouth updater SUBDIR_LETTER [OPTIONS]
```

Arguments:
- `SUBDIR_LETTER`: Subdir and letter combination (e.g., "noarch@s")

Options:
- `--output-dir TEXT`: Directory with saved index (default: "output_index")
- `--partial-output-dir TEXT`: Directory to save partial mappings (default: "output")
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--upload / --no-upload`: Enable uploading to S3 (default: False)

Example:
```bash
parselmouth updater noarch@s --partial-output-dir partial_mappings
```

### updater-merger

Merges all partial mappings into a single mapping file.

```bash
parselmouth updater-merger [OPTIONS]
```

Options:
- `--output-dir TEXT`: Directory with partial mappings (default: "output")
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--upload / --no-upload`: Enable uploading to S3 (default: False)

Example:
```bash
parselmouth updater-merger --output-dir merged_mappings --upload
```

### update-mapping-legacy

Updates compressed files in the repository (legacy version).

```bash
parselmouth update-mapping-legacy
```

### update-mapping

Updates compressed files in the repository.

```bash
parselmouth update-mapping [OPTIONS]
```

Options:
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)

Example:
```bash
parselmouth update-mapping --channel main
```

### check-one

Checks mapping for a single package.

```bash
parselmouth check-one PACKAGE_NAME SUBDIR [OPTIONS]
```

Arguments:
- `PACKAGE_NAME`: Full package name (e.g., "warp-lang-1.3.0-cpu38_h19ae9ab_0.conda")
- `SUBDIR`: Subdirectory for the package

Options:
- `--backend TEXT`: Backend to use (oci, libcfgraph, or streamed)
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--upload / --no-upload`: Upload or overwrite existing mapping (default: False)

Example:
```bash
parselmouth check-one warp-lang-1.3.0-cpu38_h19ae9ab_0.conda linux-64 --backend oci --upload
```

### remove

Yanks and removes packages from the index.

```bash
parselmouth remove SUBDIR [OPTIONS]
```

Arguments:
- `SUBDIR`: Subdirectory for the package

Options:
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--dry-run / --no-dry-run`: Perform a dry run without uploading results (default: True)

Example:
```bash
parselmouth remove linux-64 --no-dry-run
```

## Conclusion

This guide covers the main commands available in the Parselmouth CLI. Each command plays a specific role in the conda-to-PyPI mapping process, from generating initial lists to updating and managing mappings. Use these commands to efficiently create, update, and maintain your conda-PyPI mappings.

  