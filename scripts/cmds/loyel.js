module.exports = {
 config: {
	 name: "gf",
	 version: "1.0",
	 author: "AceGun",
	 countDown: 5,
	 role: 0,
	 shortDescription: "no prefix",
	 longDescription: "no prefix",
	 category: "no prefix",
 },

 onStart: async function(){}, 
 onChat: async function({ event, message, getLang }) {
 if (event.body && event.body.toLowerCase() === "Loyel") {
 return message.reply({
 body: " 「 BESSAR BUKE\n\n𝗕𝗢𝗧 𝗢𝗪𝗡𝗘𝗥\n𝙹𝚄𝙱𝙰𝚈𝙴𝚁」",
 attachment: await global.utils.getStreamFromURL("https://i.imgur.com/hFeaxfU.mp4")
 });
 }
 }
}
