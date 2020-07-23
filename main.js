//imports
const Discord = require("discord.js");
const config = required("config.json");
const prefijos = required("modulos/prefijo.js");

//declaracion variables
const client = new Discord.Client();

//init variables
client.on("ready", () => {
    console.log("UwU? I'm ready");
});

//UwU messages
client.on("message", (message) => {

    var ar = "asdasd";

    if (!message.author.bot) {                                            //Comprovacion de humano

        if (!message.content.startsWith(config.prefix)) {                 //mensajes con prefijo
            //TODO: split del prefijo para mejor comprobacion
            prefijos.checkMessage(message);

            //Comandos
            if (message.content.startsWith(config.prefix + "Ching Chong")) {
                message.channel.send('North Korea stronk');
            }

        }

    }
});

client.login(config.token);