
  
  
---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It then iterates through every pixel in the image, extracts the red, green, blue and alpha values of each pixel, converts those values to a numeric color integer if the pixel has non-zero opacity, and adds each unique color integer encountered to a Set. This allows it to build up a set of only the unique colors present in the image. Finally, it converts the Set to an Array and returns it, giving the caller an array containing the unique colors found in the image.


  
  