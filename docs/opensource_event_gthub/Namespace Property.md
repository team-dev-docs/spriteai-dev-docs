
  
  # **namespace**

**High Level**

The `namespace` is a property that allows you to specify a namespace for your Sprite AI application. This is useful when you have multiple applications running within the same environment and need to differentiate between them.

**Why should I use this property?**

Using a namespace helps prevent conflicts between different applications or services that might be using the same keys or configurations. It provides a way to isolate and organize your application's data, resources, and settings within a specific namespace.

**What is the required parameter?**

The `namespace` property expects a string value that represents the desired namespace for your application.

**Prerequisites**

Before using the `namespace` property, you should have installed the Sprite AI SDK and imported the necessary modules or objects.

**How do I use this property?**

1. Import the Sprite AI SDK in your application:

```javascript
import { sprite } from 'sprite-sdk';
```

2. Set the `namespace` property before initializing or using other Sprite AI services:

```javascript
sprite.namespace = 'my-app-namespace';
```

Replace `'my-app-namespace'` with a unique string that identifies your application.

3. After setting the namespace, you can proceed to use other Sprite AI services or APIs. The namespace will be applied to all operations within your application's context.

**Example**

```javascript
import { sprite } from 'sprite-sdk';

// Set the namespace for your application
sprite.namespace = 'my-app-namespace';

// Use other Sprite AI services or APIs
const result = await sprite.someService.performOperation();
```

By setting a namespace, you ensure that your application's data and resources are isolated from other applications running in the same environment. This helps prevent naming conflicts and enables better organization and management of your application's resources within the Sprite AI ecosystem.
  
  