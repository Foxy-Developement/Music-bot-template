const { SlashCommandBuilder } = require('discord.js');
const { QueryType } = require('discord-player')

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('your description here')
        .addStringOption(option => option.setName('song-title')
        .setDescription('your description here')
        .setRequired(true)),
	async execute(interaction, client) {


        const titleSong = interaction.options.getString('song-title')

        const voiceChannel = interaction.member.voice.channel
        if (!voiceChannel) {
            return interaction.reply("your error message that you are not in a voice channel")
        }

        const res = await client.player.search(titleSong, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return interaction.reply(`${interaction.user}, No results found! ❌`);

        const queue = await client.player.createQueue(interaction.guild, {
            metadata: interaction.channel
        });

        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            await client.player.deleteQueue(interaction.guild.id);
            return interaction.reply(`${interaction.user}, I can't join audio channel. ❌`);
        }

        await interaction.reply(`your starting message of the song`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();



	},
};