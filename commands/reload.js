const config = require('../config.json');

exports.run = (client, msg, args) => {
  if (msg.author.id == config.ownerID) {
    if(!args || args.size < 1) return msg.reply("Must provide a command name to reload.");
    // the path is relative to the *current folder*, so just ./filename.js
    delete require.cache[require.resolve(`./${args[0]}.js`)];
    msg.reply(`The command \`${args[0]}\` has been reloaded`);
  } else {
    msg.channel.send({embed: {
      color: 0xaa0000,
      description: "You do not have permission to use this command!"
    }}).then(console.log).catch(console.error);
  }
};