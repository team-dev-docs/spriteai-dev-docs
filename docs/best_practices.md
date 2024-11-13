

  # Parselmouth Best Practices

Parselmouth is a powerful tool for generating conda to PyPI package mappings. Follow these best practices to use Parselmouth effectively in your workflows.

## Optimizing Performance

- Use the `updater_producer` command to generate the subdir@letter list before running the main updater. This pre-generates the index and reduces S3 requests.

- Take advantage of concurrency when processing packages:
  ```python
  with concurrent.futures.ThreadPoolExecutor() as executor:
      futures = {
          executor.submit(get_artifact_info, ...): package_name 
          for package_name in packages
      }
  ```

- Use asynchronous uploads when pushing data to S3:
  ```python 
  asyncio.run(upload_to_s3(names_mapping))
  ```

- Set appropriate pool sizes for S3 connections:
  ```python
  config = botocore.client.Config(max_pool_connections=50)
  ```

## Managing Large Mappings

- Process mappings in batches by subdir and letter:
  ```
  parselmouth updater noarch@a
  parselmouth updater linux-64@b
  ```

- Use partial output files to break up large mappings:
  ```python
  partial_json_name = f"{subdir}@{letter}.json"
  ```

- Leverage the `updater_merger` command to combine partial mappings into a single file.

- Store mappings compressed in S3 and decompress on-demand to reduce storage and transfer costs.

## Integration into Workflows  

- Use environment variables for configuration:
  ```python
  load_dotenv()
  account_id = os.getenv("R2_PREFIX_ACCOUNT_ID")
  ```

- Leverage the CLI for easy integration into CI/CD pipelines:
  ```
  parselmouth updater-producer --channel conda-forge
  parselmouth updater linux-64@a --upload
  ```

- Use the `check_one` command to verify individual package mappings:
  ```
  parselmouth check-one package-1.0-py39.conda linux-64
  ```

- Implement the `YankConfig` to control which packages should be excluded from mappings.

- Use the `update_mapping` and `update_mapping_legacy` commands to keep repository files up-to-date.

## Best Practices for Specific Scenarios

- For .conda packages, prefer the `STREAMED` backend.
- For .tar.bz2 packages on conda-forge, use the `OCI` backend.
- For .tar.bz2 packages on other channels like PyTorch, fall back to `STREAMED`.

By following these best practices, you can optimize Parselmouth's performance, manage large-scale mappings efficiently, and seamlessly integrate it into your existing package management workflows.

  