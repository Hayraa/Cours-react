const Discord = require('discord.js');
const axios=require('axios');
const fs =require('fs');
const token = require('./config.json');

const bot = new Discord.Client();
bot.commandes= new Discord.Collection();

const fichiersCommandes=fs.readdirSync('./commands').filter(ficier=>ficier.endsWith('.js'));

bot.once('ready',()=>{
  console.log('Ready !');
});
for (const fichier of fichiersCommandes) {
  const commande = require(`./commands/${fichier}`);
  bot.commandes.set(commande.name,commande);
}

bot.on('message', async (message)=>{
  let prefixes = JSON.parse(fs.readFileSync("./prefix.json","utf8"));
  if (!prefixes[message.guild.id]) {
    prefixes[message.guild.id]={
      prefix:"%"
    }
  }
  let prefix=prefixes[message.guild.id].prefix;
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command =args.shift().toLowerCase();

  if(!bot.commandes.has(command)) return;
  try {
    bot.commandes.get(command).execute(message,args);
  } catch (e) {
    console.error(e);
    message.reply("Il y a eu un problème lors de l'éxecution de cette commande");
  }
})

bot.login(token.token);
