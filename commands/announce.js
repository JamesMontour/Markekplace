exports.run = (client, msg, args) => {
    const [event, ...theme] = args.splice(0);
    themeStr = theme.join(" ");
    var eventsChannel = msg.guild.channels.find("id", "423904809209298954");

    if (msg.member.roles.find("id", "437420501284159495") || msg.channel.permissionsFor(msg.author).has("KICK_MEMBERS")) {
        if (event === "karaoke") {
            msg.channel.send("is this thing on? blahblahblah the theme for this weeks karaoke is " + themeStr).then(console.log).catch(console.error);
        } else if (event === "art") {
            msg.channel.send("draw me like one of your french girls, senpai. this weeks art theme is " + themeStr).then(console.log).catch(console.error);
        } else if (event === "music") {
            msg.channel.send("i liked them before they got popular. this weeks music theme is " + themeStr).then(console.log).catch(console.error);
        } else {
            msg.channel.send("You didn't enter a valid event, please use one of the following: karaoke, art, music").then(console.log).catch(console.error);
        }
    } else {
        msg.channel.send({embed: {
            color: 0xaa0000,
            description: "You do not have permission to use this command!"
        }}).then(console.log).catch(console.error);
    }
}