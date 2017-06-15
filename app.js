const discordBotConfig = require('./configs/bot_settings');
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('Bot connected successfully to the server.');
  LoadPlugins(client);
});

client.login(discordBotConfig.bot_token);


function LoadPlugins(client){
  // Load plugins
  require('./plugins/pong/app')(client);
}