const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const assetRoutes = require('./routes/assetRoutes');

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use('/api/assets', assetRoutes);

mongoose.connect('mongodb://localhost:27017/final')
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Connection error', err);
  });
