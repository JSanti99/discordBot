const Discord = require("discord.js");
const express = require("express")().listen(process.env.PORT);
const dotenv = require("dotenv").config();
const bot = new Discord.Client();

bot.on("ready", () => {
  console.log("Bot is ready");
});
bot.on("message", async (msg) => {
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
  if (msg.content.split(" ")[0] === "!join") {
    // Only try to join the sender's voice channel if they are in one themselves
    if (msg.member.voice.channel) {
      const connection = await msg.member.voice.channel.join();
      const ytdl = require("ytdl-core");
      if (msg.content.split(" ")[1] !== undefined)
        connection.play(
          ytdl(msg.content.split(" ")[1], { filter: "audioonly" })
        );
    } else {
      msg.reply("You need to join a voice channel first!");
    }
  }
});
bot.login(process.env.BOT);
