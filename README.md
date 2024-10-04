
### **Node.js Basics**:
- **Node.js** is a runtime environment that lets you run JavaScript on the server.
- It's built on **Chrome's V8 JavaScript engine** and allows you to handle things like server requests, file system operations, and more.
- It's non-blocking and event-driven, meaning it can handle multiple tasks simultaneously without waiting for one to finish before moving on to the next.

---

### **Express.js Basics**:
- **Express.js** is a **web application framework** built on top of Node.js that simplifies server-side logic.
- It helps manage routing (URLs and HTTP methods), middleware (processing requests), and responses.
- In a MERN stack, Express is often used to create APIs that communicate with MongoDB and the frontend React app.

---


### **Step 1: Initialize a Node.js project**

1. First, navigate to your project folder and initialize it:
```bash
npm init -y
```
This will create a `package.json` file.

---

### **Step 2: Install Express**

2. Install **Express** via npm:
```bash
npm install express
```


### **Step 3: Create the Server**

3. Now, let's create a basic Express server in `index.js`:

```javascript
// Import express
const express = require('express');
const app = express();

// Define a port
const port = 3000;

// Create a basic route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
```

4. Run the server:
```bash
node index.js
```

Navigate to `http://localhost:3000` in your browser, and you should see the message: **Hello World!**

---

🥷 **Hacker Tip**: Want to make your development process smoother? Install **nodemon** for auto-reloading your server during development:

```bash
npm install -g nodemon
```

Run your app with:
```bash
nodemon index.js
```
If nodemon create problem
```bash
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
- Installing the CORS (Cross-Origin Resource Sharing) middleware in Node.js application
```bash
npm i cors
```


---