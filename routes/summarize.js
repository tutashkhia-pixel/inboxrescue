const express = require('express');
const router = express.Router();
const { summarizeEmails } = require('../openaiClient');

router.post('/', async (req, res) => {
  try {
    const { emails } = req.body;
    if (!Array.isArray(emails) || emails.length === 0) {
      return res.status(400).json({ error: 'Emails array is required' });
    }
    const summary = await summarizeEmails(emails);
    res.json({ summary });
  } catch (error) {
    console.error('Error summarizing emails:', error);
    res.status(500).json({ error: 'Failed to summarize emails' });
  }
});

module.exports = router;
