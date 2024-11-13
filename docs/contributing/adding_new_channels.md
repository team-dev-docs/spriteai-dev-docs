

  # Adding Support for New Channels in Parselmouth

This guide outlines the steps to add support for new channels in Parselmouth. Adding new channels allows Parselmouth to work with additional package repositories beyond the default ones.

## Steps to Add a New Channel

1. Update the `SupportedChannels` enum
2. Add channel URL(s) to `ChannelUrls`
3. (Optional) Implement channel-specific logic

### 1. Update SupportedChannels Enum

In `src/parselmouth/internals/channels.py`, add the new channel to the `SupportedChannels` enum:

```python
class SupportedChannels(StrEnum):
    CONDA_FORGE = "conda-forge"
    PYTORCH = "pytorch"
    BIOCONDA = "bioconda"
    NEW_CHANNEL = "new-channel"  # Add the new channel here
```

### 2. Add Channel URLs

In the same file, add the URL(s) for the new channel to the `ChannelUrls._ChannelUrls` dictionary:

```python
class ChannelUrls:
    _ChannelUrls: dict[SupportedChannels, list[Url]] = {
        SupportedChannels.CONDA_FORGE: ["https://conda.anaconda.org/conda-forge/"],
        SupportedChannels.PYTORCH: ["https://conda.anaconda.org/pytorch/"],
        SupportedChannels.BIOCONDA: ["https://conda.anaconda.org/bioconda/"],
        SupportedChannels.NEW_CHANNEL: ["https://url.for.new.channel/"],  # Add the new channel URL(s) here
    }
```

### 3. Implement Channel-Specific Logic (Optional)

If the new channel requires specific handling or has a different structure, you may need to implement channel-specific logic in relevant functions. For example, in `src/parselmouth/internals/conda_forge.py`:

- Update `get_all_archs_available()` if the new channel has a different method for listing available architectures.
- Modify `get_subdir_repodata()` if the new channel's repodata structure differs.
- Adjust `get_artifact_info()` if artifact information retrieval needs to be handled differently for the new channel.

## Considerations

- Ensure the new channel's URL is reliable and maintained.
- Test thoroughly with the new channel to ensure all Parselmouth features work correctly.
- Update any relevant documentation or user guides to include information about the new channel.
- Consider backward compatibility and how adding a new channel might affect existing workflows.

## Example: Adding a Hypothetical Channel

Let's add support for a hypothetical channel called "custom-repo":

1. Update `SupportedChannels`:

```python
class SupportedChannels(StrEnum):
    CONDA_FORGE = "conda-forge"
    PYTORCH = "pytorch"
    BIOCONDA = "bioconda"
    CUSTOM_REPO = "custom-repo"
```

2. Add the channel URL:

```python
class ChannelUrls:
    _ChannelUrls: dict[SupportedChannels, list[Url]] = {
        SupportedChannels.CONDA_FORGE: ["https://conda.anaconda.org/conda-forge/"],
        SupportedChannels.PYTORCH: ["https://conda.anaconda.org/pytorch/"],
        SupportedChannels.BIOCONDA: ["https://conda.anaconda.org/bioconda/"],
        SupportedChannels.CUSTOM_REPO: ["https://custom-repo.example.com/"],
    }
```

3. If needed, implement custom logic for the new channel in relevant functions.

After making these changes, Parselmouth will be able to work with packages from the "custom-repo" channel.

  