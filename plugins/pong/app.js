const Discord = require('discord.js');

function pong(options) {
    // Make sure client is available
    if (!options.client) {
        throw new Error('Options.client is required');
    }

    let client = options.client;

    // Listening for events
    client.on('message', message => {
        if (message.content === 'ping') {
            message.reply('pong');
        }
        else if (message.content === 'pong') {
            message.reply('ping');
        }
    });


    return {
    }
}

module.exports = pong;