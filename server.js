const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = 'your_mongodb_connection_string'; // replace with your MongoDB connection string
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch(err => console.error(err));

// API routes
app.get('/api/vmitra', (req, res) => {
  res.send('Welcome to V Mitra Election Assistant API');
});

// Define other routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});