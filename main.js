//imports
const Discord = require("discord.js");
const config = require("./config.json");
const copypasta = require("./data/copypastas.json");
const autorespuesta = require("./data/autoresponder.json");

//declaracion variables
const client = new Discord.Client();
var comando;
var args;


//declaracion de funciones/////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Funcion que devuelve un string con los parametros pasados por el usuario
 * @param f_args array con los parametros pasados por el usuario
 * @return String con la respuesta del bot
 */
function repite(f_args){
    let lafrase = "\n-->";

    for(let i = 1; i < f_args.length; i -=- 1){
       lafrase += f_args[i]+ "\t";
    }

    return ("Habars dicho..." + lafrase);
}

/**
 * 
 */
function readJson(f_message, f_comando, f_data){
    let found = false;
    let i = 0;
    while(!found && i < f_data.comando.length){
            if(isInArray(f_comando, f_data.comando[i])){
                sendMessages(f_message, f_data.respuestas[i]);
                found = true;
            }
            i++;
    }
}

/**
 * 
 */
function isInArray(f_word, f_array){
    let found = false;
    let i = 0;

    while(!found && i < f_array.length) {
        found = (f_word == f_array[i]);
        i++;
    }

    return found;
}

/**
 * Procedimiento utilizado para saltar los limites de caracteres de discord
 * @param f_message objeto con la informacion del mensaje enviado por el usuario
 * @param f_array array con los mensajes a enviar en el canal
 */
function sendMessages(f_message, f_array){
    for(let i = 0; i < f_array.length; i++){
        f_message.channel.send(f_array[i]);
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function comandos(f_message, f_comando, f_args){
    let argumentos = true;

    switch(f_comando){
        case "repite":
           f_message.channel.send(repite(f_args));
            break;
        case "ChingChong":
            f_message.channel.send('North Korea stronk');
            break;
        default:
            argumentos = false; //en el caso que no se haya ejecutando ningun comando especial
    }

    if(!argumentos){ //se ejecutan los copypastas
        readJson(f_message, f_comando, copypasta);
    }

}

function autoresponder(f_message, f_comando){
    readJson(f_message, f_comando, autorespuesta);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//init variables
client.on("ready", () => {
    console.log("UwU? I'm ready");
});

//UwU messages
client.on("message", (message) => {
    
    if (!message.author.bot) {                                                             //Comprobacion de humano

        if (message.content.startsWith(config.prefix)) {                                   //mensajes con prefijo
                                                                                           //incializacion de mensaje
            comando = message.content.slice(config.prefix.length, message.content.length); //borramos el prefijo
            args = comando.split(" ");                                                     //argumentos detras del comando separados por espacios **usar a partir del 0**
            comando = args[0].toLowerCase();                                               //comando(palabra sin espacios) sin su prefijo

            //Comandos ////////////////////////////////////////////////////////////////////////////////////////////////
            
            comandos(message, comando, args);

            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        } else {                                                                           //SIN PREFIJO
                                                                                           //incializacion de mensaje
            comando = message.content.toLowerCase();
            //AUTORESPUESTAS///////////////////////////////////////////////////////////////////////////////////////////

            autoresponder(message, comando);
            
            ///////////////////////////////////////////////////////////////////////////////////////////////////////////
        }
    }

});

client.login(config.token);