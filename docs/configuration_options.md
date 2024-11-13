

  # Configuring Parselmouth

Parselmouth provides several configuration options to customize its behavior. This page covers the main configuration options, including environment variables, channel selection, and output directories.

## Environment Variables

Parselmouth uses the following environment variables:

- `R2_PREFIX_ACCOUNT_ID` - The account ID for Cloudflare R2 storage
- `R2_PREFIX_ACCESS_KEY_ID` - Access key ID for Cloudflare R2
- `R2_PREFIX_SECRET_ACCESS_KEY` - Secret access key for Cloudflare R2  
- `R2_PREFIX_BUCKET` - Name of the R2 bucket to use (defaults to "conda")

You can set these using a `.env` file or by exporting them in your shell:

```bash
export R2_PREFIX_ACCOUNT_ID=your_account_id
export R2_PREFIX_ACCESS_KEY_ID=your_access_key
export R2_PREFIX_SECRET_ACCESS_KEY=your_secret_key
export R2_PREFIX_BUCKET=your_bucket_name
```

## Channel Selection

Parselmouth supports different conda channels. You can specify the channel using the `channel` parameter:

```python
from parselmouth.internals.channels import SupportedChannels

# Use conda-forge channel
channel = SupportedChannels.CONDA_FORGE

# Use PyTorch channel  
channel = SupportedChannels.PYTORCH
```

## Output Directories

You can customize the output directories for Parselmouth:

- `output_dir` - Directory for the full index file
- `partial_output_dir` - Directory for partial index files

Example:

```python
output_dir = "custom_index"
partial_output_dir = "partial_index"

main(
    subdir_letter="linux-64@a",
    output_dir=output_dir,
    partial_output_dir=partial_output_dir,
    channel=SupportedChannels.CONDA_FORGE
)
```

This will output the full index to `custom_index/conda-forge/index.json` and partial indexes to `partial_index/conda-forge/`.

## Upload Configuration

By default, Parselmouth does not upload processed packages to S3. You can enable uploading by setting the `upload` parameter to `True`:

```python 
main(
    subdir_letter="linux-64@a",
    channel=SupportedChannels.CONDA_FORGE,
    upload=True
)
```

## Yank Configuration

Parselmouth supports yanking (excluding) certain packages based on a configuration. You can customize this by modifying the `YankConfig` class.

## Subdir and Letter Filtering

You can filter processing to specific subdirectories and package name prefixes:

```python
main(
    subdir_letter="linux-64@a",  # Process linux-64 packages starting with 'a'
    channel=SupportedChannels.CONDA_FORGE
)
```

## Full Configuration Example

Here's an example combining multiple configuration options:

```python
from parselmouth.internals.updater import main
from parselmouth.internals.channels import SupportedChannels

main(
    subdir_letter="linux-64@a",
    output_dir="custom_index",
    partial_output_dir="partial_index",
    channel=SupportedChannels.CONDA_FORGE,
    upload=True
)
```

This configuration will:
- Process packages for linux-64 starting with 'a'
- Use the conda-forge channel
- Output the full index to `custom_index/conda-forge/index.json`
- Output partial indexes to `partial_index/conda-forge/`
- Upload processed packages to S3

Remember to set the necessary environment variables for S3/R2 access before running with `upload=True`.

  