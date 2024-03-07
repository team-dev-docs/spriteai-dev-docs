
  
  
---
# getUniqueColors index.js
## Imported Code Object

The getUniqueColors function takes an image path and options as inputs. It uses the Jimp library to read the image from the provided path. It then iterates through every pixel in the image, extracts the red, green, blue and alpha values of each pixel, converts those values to a numeric color integer if the pixel is not fully transparent, and adds that integer to a Set data structure to collect only the unique color values present in the image. Finally, it converts the Set to an Array and returns the array containing the unique colors found in the image.


  
  