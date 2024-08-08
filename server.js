// server.js

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware to parse incoming form data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling form submissions
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Process the form data here
    console.log('Form data received:', { name, email, message });

    // Send a response back to the client
    res.json({ status: 'success', message: 'Form submitted successfully!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
