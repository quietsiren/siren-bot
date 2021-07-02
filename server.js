require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const nuuriSip = 'You need to drink some water, Cohh.'

const giftBomb = 'cohhBomb INCOMING GIFT BOMB cohhBomb'

const helloBomb = "The Hello Queue and Center's are open!! From this point on, any cohhHi's will be added to the daily hello list or appear in the hicenter! cohhGG"

const commands = {
    nuuriSip: {
        response: 'Hydrate time! cohhSip cohhSip cohhSip'
    },
    duck: {
        response: 'Hide non-subs!'
    },
    chatLove:{
        response: 'cohhL cohhL cohhL'
    }
}

const client = new tmi.Client({
    connection: { 
        reconnect: true
    },
    channels: [
        'cohhcarnage'
    ],
    identity: {
        username: process.env.TWITCH_BOT_USERNAME,
        password: process.env.TWITCH_OAUTH_TOKEN
    }
});

client.on('message', onMessageHandler);
client.on('connected', onConnectHandler);

client.connect();

function onMessageHandler (target, context, msg, self) {
    if (self) { return; } //ignore messages from bot

    // Remove whitespace from chat message
    const commandName = msg.trim();
    
    // If the command is known, let's execute it
    if (commandName === nuuriSip) {
        
        client.say(target, 'cohhSip Hydrate! cohhSip');
        console.log(`* Executed ${commandName} command`);
    } else if (commandName === giftBomb) {

        client.say(target, 'cohhBomb cohhBlind Hide non-subs! cohhBlind cohhBomb');
        console.log(`* Executed ${commandName} command`);
        
    } else if (commandName === helloBomb) {

        client.say(target, 'cohhGHi cohhHi cohhGV cohhLurk');
        console.log(`* Executed ${commandName} command`);

    }
}

function onConnectHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}
