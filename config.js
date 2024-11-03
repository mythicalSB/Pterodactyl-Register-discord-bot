require('dotenv').config();

module.exports = {
  discordToken: process.env.DISCORD_TOKEN,
  pterodactyl: {
    url: process.env.PTERODACTYL_URL,
    apiKey: process.env.PTERODACTYL_API_KEY
  }
};
