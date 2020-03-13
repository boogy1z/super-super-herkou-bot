const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.Njg4MDE5NTE2NDc5MTExMjE4.XmvHJQ.9m9gHLN8wF4p0SuCc3KZsesgoLo);
