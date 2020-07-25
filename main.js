//imports
const Discord = require("discord.js");
const config = require("./config.json");

//declaracion variables
const client = new Discord.Client();
var comando;
var args;


//declaracion de funciones

/**
 * envia un mensaje en el canal en el cual se ha escrito el mensaje de los argumentos que tiene el comando
 */
function repite(f_message, f_args){
    let lafrase = "\n-->";
    for(let i = 1; i < f_args.length; i -=- 1){
       lafrase += f_args[i]+ "\t";
    }
    f_message.channel.send("Habars dicho..." + lafrase);
}




function autoresponder(f_comando){

}

//init variables
client.on("ready", () => {
    console.log("UwU? I'm ready");
});

//UwU messages
client.on("message", (message) => {

    //comando = message.content.slice(config.prefix.length - 1, message.content.length);
    
    if (!message.author.bot) {                                            //Comprovacion de humano

        if (message.content.startsWith(config.prefix)) {                 //mensajes con prefijo
            comando = message.content.slice(config.prefix.length, message.content.length);
            args = comando.split(" "); //usar a partir del 0
            comando = args [0]; 

            //TODO: split del prefijo para mejor comprobacion
            console.log("mensaje: " + message.content + 
            "\ncomando: " + comando + 
            "\nargs" +  args
            );

            //Comandos ////////////////////////////////////////////////////////////////////////////
            switch(comando){
                case "repite":
                    repite(message, args);
                    break;
                case "ChingChong":
                    message.channel.send('North Korea stronk');
                    break;
            }
            

           ///////////////////////////////////////////////////////////////////////////////////////
        } else {                                                                //SIN PREFIJO
            //incializacion de mensaje
            comando = message.content;
            args = comando.split(" "); //usar a partir del 0
            comando = args[0];

            //AUTORESPUESTAS/////////////////////////////////////////////////////////////////////////

            switch(comando){
                case "repite":
                    repite(message, args);
                    break;
                case "ChingChong":
                    message.channel.send('North Korea stronk');
                    break;
            }
            
        }
            ////////////////////////////////////////////////////////////////////////////////////////
    }

});

client.login(config.token);