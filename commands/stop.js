const { SlashCommandBuilder } = require('discord.js');
const { QueryType } = require('discord-player')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('stop')
		.setDescription('stop a song'),
        modlogs: true,
        userPerms: [],
		toggleOff: false,
        botPerms: [],
	async execute(interaction, client, timeout) {
  
    const queue = client.player.getQueue(interaction.guild.id);

    if (!queue || !queue.playing) return interaction.reply(`your error message when there is no music to stop`);

    queue.destroy();

    interaction.reply(`your message to stop music`);


	},
};