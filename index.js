// Load environment variables from .env
require('dotenv').config();

const { Client, GatewayIntentBits, Collection } = require('discord.js');

// Create a new Discord client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds, // Needed for slash commands and guild events
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

// Optional: collection for commands if you want slash commands
client.commands = new Collection();

// Log when the bot is ready
client.once('ready', () => {
  console.log(`${client.user.tag} is online and running!`);
});

// Simple message command example
client.on('messageCreate', (message) => {
  if (message.author.bot) return; // Ignore bot messages
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

// Handle errors gracefully
process.on('unhandledRejection', (error) => {
  console.error('Unhandled promise rejection:', error);
});
process.on('uncaughtException', (error) => {
  console.error('Uncaught exception:', error);
});

// Log in to Discord using your token from environment variable
client.login(process.env.DISCORD_TOKEN);
