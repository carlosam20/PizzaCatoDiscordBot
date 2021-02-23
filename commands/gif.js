//Valores de gifs previamente introducidos
//Se podria hacer un array y randomizarlos


var attachment = ['https://media.giphy.com/media/lSVwnfthx8TMk/giphy.gif','https://giphy.com/gifs/90s-retro-commercials-26tPo9rksWnfPo4HS','https://giphy.com/gifs/theoffice-nbc-the-office-tv-HnxKNAG21AMiODMuPl','https://giphy.com/gifs/television-the-office-1HT35NmUy920w'];



module.exports = {
    name:'gif',
    description: "this is a gif command!",
    


    execute(message, args){
        var gifNumber=Math.floor(Math.random()*3);
            message.channel.send(attachment[gifNumber]);
            
    }
}