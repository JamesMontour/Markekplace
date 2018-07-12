exports.run = (client, msg, args) => {
    if (msg.channel.permissionsFor(msg.author).has("KICK_MEMBERS")) {
        msg.channel.send('Coming Soon~~~');
    } else {
        msg.channel.send('You do not have permission to use this command!');
    }
}