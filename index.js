const { Player } = require('discord-player');
const config = require('config.js')
client.player = new Player(client, config.opt.discordPlayer);
const player = client.player

player.on('error', (queue, error) => {
  console.log(`There was a problem with the song queue => ${error.message}`);
});

player.on('connectionError', (queue, error) => {
  console.log(`I'm having trouble connecting => ${error.message}`);
});

player.on('trackStart', (queue, track) => {
  if (!config.opt.loopMessage && queue.repeatMode !== 0) return;
  queue.metadata.send(`your message of beginning song`);
}); // track.title for title song

player.on('trackAdd', (queue, track) => {
  queue.metadata.send(`your message of adding a tail song`);
});

player.on('botDisconnect', (queue) => {
  queue.metadata.send('your message when the bot is disconnected from the chat by a user');
});

player.on('channelEmpty', (queue) => {
  queue.metadata.send('your error message when the bot is only in a voice channel');
});

player.on('queueEnd', (queue) => {
  queue.metadata.send('your messggio when all the songs in the list are finished');
});