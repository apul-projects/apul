//The making of a Discord Bot! Make sure to read the README.md file to understand it!

const express = require("express");
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

app.get("/", (req,res) => {
  res.send("Hello world");
})


//MESSAGES (!)
const Discord = require("discord.js");
const client = new Discord.Client({intents: ["GUILDS", "GUILD_MESSAGES"]});

client.on("messageCreate", async message => {
 if(message.content === "!test") {
  await message.channel.send("My servers are on and I havent discovered any bugs!")
 

  if(message.content === "!website") {
  await message.channel.send("https://projects.apul.pro/")
  } 

  if(message.content === "!add") {
  await message.channel.send("Sorry, We dont support that yet, But please enjoy all my other features!")
  }
  
  if(message.content === "@everyone") {
  await message.channel.send("We don't care so stfu")
  }
  
  if(message.content === "@here") {
  await message.channel.send("We dont care so stfu")
  }
  
  if(message.content === "@everyone") {
  await message.channel.send("We dont care so stfu")
  }
  
  if(message.content === "@phoenixh1467") {
  await message.channel.send("Who said you could @ my daddy??")
  }
  
  if(message.content === "@liafaith_2000") {
  await message.channel.send("Who said you could @ my mommy??")
  }
  
  if(message.content === "!fuck you") {
  await message.channel.send("too!")
  }
  
  if(message.content === "!nigger") {
  await message.channel.send("Well, at least I aint a monkey..")
  }
  
  if(message.content === "!nigga") {
  await message.channel.send("Well, at least I aint a monkey..")
  }

  } 
 })      

client
  .on("debug", console.log)
  .on("warn", console.log)

client.login(process.env.token); //make sure to have a secret in replit 
