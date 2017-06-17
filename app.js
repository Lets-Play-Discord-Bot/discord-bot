const discordBotConfig = require('./configs/bot_settings');
const Discord = require('discord.js');
const client = new Discord.Client();

// Subscribe to events
client.on('ready', () => {
  console.log('Bot connected successfully to the server.');
  LoadPlugins(client);
});

function LoadPlugins(client) {
  // Load plugins
  console.log('Beginning to load plugins');

  let pingPong = require('./plugins/pong/app')({
    client: client
  });
  
  console.log('All plugins loaded');
}

function Init() {
  console.log('Beginning initialization');
  client.login(discordBotConfig.bot_token);
}

// Start app
Init();