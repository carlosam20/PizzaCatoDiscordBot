const Discord = require('discord.js');
const client = new Discord.Client();
const SQlite = require('sqlite3').verbose();


const prefix = '-';
const fs = require('fs');
const sqlite3 = require('sqlite3');

 


 //This part gets the commands saved
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 //Terminal test for the login
client.once('ready', () => {
    console.log('Pizzacato is online!');
    let db = new sqlite3.Database('./ serverdb.db' , sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
});
 
//Check the comand made by the user and return a message in server
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    switch(command){

        case 'ping':
            client.commands.get('ping').execute(message, args);
            break;
        case 'youtube':
                client.commands.get('youtube').execute(message, args);
                break;
        case 'gif':
                client.commands.get('gif').execute(message, args);
                break;    
      
    }
        
    
});
//Token for log the bot and verification

    client.login('');


    



