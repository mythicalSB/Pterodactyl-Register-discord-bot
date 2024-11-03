const { Client, GatewayIntentBits } = require('discord.js');
const axios = require('axios');
const config = require('./config');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

client.once('ready', () => {
  console.log('Bot is online!');
});

client.on('messageCreate', async (message) => {
  if (message.content.startsWith('!create')) {
    const args = message.content.split(' ').slice(1);

    if (args.length !== 5) {
      return message.reply('Please provide all required arguments: `!create <username> <email> <first name> <last name> <password>`');
    }

    const [username, email, firstName, lastName, password] = args;

    try {
      const response = await axios.post(
        `${config.pterodactyl.url}/users`,
        {
          username,
          email,
          first_name: firstName,
          last_name: lastName,
          password
        },
        {
          headers: {
            'Authorization': `Bearer ${config.pterodactyl.apiKey}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      message.reply(`Account created successfully! Username: ${username}, Email: ${email}`);
    } catch (error) {
      console.error(error);
      message.reply('There was an error creating the account. Please check your details and try again.');
    }
  }
});

client.login(config.discordToken);
