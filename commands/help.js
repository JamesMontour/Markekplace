exports.run = (client, msg, args) => {
    msg.channel.send({embed: {
        color: 0x6688dd,
        title: "Markekplace Help Menu",
        description: "It appears you don't know what the hell you're doing, so to make life easier on your poor soul, please refer to the command list below!",
        fields: [
        {
            name: "Market",
            value: "Can be used to purchase various things on the Aviencloud Discord Server\nValid operations include:\n` %market role <role_name> `\n` %market tag <tag_name> <tag_text> `\n ` %market react <react_to> <reaction> `"
        },
        {
            name: "Announce (staff only)",
            value: "blahblahblah"
        },
        {
            name: "Welcome",
            value: "For special people only!\nUse ` %welcome ` in chat"
        }
        ],
        timestamp: new Date(),
        footer: {
            icon_url: client.user.avatarURL,
            text: "© Markekplace"
        }
    }}).then(console.log).catch(console.error);
}
