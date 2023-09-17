const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

module.exports = async function notify(msg) {
  const channel = await client.channels.fetch("<channel id>");
  if (!channel) return; // if the channel is not in the cache return and do nothing
  channel.send(msg);
};
