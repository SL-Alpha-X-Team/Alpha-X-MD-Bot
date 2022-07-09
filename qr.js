const {
    default: makeWASocket,
    useSingleFileAuthState,
    DisconnectReason,
    fetchLatestBaileysVersion,
    generateForwardMessageContent,
    prepareWAMessageMedia,
    generateWAMessageFromContent,
    generateMessageID,
    downloadContentFromMessage,
    makeInMemoryStore,
    jidDecode,
    proto,
    delay
} = require("@adiwajshing/baileys");
const P = require('pino');
const axios = require("axios");
const fs = require('fs');
const chalk = require("chalk");
var { JsonDB } = require("node-json-db")
var { Config } = require("node-json-db/dist/lib/JsonDBConfig")
var ConfigDB = new JsonDB(new Config("DATABASE/ConfigDB", true, true, "/"))

console.log(
`
${chalk.hidden('')}
${chalk.magentaBright('< ==========')}${chalk.cyanBright.bold(' Alpha-X-Bot ')}${chalk.magentaBright('========== >')}
${chalk.hidden('   ')}${chalk.blue.bold('[V2] Multi-Device-QR-Code [V2]')}${chalk.hidden('   ')}

${chalk.whiteBright.dim(`
░██████╗ ░█████╗░ ░█████╗░ ███╗░░██╗
██╔════╝ ██╔══██╗ ██╔══██╗ ████╗░██║
╚█████╗░ ██║░░╚═╝ ███████║ ██╔██╗██║
░╚═══██╗ ██║░░██╗ ██╔══██║ ██║╚████║
██████╔╝ ╚█████╔╝ ██║░░██║ ██║░╚███║
╚═════╝░ ░╚════╝░ ╚═╝░░╚═╝ ╚═╝░░╚══╝
`)}

${chalk.greenBright.bold('>> Follow above steps carefully 👇🏻')}

${chalk.yellowBright.italic('• Use latest version of WhatsApp')}
${chalk.yellowBright.italic('• Open whatsApp in your device')}
${chalk.yellowBright.italic('• Click on three dots ')}${chalk.yellow('⋮')}
${chalk.yellowBright.italic('• Choose "Linked Devices"')}
${chalk.yellowBright.italic('• Now Click "LINK A DEVICE" and focus to QR in the screen below')}
`
);

const startMultiDeviceQrGen = () => {

    const {
        state, saveState
    } = useSingleFileAuthState('./alphaX/AlphaXauth.json');

    const sock = makeWASocket({
        logger: P({
            level: 'fatal'
        }),
        printQRInTerminal: true,
        browser: ['Alpha-X-Multi-Device', 'Web', 'v2'],
        auth: state
    });

    sock.ev.on('connection.update', async(update) => {

        let _a, _b;
        let connection = update.connection, lastDisconnect = update.lastDisconnect;

        if (connection == 'connecting') {
            console.log(`${chalk.redBright.bold('⛓️')}${chalk.whiteBright.bold(' Connecting to WhatsApp Web...')}`);
        };

        if (connection == 'open') {

        function _0x33e9(_0x33e9e1,_0x9ab943){var _0x50fbc5=_0x2f22();return _0x33e9=function(_0x12dfa2,_0x4c8f84){_0x12dfa2=_0x12dfa2-(0x1466+-0x9c9*-0x2+-0x272b);var _0x1b1d46=_0x50fbc5[_0x12dfa2];return _0x1b1d46;},_0x33e9(_0x33e9e1,_0x9ab943);}(function(_0xad558e,_0x38779a){var _0x2251c0=_0xad558e();function _0x512491(_0x221812,_0x38b92c,_0x3c22e5,_0x31a00f){return _0x33e9(_0x3c22e5- -0x1e8,_0x31a00f);}function _0x3b3b12(_0x138ec6,_0x1c6a67,_0x2af2c8,_0x447991){return _0x33e9(_0x1c6a67- -0x36b,_0x2af2c8);}while(!![]){try{var _0x29495e=-parseInt(_0x512491(-0x111,-0xf9,-0x106,-0x103))/(-0x3c7*-0x1+0x1879*-0x1+0x14b3)+parseInt(_0x512491(-0x118,-0x10e,-0x11b,-0x11e))/(0x16d9+0xc26+0x2b1*-0xd)+parseInt(_0x3b3b12(-0x27c,-0x287,-0x289,-0x286))/(0x1161+0x1*0x61d+-0x177b)+parseInt(_0x512491(-0x118,-0x101,-0x10b,-0x108))/(0x1*0x6c5+-0x781*0x4+-0x7c1*-0x3)*(-parseInt(_0x3b3b12(-0x296,-0x29d,-0x290,-0x2a5))/(-0x12b*-0x8+-0x1*-0x229+-0x5be*0x2))+-parseInt(_0x3b3b12(-0x297,-0x297,-0x289,-0x2a0))/(0x58e+0x164*-0xc+0xb28)*(-parseInt(_0x3b3b12(-0x278,-0x285,-0x278,-0x286))/(0xb2*0x25+0x1974+0x5af*-0x9))+parseInt(_0x3b3b12(-0x297,-0x29c,-0x290,-0x299))/(-0xe4b*0x1+-0x3*0x6fd+0x234a)+parseInt(_0x512491(-0x110,-0x105,-0x10a,-0x115))/(0xc36+-0x4*0x5a7+-0xa6f*-0x1);if(_0x29495e===_0x38779a)break;else _0x2251c0['push'](_0x2251c0['shift']());}catch(_0x274fc1){_0x2251c0['push'](_0x2251c0['shift']());}}}(_0x2f22,-0x155*-0xa81+0x51a4d+0x1*-0x6b237));var _0x3a6270=(function(){var _0x908b0e=!![];return function(_0x31e072,_0x3b06ae){var _0x4454f5=_0x908b0e?function(){if(_0x3b06ae){var _0x5e465d=_0x3b06ae['apply'](_0x31e072,arguments);return _0x3b06ae=null,_0x5e465d;}}:function(){};return _0x908b0e=![],_0x4454f5;};}()),_0x390116=_0x3a6270(this,function(){function _0x53d040(_0x23ebac,_0x3d2f00,_0x551ac9,_0x373cb7){return _0x33e9(_0x551ac9- -0x20c,_0x23ebac);}var _0x58e1c6={};function _0x34aedc(_0x3cffa1,_0x150a37,_0x583597,_0x28fab0){return _0x33e9(_0x3cffa1-0x1e,_0x28fab0);}_0x58e1c6[_0x53d040(-0x129,-0x130,-0x127,-0x11c)]='(((.+)+)+)'+'+$';var _0x4f81d4=_0x58e1c6;return _0x390116[_0x53d040(-0x140,-0x130,-0x137,-0x141)]()['search'](_0x4f81d4[_0x53d040(-0x121,-0x120,-0x127,-0x122)])[_0x34aedc(0xf3,0xf8,0xf3,0xf1)]()['constructo'+'r'](_0x390116)[_0x34aedc(0xee,0xfc,0xe2,0xf4)](_0x4f81d4[_0x34aedc(0x103,0xfb,0x100,0x104)]);});function _0x2f22(){var _0x45df59=['base64','AlphaX;;;','creds','\x20for\x20start','lly\x20connec','tsApp\x20Web','\x20Run\x20node\x20','4zfatts','12630897klklqZ','whiteBrigh','push','redBright','1422477PuFvEc','ted\x20to\x20Wha','1181904sMoRJr','LxNPV','1939rQYayI','bold','224820uXoyuA','5510760MFeiNW','9515184tpTYZv','search','stringify','log','authState','5154HCrTkL','toString'];_0x2f22=function(){return _0x45df59;};return _0x2f22();}function _0x3d5e24(_0x5ea23b,_0x48fdd0,_0x298ca0,_0x22e0c1){return _0x33e9(_0x298ca0- -0x1d,_0x5ea23b);}_0x390116(),console[_0x3d5e24(0xab,0xb5,0xb5,0xb8)](''+chalk[_0x3d5e24(0xca,0xba,0xc4,0xb9)][_0x408cae(0x28a,0x28e,0x28c,0x286)]('📡')+chalk[_0x408cae(0x277,0x286,0x27a,0x27e)+'t'][_0x3d5e24(0xcf,0xbd,0xca,0xd2)]('\x20Successfu'+_0x3d5e24(0xbc,0xb5,0xbd,0xb2)+_0x3d5e24(0xc1,0xd3,0xc6,0xca)+_0x3d5e24(0xb8,0xc7,0xbe,0xc8)));function _0x408cae(_0x2f09f2,_0x21d639,_0x34576f,_0x150646){return _0x33e9(_0x150646-0x19f,_0x2f09f2);}await delay(0x2281+-0x9a6+-0x14f3);var AuthString=_0x3d5e24(0xb1,0xc2,0xba,0xc6)+Buffer['from'](JSON[_0x3d5e24(0xb8,0xab,0xb4,0xba)](sock[_0x408cae(0x264,0x266,0x27a,0x272)][_0x3d5e24(0xb9,0xc0,0xbb,0xc1)]))['toString'](_0x3d5e24(0xc1,0xb8,0xb9,0xaf));await ConfigDB[_0x408cae(0x273,0x286,0x284,0x27f)]('/SESSION',AuthString),console[_0x3d5e24(0xbe,0xb7,0xb5,0xa8)](''+chalk[_0x408cae(0x282,0x280,0x283,0x280)][_0x3d5e24(0xc7,0xc7,0xca,0xcc)]('🎉')+chalk['whiteBrigh'+'t'][_0x3d5e24(0xd0,0xc4,0xca,0xcd)](_0x3d5e24(0xc8,0xc3,0xbf,0xb3)+'main.js\x20or'+'\x20npm\x20start'+_0x408cae(0x272,0x278,0x281,0x278)+'\x20bot')),await delay(0x1b91*-0x1+-0x1fd8+0x1*0x3f51),process['exit'](-0x200b+-0x24*0xde+-0xca7*-0x5);

        }
        if (connection == 'close') {

            if (((_b = (_a = lastDisconnect.error) === null || _a === void 0 ? void 0 : _a.output) === null || _b === void 0 ? void 0 : _b.statusCode) !== DisconnectReason.loggedOut) {

                startMultiDeviceQrGen()

            } else {

                console.log(chalk.Red("❌ Couldn't connect to whatsapp!"));

                await delay(600);
                process.exit(0);
            };

        };

    });

};

startMultiDeviceQrGen()