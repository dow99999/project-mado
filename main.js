//imports
const Discord = require("discord.js");
const config = require("./config.json");
const copypasta = require("./data/copypastas.json");

//declaracion variables
const client = new Discord.Client();
var comando;
var args;


//declaracion de funciones/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * envia un mensaje en el canal en el cual se ha escrito el mensaje de los argumentos que tiene el comando
 */
function repite(f_args){
    let lafrase = "\n-->";
    for(let i = 1; i < f_args.length; i -=- 1){
       lafrase += f_args[i]+ "\t";
    }

    return ("Habars dicho..." + lafrase);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comandos(f_comando, f_args){
    switch(f_comando){
        case "repite":
            message.channel.send(repite(f_args));
            break;
        case "ChingChong":
            message.channel.send('North Korea stronk');
            break;
    }
}



function autoresponder(f_comando, f_args){
    switch(f_comando){
        case "repite":
            message.channel.send(repite(f_args));
            break;
        case "ChingChong":
            message.channel.send('North Korea stronk');
            break;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//init variables
client.on("ready", () => {
    console.log("UwU? I'm ready");
});

//UwU messages
client.on("message", (message) => {
    
    if (!message.author.bot) {                                                             //Comprovacion de humano

        if (message.content.startsWith(config.prefix)) {                                   //mensajes con prefijo
                                                                                           //incializacion de mensaje
            comando = message.content.slice(config.prefix.length, message.content.length); //borramos el prefijo
            args = comando.split(" ");                                                     //argumentos detras del comando separados por espacios **usar a partir del 0**
            comando = args [0];                                                            //comando(palabra sin espacios) sin su prefijo

            //Comandos ////////////////////////////////////////////////////////////////////////////////////////////////
            
            comandos(comando, args);

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        } else {                                                                           //SIN PREFIJO
                                                                                           //incializacion de mensaje
            comando = message.content;
            args = comando.split(" ");                                                     //argumentos detras del comando separados por espacios **usar a partir del 0**
            comando = args[0];                                                             //comando(palabra sin espacios)

            //AUTORESPUESTAS///////////////////////////////////////////////////////////////////////////////////////////

            autoresponder(comando, args);
            
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    }

});

client.login(config.token);