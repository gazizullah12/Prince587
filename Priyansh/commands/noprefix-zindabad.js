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
	if (event.body.indexOf("Zindabad")==0 || event.body.indexOf("Hyderabad")==0 || event.body.indexOf("Lahore")==0 || event.body.indexOf("Islamabad")==0) {
		var msg = {
				body: "Pakistan Zindabad ♥️ Sindh ka Badsha 🌹",
				attachment: fs.createReadStream(__dirname + `/noprefix/87.mp4`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("♥️", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }