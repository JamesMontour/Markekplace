const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require("fs");
const config = require('./config.json');

const RC = require('reaction-core');
const handler = new RC.Handler();

client.on('ready', () => {
    console.log('We out here fam...');
    client.user.setActivity("use me, senpai %");
    //client.user.setUsername("Markekplace")
});

/*// Event Listener - Reactions
client.on('messageReactionAdd', (messageReaction, user) => handler.handle(messageReaction, user));
const roleMenu = require('./roleMenu.js');
let assignRole = new RC.Menu(roleMenu.embed, roleMenu.buttons);
handler.addMenus(assignRole);*/

// Events
fs.readdir("./events/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        let eventFunction = require(`./events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, (...args) => eventFunction.run(client, ...args));
    });
});

// Event Listener - Messages
client.on('message', msg => {
    const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    var amount = msg.content.split(' ').pop();
    var author = msg.author;
    var authStr = author.toString();
    var logChannel = msg.guild.channels.find('name', 'discord-economics');

    // Prevent the bot from interacting with itself/other bots and causing a rip in time
        if (msg.author.bot) return;
       /*if (msg.content === "rc%testmenu"){
            msg.channel.sendMenu(assignRole);
        }*/

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

        if (msg.content.match(/(sips ass|s i p s  a s s|sip.s ass|sips.*ass|sip.s.*ass)/gi)) {
            msg.react("💩").then(console.log).catch(console.error);
        }

        if (msg.content.match(/(sips lemonade|s i p s  l e m o n a d e|sip.s lemonade|sips.*lemonade|sip.s.*lemonade)/gi)) {
            msg.react("🍋").then(console.log).catch(console.error);
            msg.react("🍹").then(console.log).catch(console.error);
        }

        if (msg.author.id == "124163151238266880") {
            msg.react("🇾").then(console.log).catch(console.error);
            var i = 0;
            while (i < 15) {i++}
            msg.react("🇪").then(console.log).catch(console.error);
        }

        /*if (msg.content.match(/hell/gi)) {
            msg.react("379122886935445526").then(console.log).catch(console.error);
        }*/

    // Auto-responders
        if (msg.content == "but do you eat ass" && (msg.author.id == config.ownerID || msg.author.id == "235815143643152385")) {
            msg.channel.send("**E**xpect\n**A**ngsty\n**T**eens to\n\n**A**gree with\n**S**ocial\n**S**tandards?");
        }

    // % commands
        if (msg.content == config.prefix) {
            msg.channel.send({embed: {
                color: 0xff0000,
                title: "Bruh.",
                description: "You have to tell me what to do!\n\n(Lowkey, all I can do is %market, maybe even a bit of %help... There might be some other ones but I can't remember)."
            }}).then(console.log).catch(console.error);
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