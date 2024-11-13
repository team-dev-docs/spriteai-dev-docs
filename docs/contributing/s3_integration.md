

  # Parselmouth S3 Integration

Parselmouth integrates with Amazon S3 or compatible object storage services (like Cloudflare R2) for storing and retrieving package mapping data. This document explains how the S3 integration is configured and used.

## Configuration

The S3 integration is configured using environment variables:

- `R2_PREFIX_ACCOUNT_ID` - The account ID for the S3-compatible service
- `R2_PREFIX_ACCESS_KEY_ID` - The access key ID for authentication
- `R2_PREFIX_SECRET_ACCESS_KEY` - The secret access key for authentication  
- `R2_PREFIX_BUCKET` - The bucket name to use (defaults to "conda")

These variables are loaded using the `python-dotenv` library, so they can be specified in a `.env` file.

## Authentication

Authentication is handled using the `aioboto3` library. A session is created with the configured credentials:

```python
session = aioboto3.Session(
    aws_access_key_id=access_key_id,
    aws_secret_access_key=access_key_secret,
    region_name="eeur",
)
```

An S3 client is then created from this session, specifying the endpoint URL:

```python
async with session.client(
    "s3",
    endpoint_url=f"https://{account_id}.r2.cloudflarestorage.com",
    config=config,
) as s3_client:
    # Use the client
```

## Data Structure

The mapping data is stored as JSON objects in S3. Each package mapping is stored under a key of the format:

```
hash-v0/{package_hash}
```

Where `{package_hash}` is the SHA256 hash of the package.

The mapping data itself is an instance of the `IndexMapping` class, which contains a `root` dictionary mapping package hashes to package metadata.

## Uploading Data

Mapping data is uploaded to S3 using the `upload_to_s3` function. This function:

1. Creates an S3 client session
2. Iterates through the mapping data
3. For each package, converts the mapping to JSON and uploads it to S3
4. Uses asynchronous operations for improved performance

## Retrieving Data

Data retrieval is handled by the `s3_client` module (not shown in the provided code). It likely provides functions to:

- Retrieve the full index for a channel
- Retrieve individual package mappings by hash

## Integration in the Update Process

The S3 integration is used in the package metadata update process:

1. The `main` function in `updater.py` processes packages and builds the mapping data
2. If uploading is enabled, it calls `upload_to_s3` to store the new mappings
3. The `main` function in `updater_merger.py` merges partial mapping files
4. If uploading is enabled, it uploads the merged index to S3

This allows Parselmouth to efficiently store and update package metadata mappings in a scalable cloud storage system.

  