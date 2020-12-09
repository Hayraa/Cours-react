const Discord = require('discord.js');
const axios=require('axios');
module.exports={
  name:'jokescategories',
  description:'JokesCategories commande',
  execute(message,args){
    axios.get("http://api.icndb.com/categories")
      .then(response => message.channel.send(response.data.value))
      .catch(error => console.log(error));
  }
}
