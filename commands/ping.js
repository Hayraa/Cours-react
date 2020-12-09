const Discord = require('discord.js');
const axios=require('axios');
module.exports={
  name:'ping',
  description:'Ping commande',
  execute(message,args){
    message.channel.send("Pinging...").then(m =>{
      var ping = m.createdTimestamp - message.createdTimestamp;
      var embed = new Discord.MessageEmbed()
        .setAuthor(`Your ping is ${ping}`)
        .setColor("Your Color")
        m.edit(embed)
    });
  }
}
