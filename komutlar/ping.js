const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (app, message, client) => {
  
  const kinda = new Discord.MessageEmbed()
  
  .setColor("BLACK")
  .setDescription('Ping Hesaplanıyor...')
  
   let start = Date.now(); 
   let mesaj = await message.channel.send(kinda)
   let diff = (Date.now() - start); 
   let API = (app.ws.ping).toFixed(2)
    
    setInterval(() => {
        
   const only = new Discord.MessageEmbed()
    .setDescription(`\nMesaj gecikme süresi; **${diff}ms** \n\nBot gecikme Süresi; **${API}ms**`)
        mesaj.edit(only);
      
    }, 5000)
  
  
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Kinda Code & Only V12.',
  usage: 'Kinda Code & Only V12'
};