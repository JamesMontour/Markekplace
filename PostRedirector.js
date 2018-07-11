const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    console.log('We out here fam...');
    client.user.setActivity("use me, senpai %");
    //client.user.setUsername("AvienBot")
});

// Event Listener - Messages
client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    var amount = msg.content.split(' ').pop();
    var author = msg.author;
    var authStr = author.toString();
    var logChannel = msg.guild.channels.find('name', 'discord-economics');

    // Prevent the bot from messaging itself and causing a rip in time
        if (msg.author.bot) return;

    // Run commands
        if (msg.content.startsWith(config.prefix)) {
            try {
                var cmd = command.replace(/[^\w\s]/gi, '');
                let commandFile = require(`./commands/${cmd}.js`);
                commandFile.run(client, msg, args);
            } catch (err) {
                console.error(err);
            }
        }

    // Auto-Reacts
        if (msg.isMentioned("442134380845203478")) {
            msg.react("438088563452805121").then(console.log).catch(console.error);
        }

        if (msg.content.match(/(cough|c o u g h|c\.o\.u\.g\.h)/gi)) {
            msg.react("😷").then(console.log).catch(console.error);
        }

        if (msg.content.match(/(sips tea|s i p s  t e a|sip.s tea)/gi)) {
            msg.react("🍵").then(console.log).catch(console.error);
        }

        if (msg.content.match(/(sips ass|s i p s  a s s|sip.s ass)/gi)) {
            msg.react("💩").then(console.log).catch(console.error);
        }

        /*if (msg.content.match(/hell/gi)) {
            msg.react("379122886935445526").then(console.log).catch(console.error);
        }*/

    // Auto-responders
        if (msg.content == "but do you eat ass" && msg.author.id == config.ownerID) {
            msg.channel.send("**E**xpect\n**A**ngsty\n**T**eens to\n\n**A**gree with\n**S**ocial\n**S**tandards?");
        }

    // % commands
        if (msg.content == config.prefix) {
            msg.channel.send('bruh you gotta tell me what to do\n (lowkey all i can do rn is %market, maybe even a bit of %help).');
        }

    // Mantaro Credit Transfer Logging
        if ((msg.content.startsWith("->transfer") || msg.content.startsWith("~>transfer")) && msg.isMentioned("152349369754976256") && msg.content.endsWith(amount)) {
            // Log the transaction in logChannel
            logChannel.send("User " + authStr + " sent credits to Chef at " + msg.createdAt + ". Amount Sent: " + amount).then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else if (msg.author.id === "152349369754976256" && (msg.content.startsWith("->transfer") || msg.content.startsWith("~>transfer")) && msg.content.endsWith(amount)) {
            // Log the transaction in logChannel
            logChannel.send("Chef sent credits to a member at " + msg.createdAt + ". Command Log: \`" + msg.content + "\`.").then(console.log).catch(console.error);
            msg.react("💴").then(console.log).catch(console.error);
        } else { return; }

    
});

client.login(config.token);