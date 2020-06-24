//imports
const Discord = require("discord.js");
const config = required("config.json");

//declaracion variables
const client = new Discord.Client();

//init variables
client.on("ready", () => {
    console.log("UwU");
});

//UwU messages
client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

    if (message.content.startsWith(config.prefix + "ping")) {
        message.channel.send("pong!");
    }
});

client.login(config.token);