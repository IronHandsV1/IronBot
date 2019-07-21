const Discord = require('discord.js');
const music = require('discord.js-music-v11');
const Bot = new Discord.Client();
const token = "NjAxOTEyMzc0NTEyODQ0ODAw.XTJNng.Um2dzmAo67jKKXRLyIKF_1B2H2o" // Recommended to load from json file.
 
Bot.on('ready', () => {
    console.log(`[Start] ${new Date()}`);
});
 
music(Bot);
Bot.login(token);

// client.login('NjAxOTEyMzc0NTEyODQ0ODAw.XTJNng.Um2dzmAo67jKKXRLyIKF_1B2H2o');