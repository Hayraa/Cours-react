const Discord = require('discord.js');
const fs =require('fs');

module.exports={
  name:'prefix',
  description:'Ping commande',
  execute(message,args){
    let prefixes = JSON.parse(fs.readFileSync("./prefix.json","utf8"));
    if (!prefixes[message.guild.id]) {
      prefixes[message.guild.id]={
        prefix:"%"
      }
    }
    let prefix=prefixes[message.guild.id].prefix;
    if(!message.member.hasPermission("MANAGE_GUILD")) return;
    if(!args[0]) return message.reply(`Le préfix est : ${prefix}`);
    prefixes[message.guild.id]={
      prefix:args[0]
    }

    fs.writeFile("./prefix.json",JSON.stringify(prefixes),(err)=>{
      if (err) console.log(err)
    });

    message.channel.send(` Le préfix a été changé pour : ${args[0]}`);
  }
}
