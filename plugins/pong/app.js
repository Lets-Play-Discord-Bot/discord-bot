const Discord = require('discord.js');

module.exports = function (client) {

    client.on('message', message => {
        if (message.content === 'ping') {
            message.reply('pong');
        }
        else if (message.content === 'pong') {
            message.reply('ping');
        }
    });

}