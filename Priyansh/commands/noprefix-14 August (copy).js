const fs = require("fs");
module.exports.config = {
	name: "Zindabad",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "Zindabad",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Happy independence")==0 || event.body.indexOf("🇵🇰")==0 || event.body.indexOf("Pak")==0 || event.body.indexOf("Pakistan")==0) {
		var msg = {
				body: "Pakistan Zindabad ♥️🇵🇰🇵🇰🇵🇰🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/pak14.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇵🇰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }