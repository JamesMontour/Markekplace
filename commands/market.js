exports.run = (client, msg, args) => {
    var logChannel = msg.guild.channels.find('name', 'discord-economics');
    //let item = args[0];
    //let roles = args[1];
    //let tagTitle = args[1];
    const [item, tag, ...description] = args.splice(0);
    descFull = description.join(" ");

    if (item === "role") {
        if (tag == null) {
            msg.channel.send('You must specify a valid role!\n\nThis month\'s roles are:\n' + msg.guild.roles.find("id", "449433116558229504") + '\n' + msg.guild.roles.find("id", "449433193469313024") + '\n' + msg.guild.roles.find("id", "449433278303305740") + '\n' + msg.guild.roles.find("name", "Camo") + "(Camo)\n\ni.e. If you'd like the " + msg.guild.roles.find("id", "449433116558229504") + " role, do \`%market role supreme\`.").then(console.log).catch(console.error);
        } else if (tag.match(/supreme/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433116558229504> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (tag.match(/thrasher/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433193469313024> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (tag.match(/adidas/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433278303305740> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (tag.match(/camo/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&404682935665557505> (Camo) role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else {
            msg.channel.send('You must specify a valid role!\n\nThis month\'s roles are:\n' + msg.guild.roles.find("id", "449433116558229504") + '\n' + msg.guild.roles.find("id", "449433193469313024") + '\n' + msg.guild.roles.find("id", "449433278303305740") + '\n' + msg.guild.roles.find("name", "Camo") + "(Camo)\n\ni.e. If you'd like the " + msg.guild.roles.find("id", "449433116558229504") + " role, do \`%market role supreme\`.").then(console.log).catch(console.error);
        }
    } else if (item === "tag") {
        //msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
        msg.channel.send("You requested the following tag be created:\n\n**Tag:** " + tag + "\n**Text:** " + descFull + "\n\nStaff has been notified and will create your tag as soon as they can.\nWhen your tag is ready, you can use it by doing: \`?tag " + tag +"\` in chat.").then(console.log).catch(console.error);
    } else if (item === "react") {
            msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else {
            /*msg.channel.send('<:kek:336584899459022862> **Welcome to the Aviencloud Markekplace!** <:kek:336584899459022862>\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`\n\`%market react <word> <reaction>\`\n\`%market tag <tagname> <tag text>\`');*/
            msg.channel.send({embed: {
                color: 0x008800,
                description: "<:kek:336584899459022862> **Welcome to the Aviencloud Markekplace!** <:kek:336584899459022862>\n\nYou must specify what you would like to purchase.",
                fields: [{
                    name: "**Items** / *<Sub-items>*",
                    value: "%market **role** *<rolename>*"
                    }
                ],
                timestamp: new Date(),
                footer: {
                    icon_url: client.user.avatarURL,
                    text: "© Markekplace"
                }
            }}).then(console.log).catch(console.error);;
    }
}