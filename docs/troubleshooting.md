

  # Common Issues and Troubleshooting

This guide covers some common issues users may encounter when using Parselmouth, along with solutions and troubleshooting steps.

## Installation Problems

### Issue: ImportError when trying to import Parselmouth

**Error message:**
```
ImportError: No module named parselmouth
```

**Solution:**
- Ensure Parselmouth is installed properly: `pip install parselmouth`
- Check that you're using the correct Python environment where Parselmouth is installed
- Verify the installation with `pip list | grep parselmouth`

### Issue: Build errors during installation

**Error message:** 
```
error: command 'gcc' failed with exit status 1
```

**Solution:**
- Make sure you have a C++ compiler installed (e.g. gcc on Linux/macOS, Visual C++ on Windows)
- Install required development libraries: `sudo apt-get install python3-dev` on Ubuntu/Debian
- Try installing from a pre-built wheel instead of source: `pip install --only-binary=:all: parselmouth`

## Runtime Errors

### Issue: FileNotFoundError when loading sound files

**Error message:**
```
FileNotFoundError: [Errno 2] No such file or directory: 'audio.wav'
```

**Solution:**
- Check that the audio file exists in the correct path
- Use absolute file paths instead of relative paths
- Verify file permissions allow read access

### Issue: ValueError when creating a Sound object

**Error message:**
```
ValueError: File format not recognized
```

**Solution:**
- Ensure the audio file is in a supported format (WAV, AIFF, etc.)
- Check if the file is corrupted by opening it in another audio program
- Try converting the file to a different format

## Performance Issues

### Issue: Slow processing of large audio files

**Solution:**
- Use smaller audio chunks if possible
- Increase available memory if processing very large files
- Consider using multi-processing for batch operations

## API Usage Problems

### Issue: AttributeError when calling a Parselmouth function

**Error message:**
```
AttributeError: 'Sound' object has no attribute 'get_intensity'
```

**Solution:**
- Check the Parselmouth documentation for correct method names and usage
- Ensure you're using the latest version of Parselmouth, as method names may change
- Verify that the object you're calling the method on is of the correct type

## Debugging Tips

1. Enable verbose logging:
   ```python
   import logging
   logging.basicConfig(level=logging.DEBUG)
   ```

2. Check Parselmouth version:
   ```python
   import parselmouth
   print(parselmouth.__version__)
   ```

3. Isolate the problem by creating a minimal reproducible example

4. Consult the [Parselmouth documentation](https://parselmouth.readthedocs.io/) for proper API usage

5. Search for similar issues on the [Parselmouth GitHub repository](https://github.com/YannickJadoul/Parselmouth/issues)

If you encounter persistent issues not covered here, please open an issue on the Parselmouth GitHub repository with a detailed description of the problem and steps to reproduce it.

  