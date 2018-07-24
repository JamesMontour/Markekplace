exports.run = (client, msg, args) => {
    var logChannel = msg.guild.channels.find('name', 'discord-economics');
    let item = args[0];
    let roles = args[1];

    if (item === "role") {
        if (roles.match(/palmgrove/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433116558229504> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (roles.match(/coconut/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433193469313024> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (roles.match(/tropicana/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&449433278303305740> role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (roles.match(/camo/gi)) {
            logChannel.send('User ' + msg.author + ' wants the <@&404682935665557505> (Camo) role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else {
            msg.channel.send('You must specify a valid role!\n\nThis month\'s roles are:\n' + msg.guild.roles.find("name", "Palmgrove Shade") + '\n' + msg.guild.roles.find("name", "Coconut Milk") + '\n' + msg.guild.roles.find("name", "Tropicana's Sky") + '\n' + msg.guild.roles.find("name", "Camo") + "(Camo)").then(console.log).catch(console.error);
        }
    } else if (item === "tag") {
        msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else if (item === "react") {
            msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else {
            /*msg.channel.send('<:kek:336584899459022862> **Welcome to the Aviencloud Markekplace!** <:kek:336584899459022862>\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`\n\`%market react <word> <reaction>\`\n\`%market tag <tagname> <tag text>\`');*/
            msg.channel.send('<:kek:336584899459022862> **Welcome to the Aviencloud Markekplace!** <:kek:336584899459022862>\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`').then(console.log).catch(console.error);
    }
}