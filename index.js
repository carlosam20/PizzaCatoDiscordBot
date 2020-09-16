

const Discord = require('discord.js');
const client = new Discord.Client();
 
const prefix = '-';
 
const fs = require('fs');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}
 
 
client.once('ready', () => {
    console.log('Pizzacato is online!');
});
 
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
    }
        
    
});

client.login('NzU1Njg0Nzc4MzIxMjQ4Mjg3.X2G4Sw.7eAKScyZDrP9K82-FEf7VodQHcM');



