
  
  
---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It then iterates through every pixel in the image, extracts the red, green, blue and alpha channel values for each pixel, converts those values to a numeric color integer if the pixel has non-zero opacity, and adds those color integers to a Set. This Set will only contain unique color values. Finally, the Set is converted to an Array and returned, giving a list of the unique colors found in the input image.


  
  