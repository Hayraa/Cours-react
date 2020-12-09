const Discord = require('discord.js');
const axios=require('axios');
module.exports={
  name:'joke',
  description:'Jokes commande',
  execute(message,args){
    if (args.length==0) {
      axios.get("http://api.icndb.com/jokes/random")
        .then(response => message.channel.send(response.data.value.joke))
        .catch(error => console.log(error));
    }else {
      if (isNaN(args[0])) {
        axios.get(`http://api.icndb.com/jokes/random?limitTo=[${args}]`)
          .then(response => message.channel.send(response.data.value.joke))
          .catch(error => console.log(error));
      }else {
        axios.get(`http://api.icndb.com/jokes/${args[0]}`)
          .then(response => message.channel.send(response.data.value.joke))
          .catch(error => console.log(error));
      }
    }
  }
}
