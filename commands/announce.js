exports.run = (client, msg, args) => {
    let event = args[0];
    let theme = args[1];
    
    if (msg.member.roles.find("name", "Event Host/Hostess") || msg.channel.permissionsFor(msg.author).has("KICK_MEMBERS")) {
        if (event === "karaoke") {
            msg.channel.send("is this thing on? blahblahblah the theme for this weeks karaoke is " + theme).then(console.log).catch(console.error);
        } else if (event === "art") {
            msg.channel.send("draw me like one of your french girls, senpai. this weeks art theme is " + theme).then(console.log).catch(console.error);
        } else if (event === "music") {
            msg.channel.send("i liked them before they got popular. this weeks music theme is " + theme).then(console.log).catch(console.error);
        } else {
            msg.channel.send("You didn't enter a valid event, please use one of the following: karaoke, art, music").then(console.log).catch(console.error);
        }
    } else {
        msg.channel.send('You do not have permission to use this command!').then(console.log).catch(console.error);
    }
}