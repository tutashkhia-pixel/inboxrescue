const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

async function summarizeEmails(emails) {
  // Combine email content into a single prompt
  const combinedText = emails.join('\n\n');
  const prompt = `Summarize the following emails in a concise way:\n\n${combinedText}`;
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'user', content: prompt }
    ],
  });
  const summary = response.data.choices[0].message.content.trim();
  return summary;
}

module.exports = { summarizeEmails };
