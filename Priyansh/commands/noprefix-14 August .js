const fs = require("fs");
module.exports.config = {
	name: "14 Aug",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "14 August",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("14 August")==0 || event.body.indexOf("14")==0 || event.body.indexOf("14 Aug")==0 || event.body.indexOf("Independence of Pakistan")==0) {
		var msg = {
				body: "Pakistan Zindabad ♥️ Happy Independence Day🇵🇰🇵🇰🇵🇰🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/14.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🇵🇰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }