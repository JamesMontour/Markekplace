exports.run = (client, msg) => {
    if (msg.author.id == "196983155742212096" || msg.author.id == "311126793312665600" || msg.author.id == "185989434288635904") {
        msg.channel.send("Welcome to hell! We have free wifi and the bathrooms are upstairs at the right!").then(console.log).catch(console.error);
    } else { return; }
}