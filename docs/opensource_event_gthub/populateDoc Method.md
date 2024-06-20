
  
  # **populateDoc**

**High Level**

The `populateDoc` function is a method provided by the Sprite Node.js SDK, which allows you to populate a document with data from various sources. It is designed to simplify the process of creating and updating documents with dynamic content.

```javascript
import { sprite } from 'sprite';

const populateResult = await sprite.populateDoc(params);
```

**Why should I use this function?**

The `populateDoc` function is particularly useful when you need to generate documents that incorporate data from multiple sources, such as databases, APIs, or other external services. By using this function, you can streamline the process of gathering and integrating data into a single document, making it easier to create reports, templates, or any other type of document that requires dynamic content.

**What are the required parameters?**

The `populateDoc` function takes an object as its parameter, which should contain the following properties:

1. `template`: A string representing the path to the template file that will be used as the base for the document.
2. `data`: An object containing the data that should be populated into the template.
3. `output`: A string representing the desired output format for the generated document (e.g., 'pdf', 'docx', 'html').

**Prerequisites**

Before using the `populateDoc` function, make sure you have:

1. Installed the Sprite Node.js SDK by running `npm install sprite` or `yarn add sprite`.
2. Imported the `sprite` object from the SDK in your JavaScript file.
3. Prepared a template file in the appropriate format (e.g., Markdown, HTML) with placeholders for the dynamic data.
4. Gathered the necessary data that you want to populate into the template.

**How do I use this function?**

Here's an example of how to use the `populateDoc` function:

```javascript
import { sprite } from 'sprite';

const templatePath = 'path/to/template.md';
const data = {
  name: 'John Doe',
  age: 30,
  occupation: 'Software Engineer'
};
const outputFormat = 'pdf';

const populateResult = await sprite.populateDoc({
  template: templatePath,
  data,
  output: outputFormat
});

console.log(populateResult);
// Output: A Buffer object containing the generated PDF document
```

In this example, we import the `sprite` object from the SDK, define the path to the template file, the data object, and the desired output format. We then call the `populateDoc` function, passing in an object with the required properties. The function returns a Promise that resolves to a Buffer object containing the generated document in the specified format.
  
  