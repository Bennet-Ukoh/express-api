# Simple Express.js REST API (Extended Fields & Modular Routes)

**Mini Project Assessment (Module 3)**
**Software Development Pathway – 3MTT on Darey.io**

## Objective

Build a simple REST API with Express.js demonstrating:

- Core Express setup and middleware (JSON parsing, root route, error handling)
- CRUD operations for `/items` with in-memory data store
- Unique item IDs using `uuid` and extended item properties
- Modular controllers and routes
- Validation and meaningful error responses

## Acknowledgments

This assessment is part of the Software Development Pathway of the 3MTT program, implemented on the Darey.io platform. Thanks to the 3MTT community and Darey.io for the learning opportunity.

## Project Structure

```text
node-express-api/
├── controllers/
│   └── itemsController.js  # Business logic for item operations
├── routes/
│   └── items.js      # Route definitions mapping to controllers
├── index.js                # App entry point, middleware, and server
├── package.json            # Dependencies & scripts
└── README.md               # This documentation
```

## Installation

git clone [<repo-url>](https://github.com/Bennet-Ukoh/express-api.git)
cd node-express-api
npm install

## Running the Server

# Development (auto-reload with nodemon)

npm run dev

# Production

npm start

The server runs at http://localhost:5000/

## API Endpoints

| Method | Endpoint     | Description                   |
| ------ | ------------ | ----------------------------- |
| GET    | `/`          | Returns "Hello, World!"       |
| GET    | `/items`     | List all items                |
| GET    | `/items/:id` | Retrieve a single item by ID  |
| POST   | `/items`     | Create a new item             |
| PUT    | `/items/:id` | Update an existing item by ID |
| DELETE | `/items/:id` | Delete an item by ID          |

## Item Schema

{
"id": "uuid-v4",
"name": "string",
"description": "string",
"tags": ["string"],
"status": "active | inactive",
"price": "number",
"category": "string",
"createdAt": "ISO timestamp",
"updatedAt": "ISO timestamp"
}

## Example Requests

# Create an item

curl -X POST http://localhost:5000/items \
 -H "Content-Type: application/json" \
 -d '{
"name": "Item A",
"description": "A sample item",
"tags": ["sample","api"],
"status": "active",
"price": 100,
"category": "general"
}'

# List all items

curl http://localhost:5000/items

# Get a specific item

curl http://localhost:5000/items/<id>

# Update an item

curl -X PUT http://localhost:5000/items/<id> \
 -H "Content-Type: application/json" \
 -d '{ "status": "inactive" }'

# Delete an item

curl -X DELETE http://localhost:5000/items/<id>

## Validation & Error Handling

- 400 Bad Request: Missing required fields or no fields provided on update.
- 404 Not Found: Item ID not found or invalid route.
- 500 Internal Server Error: Unexpected server errors.
