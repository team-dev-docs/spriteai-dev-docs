

  # Parselmouth CLI Commands

Parselmouth provides several CLI commands for generating and managing conda-to-PyPI package mappings. This page details each available command, its purpose, arguments, and usage examples.

## Main Commands

### updater-producer

Generates the subdir@letter list used by the updater.

**Usage:**
```
parselmouth updater-producer [OPTIONS]
```

**Options:**
- `--output-dir TEXT`: Directory to save output (default: "output_index")
- `--check-if-exists / --no-check-if-exists`: Check if files already exist (default: True)
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--subdir TEXT`: Specific subdir to process (optional)

**Example:**
```
parselmouth updater-producer --output-dir my_index --channel main
```

### updater

Retrieves packages based on subdir@letter and saves partial mappings.

**Usage:**
```
parselmouth updater SUBDIR_LETTER [OPTIONS]
```

**Arguments:**
- `SUBDIR_LETTER`: Subdir and letter combination (e.g. "noarch@s")

**Options:**
- `--output-dir TEXT`: Index directory (default: "output_index")
- `--partial-output-dir TEXT`: Directory for partial mappings (default: "output")
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--upload / --no-upload`: Enable uploading to S3 (default: False)

**Example:**
```
parselmouth updater noarch@s --partial-output-dir partial_maps --upload
```

### updater-merger

Merges partial mappings into a single file.

**Usage:**
```
parselmouth updater-merger [OPTIONS]
```

**Options:**
- `--output-dir TEXT`: Directory with partial mappings (default: "output")
- `--channel [conda-forge|main]`: Conda channel used (default: conda-forge)
- `--upload / --no-upload`: Enable uploading to S3 (default: False)

**Example:**
```
parselmouth updater-merger --output-dir merged_maps --upload
```

## Additional Commands

### update-mapping-legacy

Updates compressed files in the repository (legacy method).

**Usage:**
```
parselmouth update-mapping-legacy
```

### update-mapping

Updates compressed files in the repository (current method).

**Usage:**
```
parselmouth update-mapping [OPTIONS]
```

**Options:**
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)

**Example:**
```
parselmouth update-mapping --channel main
```

### check-one

Checks mapping for a single package.

**Usage:**
```
parselmouth check-one PACKAGE_NAME SUBDIR [OPTIONS]
```

**Arguments:**
- `PACKAGE_NAME`: Full package name (e.g. "warp-lang-1.3.0-cpu38_h19ae9ab_0.conda")
- `SUBDIR`: Subdir for the package

**Options:**
- `--backend TEXT`: Backend to use (oci, libcfgraph, or streamed)
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--upload / --no-upload`: Upload or overwrite existing mapping (default: False)

**Example:**
```
parselmouth check-one numpy-1.21.0-py39h20f2e39_0.tar.bz2 linux-64 --backend oci --upload
```

### remove

Yanks and removes packages from the index.

**Usage:**
```
parselmouth remove SUBDIR [OPTIONS]
```

**Arguments:**
- `SUBDIR`: Subdir for package removal

**Options:**
- `--channel [conda-forge|main]`: Conda channel to use (default: conda-forge)
- `--dry-run / --no-dry-run`: Perform a dry run without actual removal (default: True)

**Example:**
```
parselmouth remove linux-64 --channel conda-forge --no-dry-run
```

  