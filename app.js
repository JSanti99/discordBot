const Discord = require("discord.js");
const dotenv = require("dotenv").config();
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot is ready");
});
bot.on("message", (msg) => {
  if (msg.content === "!pp") {
    let size = Math.floor(Math.random() * 31 + 1);
    if (msg.author.id === "299230070655025154")
      size = Math.floor(Math.random() * 11 + 20);
    let text;
    if (size >= 10 && size < 20) text = ":/";
    else if (size >= 20 && size < 30) text = ":O";
    else if (size === 30) text = "papi :3";
    else text = "JAJAJAJAJA";
    msg.reply(`Te mide ${size} ${text}`);
  }
});
bot.login(process.env.BOT);
