

  # Creating and Updating Pets using the Node.js API

To create and update pets using the Petstore API with Node.js, you can use the following methods:

## Creating a Pet

To create a new pet, use the `POST /pet` endpoint:

```javascript
const axios = require('axios');

async function createPet() {
  const newPet = {
    name: "Fluffy",
    photoUrls: ["https://example.com/fluffy.jpg"],
    status: "available",
    category: {
      id: 1,
      name: "Dogs"
    },
    tags: [
      {
        id: 1,
        name: "friendly"
      }
    ]
  };

  try {
    const response = await axios.post('https://petstore.swagger.io/v2/pet', newPet, {
      headers: {
        'Content-Type': 'application/json',
        'api_key': 'your_api_key_here'
      }
    });
    console.log('Pet created:', response.data);
  } catch (error) {
    console.error('Error creating pet:', error.response.data);
  }
}

createPet();
```

## Updating a Pet

To update an existing pet, use the `PUT /pet` endpoint:

```javascript
const axios = require('axios');

async function updatePet() {
  const updatedPet = {
    id: 123, // The ID of the pet you want to update
    name: "Fluffy",
    photoUrls: ["https://example.com/fluffy_updated.jpg"],
    status: "pending",
    category: {
      id: 1,
      name: "Dogs"
    },
    tags: [
      {
        id: 1,
        name: "friendly"
      },
      {
        id: 2,
        name: "trained"
      }
    ]
  };

  try {
    const response = await axios.put('https://petstore.swagger.io/v2/pet', updatedPet, {
      headers: {
        'Content-Type': 'application/json',
        'api_key': 'your_api_key_here'
      }
    });
    console.log('Pet updated:', response.data);
  } catch (error) {
    console.error('Error updating pet:', error.response.data);
  }
}

updatePet();
```

Make sure to replace `'your_api_key_here'` with your actual API key. Also, when updating a pet, ensure you provide the correct `id` of the pet you want to update.

These examples use the `axios` library for making HTTP requests. If you haven't installed it yet, you can do so by running:

```
npm install axios
```

Remember to handle errors appropriately and validate input data before sending requests to the API.

  