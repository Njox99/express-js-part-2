# Express.js Routing Basics | Part 2

This repository contains the source code for the Express.js Routing tutorial (Part 2). The focus is on implementing core HTTP methods and validating system behavior using professional-grade API testing tools.

## System Architecture

Before implementation, the system logic was mapped to ensure clean data flow and resource management.

### Technical Visuals (from `/assets`)

- **Client-Server Interaction:** Logic for request-response cycles.
- **CRUD Mapping:** Structural overview of Create, Read, Update, and Delete operations.
- **API Toolchain:** Workflow integration using VS Code and Thunder Client.

---

## Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Testing:** Thunder Client (VS Code Extension)
- **Diagramming:** Excalidraw

---

## Implementation: `main.js`

The core server handles four primary HTTP verbs and includes a specialized middleware route for protected sections.

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware: Parse incoming JSON payloads
app.use(express.json());

/**
 * HTTP Methods Implementation
 */

// READ: Retrieve data
app.get("/", (req, res) => {
  res.send("GET: Sema dunia!");
});

// CREATE: Ingest new data
app.post("/", (req, res) => {
  res.send("POST: post endpoint");
});

// UPDATE: Modify existing records
app.put("/", (req, res) => {
  res.send("UPDATE: update request");
});

// DELETE: Remove resources
app.delete("/", (req, res) => {
  res.send("DELETE: delete request");
});

// SPECIAL: Access control middleware example
app.all("/secret", (req, res, next) => {
  console.log("Accessing the secret section ...");
  next();
});

app.listen(PORT, () => {
  console.log(`System active on port ${PORT}`);
});
```

---

## Project Structure

```text
myapp/
├── assets/              # Architectural diagrams (PNG)
├── main.js              # Entry point & Route handlers
├── package.json         # Dependencies & Scripts
├── README.md            # System Documentation
└── error.md             # Error logs and troubleshooting
```

---

## Execution

1. Install dependencies:

```bash
  npm install
```

2. Start the server:

```bash
  node main.js
```

_Note: Use `nodemon` for automated hot-reloads during development._

3. Test endpoints using **Thunder Client** via `http://localhost:3000`.

---

**Standard:** Built for performance and scalability.
**Reference:** [Express Routing Docs](https://expressjs.com/en/guide/routing/)
