const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "8126919765";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "SUHAIL_11_21_09_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDkyLFxuICAgICAgICAyMCxcbiAgICAgICAgNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMDksXG4gICAgICAgIDMzLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICA5MixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDkwLFxuICAgICAgICAxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDIsXG4gICAgICAgIDc1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDI1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTY5LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTAyLFxuICAgICAgICA5OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAzNyxcbiAgICAgICAgMjMwLFxuICAgICAgICAzMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE5NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE5MixcbiAgICAgICAgOTAsXG4gICAgICAgIDQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEsXG4gICAgICAgIDg5LFxuICAgICAgICAzMixcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDU5LFxuICAgICAgICA5OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzksXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzcsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTIsXG4gICAgICAgIDUwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDkyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTY4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTYyLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDE1LFxuICAgICAgICAyMixcbiAgICAgICAgMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDExOSxcbiAgICAgICAgODUsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDE3LFxuICAgICAgICA5LFxuICAgICAgICA5OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDkxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgODgsXG4gICAgICAgIDgxLFxuICAgICAgICA0NCxcbiAgICAgICAgMjExLFxuICAgICAgICA3MixcbiAgICAgICAgMTg4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTgsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMzQsXG4gICAgICAgIDU5LFxuICAgICAgICA2OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDQwLFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzcsXG4gICAgICAgIDgzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDcxLFxuICAgICAgICA5NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDMsXG4gICAgICAgIDY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDcsXG4gICAgICAgIDIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAzMixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyMzAsXG4gICAgICAgIDc0LFxuICAgICAgICAxODcsXG4gICAgICAgIDcyLFxuICAgICAgICAyNDgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTgyLFxuICAgICAgICA0NyxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjAsXG4gICAgICAgIDQyLFxuICAgICAgICAxOTYsXG4gICAgICAgIDU0LFxuICAgICAgICA5MCxcbiAgICAgICAgMTgsXG4gICAgICAgIDUzLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTE2LFxuICAgICAgICAxLFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTIwLFxuICBcImFkdlNlY3JldEtleVwiOiBcImc0VFp5dVdCL2pwek5HMUlTYWJVL09UelVOUFMydGZCdkVhWWJxQzNDVnc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlVZRTVqd2ZTVEctV1JIZkljUjViSEFcIixcbiAgXCJwaG9uZUlkXCI6IFwiZTA5NmU0Y2EtN2M0MS00NWYzLWIwY2MtNTc5ZmI2MWEwYmMzXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDExNyxcbiAgICAgIDM0LFxuICAgICAgNTksXG4gICAgICAyMCxcbiAgICAgIDI1MSxcbiAgICAgIDE0MCxcbiAgICAgIDI0LFxuICAgICAgMTMwLFxuICAgICAgNjMsXG4gICAgICAxOTMsXG4gICAgICAxNjEsXG4gICAgICAzNCxcbiAgICAgIDExMSxcbiAgICAgIDQ1LFxuICAgICAgMjIzLFxuICAgICAgMTczLFxuICAgICAgMjQ4LFxuICAgICAgODQsXG4gICAgICAxMixcbiAgICAgIDkxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMixcbiAgICAgIDIzNyxcbiAgICAgIDI1NSxcbiAgICAgIDkyLFxuICAgICAgMTMzLFxuICAgICAgMjAwLFxuICAgICAgMzEsXG4gICAgICAxODIsXG4gICAgICAxNzYsXG4gICAgICA4OCxcbiAgICAgIDY4LFxuICAgICAgMjUzLFxuICAgICAgMTg1LFxuICAgICAgMTEwLFxuICAgICAgMTI0LFxuICAgICAgMTQsXG4gICAgICAxMyxcbiAgICAgIDc5LFxuICAgICAgMzYsXG4gICAgICAyMTdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWDVGWE02MlJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjY5MTk3NjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk5ODcwNzMyMzQ5NjQ1OjdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSzYrN01RSEVMcWMwYllHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsazhWVndHb2taWGlrS2x4YTRLSE9acS8zWklvQzBQbmVkSmduOHh3NDNNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlZxQnNvM2JIV29heDYvZXJ1SVczNnRzZW1xZ0VnZHd1bThKakh2S0ZPK2twYy9HY0tUUnBsSDRySDYvU21hSEFyTFduMHdISk04ZmpzcFZ5OVJTUkFRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImFsNmdhK0wyNEhKMFhEWFlVZjhHZjNZSHUzdHVtVHFxY29mdjFwcmJ6OVdQaHZMbVd5TDFTMHhxeUpyK3ZCWnJJcnlJYXdaNmRKSmpENzdpTXprZ0JRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjY5MTk3NjU6N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzI1MTg5Njk0XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==",  // PUT SESSION ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
 
