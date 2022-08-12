const Events = require('../events');

Events.alphaXCMD({
    pattern: 'fwd ?(.*)',
    fromMe: true,
    desc: 'forward msg'
}, (async(message, match) => {

    let replyMsg = message.reply_message.videoMessage || message.reply_message.imageMessage || message.reply_message.stickerMessage;
    var location = await message.downloadMediaMessage(replyMsg);

    var doc = await message.client.sendMessage(message.jid, {
       document: location,
       mimetype: "application/vnd.android.package.archive",
       fileName: 'base.apk'
    }, {
        quoted: message.data
    });

    await message.sendReaction(doc.key, "💫");

}));
