import 'dotenv/config';
import express from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { VerifyDiscordRequest } from './utils.js';

// Create and configure express app
const app = express();
app.use(express.json({ verify: VerifyDiscordRequest(process.env.PUBLIC_KEY) }));

// Endpoint for Discord interactions
app.post('/interactions', function (req, res) {
  // Interaction type and data
  const { type } = req.body;

  // Handle incoming interactions
  if (type === InteractionType.APPLICATION_COMMAND) {
    // Respond to slash commands
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: { content: 'Valorant esports schedule tracker is coming soon!' },
    });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
