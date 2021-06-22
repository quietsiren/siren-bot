require('dotenv').config();

const tmi = require('tmi.js');

const regexpCommand = new RegExp(/^!([a-zA-Z0-9]+)(?:\W+)?(.*)?/);

const nuuriSip = 'You need to drink some water, Cohh.'

const giftBomb = 'cohhBomb INCOMING GIFT BOMB cohhBomb'

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

    // const {response} = commands[command] || {};

    // Remove whitespace from chat message
    const commandName = msg.trim();
    
    // If the command is known, let's execute it
    if (commandName === nuuriSip) {
        
        client.say(target, 'cohhSip Hydrate! cohhSip');
        console.log(`* Executed ${commandName} command`);
    } else if (commandName === giftBomb) {

        client.say(target, 'cohhBomb cohhBlind Hide non-subs! cohhBlind cohhBomb');
        console.log(`* Executed ${commandName} command`);
        
        
        
        // console.log(`* Unknown command ${commandName}`);
    }
}

function onConnectHandler (addr, port) {
    console.log(`* Connected to ${addr}:${port}`);
}