const Aoijs = require("aoi.js")
 
const bot = new Aoijs.Bot({
  sharding: false,  
  shardAmount: 2,  
  mobile: false, 
  //dbhToken: "API KEY", Remove // if using, get an API Key from their Server
  token: "ODQ2NzExNTE3Mzg2NzY4NDE1.YKzfjA.5KCLdd7iD4QM1mVMI4i9bk3Llv4", 
  prefix: ["a!"], 
  autoUpdate: false, 
 
})
bot.onMessage() // Allows Commands to Executed
bot.loadCommands(`./commands/`) //Allows Commands executed by `commands` folder
bot.command({
name: "ping", 
code: `Pong! \`$ping\`` 
})
bot.status({
      text: "Trix's Dms bc he noob",
      type: "Watching,"
      time: 12
      bot.variables({
prefix: "[a!]", 
})