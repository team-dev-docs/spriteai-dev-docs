

  # Yank Configuration System

The yank configuration system in Parselmouth allows excluding certain packages from the mapping process. This is useful for handling edge cases where package metadata may be inconsistent or missing across different platforms and channels.

## Purpose

Some conda packages, especially those originating from PyPI, may have inconsistent or missing metadata (.dist-info or .egg-info directories) across different platforms or channels. The yank system provides a way to explicitly exclude these problematic packages from Parselmouth's mapping process, allowing tools to fall back to compressed mapping data instead.

## Configuration

The yank configuration is defined in a YAML file, typically named `yank.yaml`. The default location is in the root of the Parselmouth project.

### Structure

The `yank.yaml` file has the following structure:

```yaml
packages:
  - name: package_name
    platforms:
      - platform1
      - platform2
    channels:
      - channel1
      - channel2
  - name: another_package
    platforms:
      - platform3
    channels:
      - channel3
```

- `name`: The name of the package to exclude
- `platforms`: List of platforms (subdirs) where the package should be excluded
- `channels`: List of channels where the package should be excluded

## Usage

The `YankConfig` class in `yank.py` handles loading and interpreting the yank configuration:

```python
from parselmouth.internals.yank import YankConfig

# Load the configuration
config = YankConfig.load_config()

# Check if a package should be yanked
should_yank = config.should_yank(artifact, subdir, channel)
```

The `should_yank` method takes three parameters:
- `artifact`: An `ArtifactData` object representing the package
- `subdir`: The platform/subdir of the package
- `channel`: The channel of the package

It returns `True` if the package should be excluded from mapping based on the configuration.

## Example

To exclude the `pyqt` package on the `osx-arm64` platform from the `conda-forge` channel:

```yaml
packages:
  - name: pyqt
    platforms:
      - osx-arm64
    channels:
      - conda-forge
```

This configuration would cause Parselmouth to skip mapping for PyQt packages matching these criteria, allowing tools to use alternative methods for obtaining package information.

  