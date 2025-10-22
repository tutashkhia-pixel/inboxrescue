const express = require('express');
const router = express.Router();

// Placeholder for summarization route
// TODO: Implement email summarization using GPT

router.post('/', (req, res) => {
  // For now just send stub response
  res.json({ message: 'Summarization endpoint' });
});

module.exports = router;
