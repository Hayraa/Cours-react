const Discord = require('discord.js');
const axios=require('axios');
module.exports={
  name:'jokecount',
  description:'Jokecount commande',
  execute(message,args){
    axios.get("http://api.icndb.com/jokes/count")
      .then(response => message.channel.send(response.data.value))
      .catch(error => console.log(error));
  }
}
