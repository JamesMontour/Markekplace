const Discord = require('discord.js');
const client = new Discord.Client();
const token = '[redacted]';

client.on('ready', () => {
        console.log('We out here fam... PostRedirector');
        client.user.setGame('use me, senpai %');
});

// Event to listen to messages sent on the server
client.on('message', msg => {
        var amount = msg.content.split(' ').pop();
        var author = msg.author;
        var authStr = author.toString();
        var logChannel = msg.guild.channels.find('name', 'discord-economics');

        // Prevent the bot from messaging itself and causing a rip in time
        if (msg.author.bot) return;

        if (msg.content.match(/(cough|c o u g h|c\.o\.u\.g\.h)/gi)) {
                msg.react("😷")
                        .then(console.log)
                        .catch(console.error);
        }

        if (msg.content.match(/(sips tea|s i p s  t e a|sip.s tea)/gi)) {
                msg.react("🍵")
                        .then(console.log)
                        .catch(console.error);
        }

        if (msg.content.match(/(sips ass|s i p s  a s s|sip.s ass)/gi)) {
                msg.react("💩")
                        .then(console.log)
                        .catch(console.error);
        }

        /*if (msg.content.match(/hell/gi)) {
                msg.react("379122886935445526")
                        .then(console.log)
                        .catch(console.error);
        }*/
        if (msg.content == "but do you eat ass") {
                msg.channel.send('**E**xpect\n**A**ngsty\n**T**eens to\n\n**A**gree with\n**S**ocial\n**S**tandards?');
        }

        if (msg.isMentioned("442134380845203478")) {
                msg.react("438088563452805121").then(console.log).catch(console.error);
        }

        //Logic for % commands
        if (msg.content.startsWith('%')) {
                if (msg.content.match(/market/gi)) {
                        if (msg.content.match(/role/gi)) {
                                if (msg.content.match(/palmgrove/gi)) {
                                        logChannel.send('User ' + authStr + ' wants the Palmgrove Shade role.');
                                        msg.react("💴").then(console.log).catch(console.error);
                                } else if (msg.content.match(/coconut/gi)) {
                                        logChannel.send('User ' + authStr + ' wants the Coconut Milk role.');
                                        msg.react("💴").then(console.log).catch(console.error);
                                } else if (msg.content.match(/tropicana/gi)) {
                                        logChannel.send('User ' + authStr + ' wants the Tropicana\'s Sky role.');
                                        msg.react("💴").then(console.log).catch(console.error);
                                } else if (msg.content.match(/camo/gi)) {
                                        logChannel.send('User ' + authStr + ' wants the Camouflage role.');
                                        msg.react("💴").then(console.log).catch(console.error);
                                } else {
                                        msg.channel.send('You must specify a valid role!');
                                }
                        } else if (msg.content.match(/tag/gi)) {
                                msg.channel.send('Coming Soon~~~');
                        } else if (msg.content.match(/react/gi)) {
                                msg.channel.send('Coming Soon~~~');
                        } else {
                                msg.channel.send('**Welcome to the Aviencloud Marketplace!**\n\nYou must specify what you would like to purchase.\n\nCurrently you may use the following:\n\`%market role <rolename>\`\n\`%market react <word> <reaction>\`\n\`%market tag <tagname> <tag text>\`');
                        }
                } else {
                        msg.channel.send('bruh you gotta tell me what to do\n (lowkey all i can do rn is %market).');
                }

        }

        // Mantaro Credit Transfer Logging
        if ((msg.content.includes('->transfer') || msg.content.includes('~>transfer')) && msg.isMentioned('[redacted]') && msg.content.endsWith(amount)) {
                // Log the transaction in logChannel
                logChannel.send('User ' + authStr + ' sent credits to Chef at ' + msg.createdAt + '. Amount Sent: ' + amount)
                        .then(console.log)
                        .catch(console.error);
                msg.react("💴")
                        .then(console.log)
                        .catch(console.error);
        } else if (msg.author.id === '[redacted]' && (msg.content.includes('->transfer') || msg.content.includes('~>transfer')) && msg.content.endsWith(amount)) {
                // Log the transaction in logChannel
                logChannel.send('Chef sent credits to a member at ' + msg.createdAt + '. Command Log: \`' + msg.content + '\`.')
                        .then(console.log)
                        .catch(console.error);
                msg.react("💴")
                        .then(console.log)
                        .catch(console.error);
        } else { return; }
});

client.login(token);
