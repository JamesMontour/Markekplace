exports.run = (client, msg, args) => {
    if (msg.channel.permissionsFor(msg.author).has("KICK_MEMBERS")) {
        msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else {
        msg.channel.send({embed: {
            color: 0xaa0000,
            description: "You do not have permission to use this command!"
        }}).then(console.log).catch(console.error);
    }
}  