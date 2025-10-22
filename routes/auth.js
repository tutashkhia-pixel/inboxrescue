const express = require('express');
const { google } = require('googleapis');

const router = express.Router();

// Configure OAuth2 client with credentials from environment variables
const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  process.env.GOOGLE_REDIRECT_URI
);

// Define the scopes required for Gmail read-only access
const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];

// Route to initiate Google OAuth flow
router.get('/google', (req, res) => {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent'
  });
  res.redirect(authUrl);
});

// Callback route for Google OAuth
router.get('/google/callback', async (req, res) => {
  const code = req.query.code;
  try {
    const { tokens } = await oauth2Client.getToken(code);
    // TODO: Save tokens to database (Firebase) for later use
    res.json({ message: 'Google OAuth successful', tokens });
  } catch (error) {
    console.error('Error retrieving Google OAuth tokens', error);
    res.status(500).json({ error: 'Failed to authenticate with Google' });
  }
});

// Placeholder routes for Outlook OAuth (not implemented yet)
router.get('/outlook', (req, res) => {
  res.status(501).send('Outlook OAuth not implemented yet');
});

router.get('/outlook/callback', (req, res) => {
  res.status(501).send('Outlook OAuth callback not implemented yet');
});

module.exports = router;
