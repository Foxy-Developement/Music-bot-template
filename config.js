module.exports = {
   
    opt: {
            DJ: {
                enabled: false, //IF YOU WANT ONLY DJS TO USE IT, set false to true.
                roleName: 'DJ', //WRITE WHAT THE NAME OF THE DJ ROLE WILL BE, THEY CAN USE IT ON YOUR SERVER
                commands: ['play', 'stop'] //Please don't touch
            },
            maxVol: 250, //You can specify the maximum volume level.
            loopMessage: false, //Please don't touch
            discordPlayer: {
                ytdlOptions: {
                    quality: 'highestaudio', //Please don't touch
                    highWaterMark: 1 << 25 //Please don't touch
                }
            }
        }
};