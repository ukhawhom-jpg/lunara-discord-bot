
const { Client, GatewayIntentBits } = require('discord.js');

const bot = new Client({
  intents: [
    GatewayIntentBits.Guilds
  ]
});

bot.once('ready', () => {
  console.log(`บอท ${bot.user.tag} พร้อมทำงานแล้ว!`);
});

bot.login(process.env.DISCORD_TOKEN);
