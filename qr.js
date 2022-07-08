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

            console.log(`${chalk.redBright.bold('📡')}${chalk.whiteBright.bold(' Successfully connected to WhatsApp Web')}`);
            console.log(`${chalk.redBright.bold('🎉')}${chalk.whiteBright.bold(' Run node main.js or npm start for start bot')}`);

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