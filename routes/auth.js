const express = require('express');
const router = express.Router();

// Placeholder for OAuth routes (Google / Microsoft)
// TODO: Implement authentication flows

router.get('/callback', (req, res) => {
  // handle OAuth callback
  res.send('OAuth callback');
});

module.exports = router;
