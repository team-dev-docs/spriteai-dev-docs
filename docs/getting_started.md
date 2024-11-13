

  # Getting Started with Parselmouth

Parselmouth is a command-line tool for generating and managing conda to PyPI package mappings. This guide will help new users get up and running with Parselmouth.

## Installation

To install Parselmouth:

```
pip install parselmouth
```

## Basic Usage

Parselmouth is used via the command line. The basic structure of commands is:

```
parselmouth [command] [options]
```

To see available commands:

```
parselmouth --help
```

## Key Features

Parselmouth has several core features:

### Updater Producer

Generates the subdir@letter list used for mapping:

```
parselmouth updater-producer --output-dir output_index --channel conda-forge
```

### Updater

Gets packages based on subdir@letter and saves partial mappings:

```  
parselmouth updater noarch@s --output-dir output_index --partial-output-dir output
```

### Updater Merger  

Merges partial mappings into a single file:

```
parselmouth updater-merger --output-dir output
```

### Check One Package

Check mapping for a single package:

```
parselmouth check-one package-name-1.0.0.tar.bz2 linux-64
```

### Remove Packages

Remove packages from the index:

```
parselmouth remove linux-64 --dry-run
```

## Overview of Main Features

- Generate conda to PyPI mappings
- Update mappings incrementally 
- Merge partial mappings
- Check individual package mappings
- Remove outdated packages
- Support for different conda channels
- Ability to upload results to S3

Parselmouth provides a powerful set of tools for managing conda/PyPI package mappings through an easy-to-use CLI interface. Refer to the help output of each command for more detailed usage information.

  