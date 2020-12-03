require('dotenv').config() //take env variable and loads them into process.env variable inside of node 


const Discord = require('discord.js');
const client = new Discord.Client({
    partials: ["MESSAGE"] //to interact with things before we added the new feature/before we logged into server
}); //way u can communicate with dicsord and check whats happening on server

const BOT_PREFIX = '!'
const MOD_ME_COMMAND = 'mod-me'

client.on("ready", () => {
    console.log("Bot is ready to go!")
}) //console logging when bot is ready

client.on('messageDelete',msg => {
    msg.channel.send("Stop deleting messages")
})

client.on("message", msg => {
    if(msg.content === "ping") {
        msg.reply("Pong!") //replies with the user's name
    }

    if(msg.content === "i love csk") { //lolol
        msg.react("❤️") 
    }
 
    if(msg.content === `${BOT_PREFIX}${MOD_ME_COMMAND}`) {
        modUser(msg.member)
    }
}) //check for messages

function modUser(member){
    member.roles.add("783978402730344479");
}

client.login(process.env.BOT_TOKEN)