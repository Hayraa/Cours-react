const Discord =require("discord.js");

module.exports={
  name:'help',
  description:'help commande',
  execute(message,args){
    const embed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Help')
      .setDescription('Voici les méthodes mises à disposition.')
      .addField('joke','Retourne une Chuck Norris joke.',false)
      .addField('joke <id>','Retourne la Chuck Norris joke qui a cet id.',false)
      .addField('joke <categorie>','Retourne une Chuck Norris joke de la categorie choisie.',false)
      .addField('jokeCategorie','Retourne les categories des Chuck Norris joke.',false)
      .addField('jokeCount','Retourne le nombre de Chuck Norris joke.',false)
      .addField('prefix <nouveau prefix>','Change le préfix.',false)
      .addField('prefix','Retourne le préfix actuel.',false)
      .addField('ping','Retourne la latence !',false);
    message.channel.send(embed);
  }
}
