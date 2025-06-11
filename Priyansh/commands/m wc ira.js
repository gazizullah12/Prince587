const fs = require("fs");
module.exports.config = {
	name: "ira",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "MrTomXxX", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "miles",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ira miles seno  miles Wc ")==0 || event.body.indexOf("@Ira Miles Seno Miles welcome")==0 || event.body.indexOf("Ira miles seno miles welcome")==0 || event.body.indexOf("Ira Miles Seno Miles Welcome")==0) {
		var msg = {
				body: ".\n 💞 \n ",
				attachment: fs.createReadStream(__dirname + `/noprefix/ira.gif`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😁", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}