const db = require("quick.db");
const Discord = require("discord.js");
 
exports.run = function(client, message, args) {
 
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  
  const embed = new Discord.MessageEmbed()
  
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.`)
  
  if(!REASON) return message.channel.send(embed)
 
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  
  const afk = new Discord.MessageEmbed()
  
  .setColor('GREEN')
  .setAuthor(message.author.username)
  .setDescription(`\`${REASON}\` Sebebiyle Afk Oldu.`)
  
  message.channel.send(afk)
 
};
 
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [""],
  permLevel: 0
};
 
exports.help = {
  name: 'afk',
  description: 'Kinda Code & Only V12',
  usage: 'afk'
};