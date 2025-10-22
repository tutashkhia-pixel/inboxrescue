const express = require('express');
const cors = require('cors');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const summarizeRoutes = require('./routes/summarize');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Register route handlers
app.use('/auth', authRoutes);
app.use('/summarize', summarizeRoutes);

app.get('/', (req, res) => {
  res.send('InboxRescue API is running');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
