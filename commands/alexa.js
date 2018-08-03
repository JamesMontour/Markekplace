exports.run = (client, msg, args) => {
    let command = args[0];
    let request = args[1];
    requestStr = request.toString();
    requestLow = requestStr.toLowerCase();

    if (command === "play") {
        if (requestLow === "despacito") {
            msg.channel.send("Despacito, Quiero respirar tu cuello despacito, Deja que te diga cosas al oído, Para que te acuerdes si no estás conmigo, Despacito", {tts: true}).then(console.log).catch(console.error);
        } else if (requestLow != null && requestLow != "despacito") {
            msg.channel.send("fuck off, cunt").then(console.log).catch(console.error);
        } else {
            msg.channel.send("Enter a valid song request.").then(console.log).catch(console.error);
        }
    } else {
        msg.channel.send({embed: {
            color: 0xaa0000,
            description: "Please enter a valid command (i.e. \"play\")"
        }}).then(console.log).catch(console.error);
    }
}

