exports.run = (client, msg, args) => {
    var authStr = author.toString();
    var logChannel = msg.guild.channels.find('name', 'discord-economics');
    
    if (msg.content.match(/role/gi)) {
        if (msg.content.match(/palmgrove/gi)) {
            logChannel.send('User ' + authStr + ' wants the Palmgrove Shade role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (msg.content.match(/coconut/gi)) {
            logChannel.send('User ' + authStr + ' wants the Coconut Milk role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (msg.content.match(/tropicana/gi)) {
            logChannel.send('User ' + authStr + ' wants the Tropicana\'s Sky role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (msg.content.match(/camo/gi)) {
            logChannel.send('User ' + authStr + ' wants the Camouflage role.').then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else {
            msg.channel.send('You must specify a valid role!\n\nThis month\'s roles are:\n' + msg.guild.roles.find("name", "Palmgrove Shade") + '\n' + msg.guild.roles.find("name", "Coconut Milk") + '\n' + msg.guild.roles.find("name", "Tropicana's Sky") + '\n' + msg.guild.roles.find("name", "Camo") + "(Camo)").then(console.log).catch(console.error);
        }
    } else if (msg.content.match(/tag/gi)) {
        msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else if (msg.content.match(/react/gi)) {
            msg.channel.send('Coming Soon~~~').then(console.log).catch(console.error);
    } else {
            /*msg.channel.send('**Welcome to the Aviencloud Marketplace!**\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`\n\`%market react <word> <reaction>\`\n\`%market tag <tagname> <tag text>\`');*/
            msg.channel.send('**Welcome to the Aviencloud Marketplace!**\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`').then(console.log).catch(console.error);
    }
}
